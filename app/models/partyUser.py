from app import db

class PartyUser(db.Model):
    __tablename__ = "party_users"
    partyId = db.Column(db.ForeignKey('parties.partyid'), primary_key=True, nullable=False)
    userId  = db.Column(db.ForeignKey('users.userid'), primary_key=True, nullable=False)

    party = db.relationship('Party', back_populates='users') 
    user  = db.relationship('User', back_populates='parties')
