from app.models.address import Address
from app.models.user import  User
from app.dtos.sexDto import  SexDTO
from app.dtos.locationDto import LocationDTO
from app.dtos.tagDto import TagDTO

from app.forms.user.user_register_form import UserRegisterForm

class UserDTO():

    @staticmethod
    def entityToJSON(user: User):
        return {
            "userid":      user.userid,
            "username":    user.username,
            "usersex":     SexDTO.entityToJSON(user.sex),
            "userage":     user.userage,
            "useraddress": LocationDTO.entityToJSON(user.address),
            "usertags":    [TagDTO.entityToJSON(tag.tags) for tag in user.tags],
            "userparties": user.parties,
        }

    @staticmethod
    def formToEntity(form: UserRegisterForm, address: Address):
        user = User()
        user.username = form.username
        user.usersex = form.usersex 
        user.userage = form.userage 
        user.useraddress = address 
        
        return user