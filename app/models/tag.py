from app import db

class Tag(db.Model):
    __tablename__ = "tags"
    tagid   = db.Column(db.Integer(), primary_key=True, nullable=False)
    tagname = db.Column(db.String(50), nullable=False)

    parties = db.relationship('PartyTag', back_populates="tags")
    users   = db.relationship('UserTag', back_populates="tags")