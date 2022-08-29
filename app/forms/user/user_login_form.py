from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField
from wtforms.validators import DataRequired, Regexp

class UserLoginForm(FlaskForm):
    class Meta:
        csrf = False

    username     = StringField('username', validators=[DataRequired()])
    userpassword = StringField('userpassword', validators=[DataRequired()])

    def getAsJSON(self):
        return {"username": self.username.data, "userpassword": self.userpassword.data}