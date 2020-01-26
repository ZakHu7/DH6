# import os

# from flask import Flask, jsonify
# # from flask_cors import CORS

# # Create our Flask application
# app = Flask(__name__)
# # CORS(app, support_credentials=True)
# # app.config['CORS_HEADERS'] = 'Content-Type'

# # Add an endpoint to our Flask application
# @app.route("/")
# def helloWorld():
#   return ("Hello, cross-origin-world!", 200)



# @app.route('/getRecommendation', methods=['GET'])
# def getRecommendation():
    
#     return jsonify("pong")



# @app.route('/api/getData', methods=['GET'])
# def getData():
#     return jsonify("pong")

# # - - - WE WILL ADD NEW ENDPOINTS HERE - - -

# if __name__ == "__main__":
#     app.run()


from flask import Flask, jsonify, request
from flask_cors import CORS

from Model import getCars


# configuration
DEBUG = True

# instantiate the app
app = Flask(__name__)
app.config.from_object(__name__)

# enable CORS
# CORS(app, resources={r'/*': {'origins': '*'}})
CORS(app, support_credentials=True)


# sanity check route
@app.route('/ping', methods=['GET'])
def ping_pong():
    return jsonify('pong!')

@app.route('/getRecommendation', methods=['POST'])
def getRecommendation():
    # req = request.args
    # req = request.json
    # res = getCars("T2")
    req = request.json
    res = getCars(req["id"])

    return jsonify(res)



if __name__ == '__main__':
    app.run()