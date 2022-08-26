from app import db

class Party(db.Model):
    __tablename__ = "parties"
    partyid         = db.Column(db.Integer(), nullable=False, primary_key=True)
    partytitle      = db.Column(db.String(50), nullable=True)
    partyaddressid = db.Column(db.ForeignKey('address.addressid'), nullable=False)
    partytime       = db.Column(db.DateTime(), nullable=False)
    partyduration   = db.Column(db.Time(), nullable=False)
    partyagemin     = db.Column(db.Integer(), nullable=False)
    partyagemax     = db.Column(db.Integer(), nullable=False)

    sexes    = db.relationship('PartySex', cascade='all, delete-orphan')
    tags     = db.relationship('PartyTag', cascade='all, delete-orphan')
    users    = db.relationship('PartyUser', cascade='all, delete-orphan')
    address = db.relationship('Address', cascade='all')