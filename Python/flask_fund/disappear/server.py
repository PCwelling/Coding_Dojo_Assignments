from flask import Flask, render_template, redirect, request
app = Flask(__name__)
@app.route('/')
def index():
    return render_template("index.html")

@app.route('/ninja')
def ninja():
    return render_template("ninja.html")

@app.route('/ninja/<color>')
def show_colored_ninja(color):
    
    name = "April"

    if color == "blue":
        name = "Leonardo"
    elif color == "orange":
        name = "Michelangelo"
    elif color == "red":
        name = "Raphael"
    elif color == "purple":
        name = "Donatello"
     
    return render_template("color.html", ninja=name)
    

app.run(debug=True)

