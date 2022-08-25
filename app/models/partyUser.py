from app import db

class PartyUser(db.Model):
    __tablename__ = "party_users"
    partyId = db.Column(db.ForeignKey('parties.partyid'), primary_key=True)
    userId = db.Column(db.ForeignKey('users.userid'), primary_key=True)

    party = db.relationship('Party', back_populates='users') 
    user = db.relationship('User', back_populates='parties')
