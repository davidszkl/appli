from app.models.address import Address
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SelectField
from wtforms.validators import DataRequired, Regexp

class AddressCreateForm(FlaskForm):
    class Meta:
        csrf = False

    addressstreet = StringField('addressstreet', validators=[DataRequired()])
    addressnbr = IntegerField('addressnbr', validators=[DataRequired()])
    addresszip = IntegerField('addresszip', validators=[DataRequired()])
    addresscounty = StringField('addresscounty', validators=[DataRequired()])
    addresscountry = StringField('addresscountry', validators=[DataRequired()])

    def formToEntity(self):
        address = Address()
        address.addressstreet  = self.addressstreet.data
        address.addressnumber  = self.addressnbr.data
        address.addresszip     = self.addresszip.data
        address.addresscounty  = self.addresscounty.data
        address.addresscountry = self.addresscountry.data
        return address