from flask import jsonify

from app import db
from app.models.user import User
from app.dtos.userDto import UserDTO

from app.forms.user.user_register_form import UserRegisterForm
from app.forms.address_create_form import AddressCreateForm

import bcrypt

class UserService:
    def find_all(self):
        return jsonify([UserDTO.entityToJSON(user) for user in User.query.filter_by().all()])

    def find_one(self, userid: int):
        return UserDTO.entityToJSON(User.query.filter_by(userid=userid).first())

    def find_one_by(self, password=False, **kwargs):
        return UserDTO.entityToJSON(User.query.filter_by(**kwargs).first(), password=password)

    def insert_one(self, userForm: UserRegisterForm, addressForm: AddressCreateForm):
        address = addressForm.formToEntity()
        user = userForm.formToEntity()
        user.address = address
        user.userpassword = bcrypt.hashpw(user.userpassword.encode('utf-8'), bcrypt.gensalt()).decode('utf-8')

        try:
            db.session.add(user)
            db.session.commit()
            return UserDTO.entityToJSON(user)

        except Exception as e:
            print(e)

    def validate_password(self, user: User, password: str):
        if bcrypt.checkpw(password.encode('utf-8'), user['userpassword'].encode('utf-8')):
            return True
        return False