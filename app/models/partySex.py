from app import db

class PartySex(db.Model):
    __tablename__ = 'party_sexes'
    partyid = db.Column(db.ForeignKey('parties.partyid'), primary_key=True, nullable=False)
    sexid   = db.Column(db.ForeignKey('sexes.sexid'), primary_key=True, nullable=False)

    parties = db.relationship('Party', back_populates='sexes')
    sexes   = db.relationship('Sex', back_populates='parties')
