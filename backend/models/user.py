from backend import db

class User(db.Model):
    __tablename__ = "users"
    userid = db.Column(db.Integer, primary_key=True)
    username = db.Column(db.String(50), unique=True)
    usersexid = db.Column(db.ForeignKey('sexes.sexid'))
    useraddressid = db.Column(db.ForeignKey('locations.locationid'))
    userage = db.Column(db.Integer, nullable=False)

    tags = db.relationship('UserTag', cascade='all')
    parties = db.relationship('PartyUser', cascade='all')
    sex = db.relationship('Sex', cascade='all')
    address = db.relationship('Location',  cascade='all')