from crypt import methods
from app import app
from flask import request, jsonify
from app.dtos.userDto import UserDTO
from app.services.userService import UserService

from app.forms.user.user_register_form import UserRegisterForm
from app.forms.address_create_form import AddressCreateForm

userservice = UserService()

@app.route('/users')
def users():
    return userservice.find_all()

@app.route('/users/<int:userid>')
def oneUser(userid: int):
    return userservice.find_one(userid=userid)

@app.route('/register', methods=['POST'])
def registerUser():
    userForm = UserRegisterForm.from_json(request.json)
    addressForm = AddressCreateForm.from_json(request.json)

    if userForm.validate() and addressForm.validate():
        user = userservice.insert_one(userForm, addressForm)
        return user
    
    return jsonify(userForm.errors, addressForm.errors)