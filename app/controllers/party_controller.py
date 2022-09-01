from app import app
from app.framework.decorators.inject import inject

from app.services.partyService import PartyService
from app.services.sexService import SexService


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