from app import db

class Party(db.Model):
    __tablename__ = "parties"
    partyid = db.Column(db.Integer(), nullable=False, primary_key=True)
    partytitle = db.Column(db.String(50), nullable=True)
    partylocationid = db.Column(db.ForeignKey('locations.locationid'))
    partytime = db.Column(db.DateTime())
    partyduration = db.Column(db.Time())
    partyagemin = db.Column(db.Integer(), nullable=False)
    partyagemax = db.Column(db.Integer(), nullable=False)

    tags = db.relationship('PartyTag', cascade='all')
    sexes = db.relationship('PartySex', cascade='all')
    users = db.relationship('PartyUser', cascade='all')