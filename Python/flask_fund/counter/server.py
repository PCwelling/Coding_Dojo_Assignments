from flask import Flask, render_template, session, request, redirect
app = Flask(__name__)
app.secret_key = 'ThisIsSecret'

@app.route("/")
def index():
    if "count" in session:
        session["count"] +=1
    else:
        session["count"] = 1
    return render_template("index.html", count=session["count"])

@app.route("/ninja1", methods=["POST"])
def ninja1():
    session["count"] += 1
    return redirect("/")

@app.route('/ninja2', methods=["POST"])
def ninja2():
    session["count"] = 0
    return redirect("/")

app.run(debug=True)