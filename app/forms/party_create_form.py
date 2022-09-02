from app.models.address import Address
from flask_wtf import FlaskForm
from wtforms import IntegerField, StringField, SelectField, DateTimeField, DateTimeLocalField
from wtforms.validators import DataRequired, Regexp

from app.forms.address_create_form import AddressCreateForm
from app.models.party import Party

class PartyCreateForm(FlaskForm):
    class Meta:
        csrf = False

    partytitle     = StringField('partytitle', validators=[DataRequired()])
    partytimestart = DateTimeLocalField('partytimestart',format="%Y-%m-%dT%H:%M", validators=[DataRequired()])
    partytimeend   = DateTimeLocalField('partytimeend',format="%Y-%m-%dT%H:%M", validators=[DataRequired()])
    partyagemin    = IntegerField('partyagemin', validators=[DataRequired()])
    partyagemax    = IntegerField('partyagemax', validators=[DataRequired()])

    def formToEntity(self):
        party = Party()
        party.partytitle = self.partytitle.data
        party.partytimestart = self.partytimestart.data
        party.partytimeend = self.partytimeend.data
        party.partyagemin = self.partyagemin.data
        party.partyagemax = self.partyagemax.data
        return party