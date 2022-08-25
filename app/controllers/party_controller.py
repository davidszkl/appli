from app import app
from app.services.partyService import PartyService

@app.route('/parties')
def parties():
    return PartyService().find_all()
