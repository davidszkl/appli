from app import db
from flask import jsonify

from app.forms.address_create_form import AddressCreateForm
from app.forms.party_create_form import PartyCreateForm
from app.models.partySex import PartySex

from app.models.sex import Sex
from app.models.party import Party
from app.dtos.partyDto import PartyDTO
from app.models.tag import Tag

class PartyService:
    def find_all(self):
        return jsonify([PartyDTO.entityToJSON(party) for party in Party.query.filter_by().all()])

    def find_one(self, partyid: int):
        return PartyDTO.entityToJSON(Party.query.filter_by(partyid=partyid).first())

    def insert_one(self, partyform: PartyCreateForm, addressForm: AddressCreateForm, partysexes, partytags):
        address = addressForm.formToEntity()
        party = partyform.formToEntity()
        party.address = address

        for sex in partysexes:
            party.addSex(Sex.query.filter_by(sexname=sex).first())

        for tag in partytags:
            party.addTag(Tag.query.filter_by(tagname=tag).first())

        try:
            db.session.add(party)
            db.session.commit()
        except Exception as e:
            db.session.rollback()
            print(e)

        return PartyDTO.entityToJSON(party)