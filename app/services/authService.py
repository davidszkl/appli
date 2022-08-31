from flask import request, jsonify
from jwt import PyJWTError
import jwt
from app import app


class AuthService:
    def decodeJWT(self):
        token = None

        if 'x-access-tokens' in request.headers:
            token = request.headers['x-access-tokens']

        if 'Authorization' in request.headers:
            token = request.headers['Authorization']

        if not token:
            return None

        try:
            token = token.replace('Bearer ', '')
            return jwt.decode(token, app.config['SECRET_KEY'], algorithms=["HS256"])['userid']
        except PyJWTError as e:
            print(e)
            return None