from app   import app
from flask import request, jsonify, make_response
import jwt

from app.framework.decorators.inject import inject

from app.dtos.userDto import UserDTO
from app.services.authService import AuthService
from app.services.userService import UserService

from app.forms.user.user_register_form import UserRegisterForm
from app.forms.address_create_form     import AddressCreateForm
from app.forms.user.user_login_form    import UserLoginForm


@app.route('/users')
@inject
def users(userservice: UserService):
    return userservice.find_all()

@app.route('/profile')
@inject
def profile(userservice: UserService, authservice: AuthService):
    userid = authservice.decodeJWT()
    if not userid:
        return jsonify({"error": "tokenError"})
    return userservice.find_one(userid=userid)

@app.route('/register', methods=['POST'])
@inject
def registerUser(userservice: UserService):
    userForm = UserRegisterForm.from_json(request.json)
    addressForm = AddressCreateForm.from_json(request.json)

    if userForm.validate() and addressForm.validate():
        user = userservice.insert_one(userForm, addressForm)
        return user
    
    return jsonify(userForm.errors, addressForm.errors)

@app.route('/login', methods=['POST'])
@inject
def login(userservice: UserService):
    loginForm = UserLoginForm.from_json(request.json)
    loginJSON = loginForm.getAsJSON()
    user = userservice.find_one_by(username=loginJSON['username'], password=True)
    
    if not loginForm.validate():
        return jsonify({"errors": loginForm.errors})

    if user is not None:
        if userservice.validate_password(user, loginJSON['userpassword']):
            token = jwt.encode({ "userid": user['userid'] }, app.config['SECRET_KEY'], "HS256").decode('utf-8')
            return jsonify({"token": token})
        
    return jsonify({"errors": {"": ["wrong username or password"]}})

@app.route('/test', methods=['GET', 'POST'])
def test():
    token = jwt.encode({"token": "david"}, "secret", "HS256").decode('utf-8')
    return jsonify({"token": token})