from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)  # Permet les requêtes cross-origin (Angular et Flask)

# Exemple de route pour tester la connexion
@app.route('/api/data', methods=['GET'])
def get_data():
    return jsonify({"message": "Connexion Flask-Angular réussie", "data": [1, 2, 3]})

if __name__ == "__main__":
    app.run(debug=True, port=5000)  # Exécutez Flask sur le port 5000
