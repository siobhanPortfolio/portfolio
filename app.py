from flask import Flask, render_template

app = Flask(__name__)

@app.route('/')
def hello_world():
    render_template("index.html")

app.run(host='0.0.0.0', port='81', debug=True)