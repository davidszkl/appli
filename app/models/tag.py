from app import db

class Tag(db.Model):
    __tablename__ = "tags"
    tagid = db.Column(db.Integer(), primary_key=True)
    tagname = db.Column(db.String(50))

    parties = db.relationship('PartyTag', back_populates="tags")
    users = db.relationship('UserTag', back_populates="tags")