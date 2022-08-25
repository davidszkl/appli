from backend import app
from backend.services.partyService import PartyService

@app.route('/parties')
def parties():
    return PartyService().find_all()

@app.route('/parties:<int:partyid>')
def party(partyid: int):
    return PartyService().find_one(partyid=partyid)