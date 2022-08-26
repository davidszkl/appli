from app import db

class User(db.Model):
    __tablename__ = "users"
    userid        = db.Column(db.Integer, primary_key=True, nullable=False)
    username      = db.Column(db.String(50), unique=True, nullable=False)
    usersexid     = db.Column(db.ForeignKey('sexes.sexid'), nullable=False)
    useraddressid = db.Column(db.ForeignKey('address.addressid'), nullable=False)
    userage       = db.Column(db.Integer, nullable=False)
    useremail     = db.Column(db.String(50), nullable=False)
    userpassword  = db.Column(db.String(256), nullable=False)

    tags    = db.relationship('UserTag', cascade='all, delete-orphan')
    parties = db.relationship('PartyUser', cascade='all, delete-orphan')
    sex     = db.relationship('Sex', cascade='all')
    address = db.relationship('Address',  cascade='all')