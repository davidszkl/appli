from backend import db

class Location(db.Model):
    __tablename__ = "locations"
    locationid = db.Column(db.Integer, primary_key=True)
    locationstreet = db.Column(db.String(50))
    locationnumber = db.Column(db.Integer)
    locationzip = db.Column(db.String(50))
    locationcounty = db.Column(db.String(50))
    locationcountry = db.Column(db.String(50))

   # user = db.relationship('User', back_populates='useraddress')