from flask import jsonify
from backend.models.party import Party
from backend.dtos.partyDto import PartyDTO

class PartyService:
    def find_all(self):
        return jsonify([PartyDTO.entityToJSON(party) for party in Party.query.filter_by().all()])

    def find_one(self, partyid: int):
        return PartyDTO.entityToJSON(Party.query.filter_by(partyid=partyid).first())
