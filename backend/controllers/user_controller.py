from backend import app
from backend.services.userService import UserService

@app.route('/users')
def users():
    srvc = UserService()
    return srvc.find_all()

@app.route('/users/<int:userid>')
def oneUser(userid: int):
    srvc = UserService()
    return srvc.find_one(userid=userid)
