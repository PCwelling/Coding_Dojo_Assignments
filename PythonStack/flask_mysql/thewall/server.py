from flask import Flask, render_template, request, flash, session, redirect
import re
from mysqlconnection import MySQLConnector

app = Flask(__name__)

app.secret_key = "secret secret secret"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')
mysql = MySQLConnector(app, "thewall")

@app.route('/')
def index():
    return render_template('index.html')

#route to accept the submitted form and validate it
@app.route('/register', methods=["POST"])
def register():
    is_valid = True
    #email validations
    if len(request.form["email"]) == 0:
        flash("Email field is required")
        is_valid = False
    elif not EMAIL_REGEX.match(request.form['email']):
        flash("Invalid email")
        is_valid = False

    #first name validations
    if len(request.form["fname"]) < 0:
        flash("First name is required")
        is_valid = False
    elif not request.form["fname"].isalpha():
        flash("Invalid first name")
        is_valid = False
    
    #last name validations
    if len(request.form["lname"]) < 0:
        flash("Last name is required")
        is_valid = False
    elif not request.form["lname"].isalpha():
        flash("Invalid last name")
        is_valid = False

    #password validations
    if len(request.form["pw"]) < 8:
        flash("Password must be at least 8 characters")
        is_valid = False
    elif request.form["pw"] != request.form["confpw"]:
        flash("Passwords do not match")
        is_valid = False

    if is_valid:
        add_user = "INSERT INTO users (first_name, last_name, email, password, created_at, updated_at) VALUES (:fn, :ln, :em, :pw, NOW(), NOW())"
        user_data = { 'fn': request.form["fname"],
                      'ln': request.form["lname"],
                      'em': request.form["email"],
                      'pw': request.form["pw"]}
        user_id = mysql.query_db(add_user, user_data)
        #set user in session
        session["name"] = request.form["fname"]
        session["user_id"] = user_id
        return redirect('/wall')
        
    return redirect('/')

@app.route('/login', methods=["POST"])
def login():
    #is there a user with that email in my db?
    find_user_q = "SELECT * FROM users WHERE email = :email"
    data = { 'email': request.form["email"]}
    found_user = mysql.query_db(find_user_q, data)

    #no user with that email
    if len(found_user) == 0:
        flash("No user registered with that email")
    else:
        #if so, does the password they entered match what is in the db?
        if found_user[0]["password"] != request.form["pw"]:
            flash("Password is incorrect")
        else:
            #set user in session
            session["name"] = found_user[0]["first_name"]
            session["user_id"] = found_user[0]["User_id"]
            return redirect('/wall')
    
    return redirect('/')

@app.route('/wall')
def show_wall():
    msg_que = "SELECT * FROM messages JOIN users ON users.User_id = messages.users_User_id ORDER BY messages.created_at DESC"
    msg_disp = mysql.query_db(msg_que)

    com_que = "SELECT * FROM comments JOIN  users ON users.User_id = comments.users_User_id JOIN messages ON messages.message_id = comments.messages_message_id ORDER BY comments.created_at DESC"
    com_disp = mysql.query_db(com_que)
    return render_template('wall.html', disp=msg_disp, cdisp=com_disp)

@app.route('/logout', methods=["POST"])
def logout():    
    if 'name' not in session:
        return redirect('/')
    elif 'user_id' not in session:
        return redirect('/')
    session.pop('name')
    session.pop('user_id')
    return redirect('/')

@app.route('/msg', methods=["POST"])
def msg():
    add_msg = "INSERT INTO messages (users_User_id, message, created_at) VALUES (:ui, :msg, NOW())"
    user_data = {"ui" : session['user_id'], "msg" : request.form['msg']}
    usr_msg = mysql.query_db(add_msg, user_data)    
    return redirect('/wall')


@app.route('/com', methods=["POST"])
def com():
    add_com = "INSERT INTO comments (messages_message_id, users_User_id, comment, created_at) VALUES (:mi, :ui, :com, NOW())"
    user_data = {"mi" : request.form['message_id'], "ui" : session['user_id'], "com" : request.form['com']}
    usr_com = mysql.query_db(add_com, user_data)
    return redirect('/wall')

app.run(debug=True)