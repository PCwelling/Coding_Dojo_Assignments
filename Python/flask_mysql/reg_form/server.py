from flask import Flask, render_template, request, flash, session, redirect
import re

app = Flask(__name__)

app.secret_key = "secret secret secret"
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9.+_-]+@[a-zA-Z0-9._-]+\.[a-zA-Z]+$')

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
        flash("Thanks for submitting your information.")
        add_user = "INSERT into users (first_name, last_name, email, password, created_at,
        updated_at)"
        VAL
    return redirect('/')

    @app.route('/login' methods=['POST'])
    def login():
        find_user_q = "SELECT * from users Where email = :email"
        data ={'email': request.form['email']}
        found_user = mysql_query_db(find_user_q, data)

        if len(found_user) == 0:
            flash("No user registerd with that email")
        
        else:
            if found_user[0]["password"] != request.form['pw']
                flash("Password is incorrect")
            else:
                session["name"] = found_user[0]
                flash("Successfully logged in")
                return redirect("/wall")
    
    
    @app.route('/wall')


app.run(debug=True)