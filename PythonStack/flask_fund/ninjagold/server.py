from flask import Flask, render_template, session, request, redirect
import random
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route("/")
def index():
    if "totalcoins" not in session:
        session["totalcoins"] = 0
    
    if "log" not in session:
        session["log"] = []
    
    return render_template("index.html", totalcoins = session["totalcoins"], log = session["log"])

@app.route("/process_money", methods=["POST"])
def process_money():
    
    if request.form['building'] == "farm":
        farm_money = random.randrange(2,6)
        session["totalcoins"] += farm_money
        mystr = "Found ", farm_money, " at the Farm"
    
    if request.form['building'] == "cave":
        cave_money = random.randrange(5,11)
        session["totalcoins"] += cave_money
        mystr = "Found ", cave_money, " at the Cave"

    if request.form['building'] == "house":
        house_money = random.randrange(2,6)
        session["totalcoins"] += house_money
        mystr = "Found ", house_money, " at the House"

    if request.form['building'] == "casino":
        casino_money = random.randrange(-50, 51)
        session["totalcoins"] += casino_money
        if casino_money > 0:
            mystr = "Found ", casino_money, " at the Casino"
        else:
            mystr = "Lost ", casino_money, " at the Casino"

    session["log"] = mystr

    return redirect('/')

    @app.route

app.run(debug=True)