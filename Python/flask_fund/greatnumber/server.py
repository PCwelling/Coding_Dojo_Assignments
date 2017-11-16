from flask import Flask, redner_template, session, redirect, request
import random
app = Flask(__name__)
app.secretkey = "ThisIsSecret"
