from app import db

class PartyTag(db.Model):
    __tablename__ = 'party_tags'
    partyid = db.Column(db.ForeignKey('parties.partyid'), primary_key=True, nullable=False)
    tagid   = db.Column(db.ForeignKey('tags.tagid'), primary_key=True, nullable=False)

    parties = db.relationship('Party', back_populates='tags')
    tags    = db.relationship('Tag', back_populates='parties')
