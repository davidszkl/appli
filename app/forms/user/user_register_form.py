from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, Regexp

from app.models.user import User
from app.services.sexService import sexService

class UserRegisterForm(FlaskForm):
    class Meta:
        csrf = False

    username = StringField('username', validators=[DataRequired()])
    useremail = StringField('useremail', validators=[DataRequired()])
    userpassword = StringField('userpassword', validators=[DataRequired()])
    userconfirm = StringField('useronfirm', validators=[DataRequired()])
    userage = IntegerField('userage', validators=[DataRequired()])
    usersex = StringField('usersex', validators=[DataRequired()])

    def formToEntity(self):
        user = User()
        user.username = self.username.data
        user.useremail = self.useremail.data
        user.userpassword = self.userpassword.data
        user.userage = self.userage.data
        user.sex = sexService.find_one_by_name(self.usersex.data)
        user.parties = []
        return user