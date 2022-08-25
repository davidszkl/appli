from app.models.user import  User
from app.dtos.sexDto import  SexDTO
from app.dtos.locationDto import LocationDTO
from app.dtos.tagDto import TagDTO

class UserDTO():

    @staticmethod
    def entityToJSON(user: User):
        return {
            "userid":      user.userid,
            "username":    user.username,
            "usersex":     SexDTO.entityToJSON(user.sex),
            "useraddress": LocationDTO.entityToDTO(user.address),
            "userage":     user.userage,
            "usertags":    [TagDTO.entityToJSON(tag.tags) for tag in user.tags],
            "userparties": user.parties,
        }