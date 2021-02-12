from flask import Flask

app = Flask(__name__)

def func():
    return "Hello"