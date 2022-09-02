from app import app
from flask import request, jsonify
from app.dtos.addressDto import AddressDTO
from app.dtos.partyDto import PartyDTO
from app.forms.address_create_form import AddressCreateForm
from app.forms.party_create_form import PartyCreateForm

from app.framework.decorators.inject import inject

from app.services.partyService import PartyService
from app.services.sexService import SexService
from app.services.tagService import TagService


@app.route('/parties')
@inject
def parties(partyservice: PartyService):
    return partyservice.find_all()

@app.route('/parties:<int:partyid>')
@inject
def party(partyid: int, partyservice: PartyService):
    return partyservice.find_one(partyid=partyid)

@app.route('/sexes')
@inject
def  sexes(sexservice: SexService):
    return sexservice.find_all()

@app.route('/create_party', methods=['POST'])
@inject
def createParty(partyservice: PartyService):
    addressForm = AddressCreateForm.from_json(request.json) 
    partyForm   = PartyCreateForm.from_json(request.json)
    partySexes  = request.json.get('partysexes', [])
    partyTags   = request.json.get('partytags', [])

    tagsrv = TagService()
    tagsrv.insert_many(partyTags)

    if not addressForm.validate():
        return jsonify({"errors": addressForm.errors})
         
    if not partyForm.validate():
        return jsonify({"errors": partyForm.errors})
    
    return partyservice.insert_one(partyForm, addressForm, partySexes, partyTags)