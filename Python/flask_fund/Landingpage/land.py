from flask import Flask, render_template, request, redirect  # Import Flask to allow us to create our app.
app = Flask(__name__)    # Global variable __name__ tells Flask whether or not we are running the file
# directly, or importing it as a module.
@app.route('/')          # The "@" symbol designates a "decorator" which attaches the following
# function to the '/' route. This means that whenever we send a request to
# localhost:5000/ we will run the following "hello_world" function.
def hello_world():
    return render_template('index.html')

@app.route('/ninjas')
def ninjas():
    return render_template('ninjas.html')

@app.route('/dojo/news')
def dojos():
    return render_template('dojos.html')

app.run(debug=True)      # Run the app in debug mode.