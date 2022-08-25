from app.models.user import User
from app.dtos.userDto import UserDTO

class UserService:
    def find_one(self, userid: int):
        return UserDTO.entityToJSON(User.query.filter_by(userid=userid).first())