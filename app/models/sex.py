from app import db

class Sex(db.Model):
    __tablename__ = "sexes"
    sexid   = db.Column(db.Integer(), primary_key=True, nullable=False)
    sexname = db.Column(db.String(50), nullable=False, unique=True)

    parties = db.relationship('PartySex', back_populates='sexes')