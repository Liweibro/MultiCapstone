from flask import Flask
#from flask import render_template, url_for, redirect, request, jsonify, Response #之後會用到的

app = Flask(__name__)
app.config["DEBUG"] = True

@app.route('/')
def hello():
    return "hello world"

@app.route('/resterant',methods=['POST'])  

@app.route('/menu',methods=['POST'])

@app.route('/orderlist',methods=['POST'])

@app.route('/profile',methods=['POST'])

#@app.route('/chatroom',methods=['POST'])
@app.route('/ordering',methods=['GET'])
def hello():
    return "hello world"

if __name__ == "__main__":
    app.run()