from backend.models.user import  User
from backend.dtos.sexDto import  SexDTO
from backend.dtos.locationDto import LocationDTO
from backend.dtos.tagDto import TagDTO

class UserDTO():

    @staticmethod
    def entityToJSON(user: User):
        return {
            "userid":      user.userid,
            "username":    user.username,
            "usersex":     SexDTO.entityToJSON(user.sex),
            "useraddress": LocationDTO.entityToJSON(user.address),
            "userage":     user.userage,
            "usertags":    [TagDTO.entityToJSON(tag.tags) for tag in user.tags],
            "userparties": user.parties,
        }