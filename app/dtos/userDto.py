from app.models.address import Address
from app.models.user import  User
from app.dtos.sexDto import  SexDTO
from app.dtos.addressDto import AddressDTO
from app.dtos.tagDto import TagDTO

from app.forms.user.user_register_form import UserRegisterForm

class UserDTO():

    @staticmethod
    def entityToJSON(user: User, password: bool = False):
        try:
            rval = {
                "userid":      user.userid,
                "username":    user.username,
                "usersex":     SexDTO.entityToJSON(user.sex),
                "userage":     user.userage,
                "useraddress": AddressDTO.entityToJSON(user.address),
                "usertags":    [TagDTO.entityToJSON(tag.tags) for tag in user.tags],
                "userparties": user.parties
            }
            if password:
                rval['userpassword'] = user.userpassword
            return rval
        except:
            return None

    @staticmethod
    def formToEntity(form: UserRegisterForm, address: Address):
        user = User()
        user.username = form.username
        user.sex = form.usersex 
        user.userage = form.userage 
        user.address = address 
        
        return user