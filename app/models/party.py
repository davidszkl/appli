from app import db
from app.models.partySex import PartySex
from app.models.sex import Sex
from app.models.tag import Tag
from app.models.partyTags import PartyTag

class Party(db.Model):
    __tablename__ = "parties"
    partyid         = db.Column(db.Integer(),  nullable=False, primary_key=True)
    partytitle      = db.Column(db.String(50), nullable=True)
    partyaddressid  = db.Column(db.ForeignKey('address.addressid'), nullable=False)
    partytimestart  = db.Column(db.DateTime(), nullable=False)
    partytimeend    = db.Column(db.DateTime(), nullable=False)
    partyagemin     = db.Column(db.Integer(),  nullable=False)
    partyagemax     = db.Column(db.Integer(),  nullable=False)

    sexes    = db.relationship('PartySex', cascade='all, delete-orphan')
    tags     = db.relationship('PartyTag', cascade='all, delete-orphan')
    users    = db.relationship('PartyUser', cascade='all, delete-orphan')
    address  = db.relationship('Address', cascade='all')

    def addSex(self, sex: Sex):
        partysex = PartySex()
        partysex.parties = self
        partysex.sexes = sex
        self.sexes.append(partysex)

    def addTag(self, tag: Tag):
        partytag = PartyTag()
        partytag.parties = self
        partytag.tags = tag
        self.tags.append(partytag)