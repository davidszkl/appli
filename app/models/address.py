from app import db

class Address(db.Model):
    __tablename__ = "address"
    addressid      = db.Column(db.Integer, primary_key=True, nullable=False)
    addressstreet  = db.Column(db.String(50), nullable=False)
    addressnumber  = db.Column(db.Integer(), nullable=False)
    addresszip     = db.Column(db.String(50), nullable=False)
    addresscounty  = db.Column(db.String(50), nullable=False)
    addresscountry = db.Column(db.String(50), nullable=False)

    db.UniqueConstraint("addressstreet", "addressnumber", "addresszip", "addresscounty", "addresscountry", name="unique_address")