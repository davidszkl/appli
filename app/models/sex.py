from asyncio.proactor_events import _ProactorWritePipeTransport
from app import db

class Sex(db.Model):
    __tablename__ = "sexes"
    sexid = db.Column(db.Integer(), primary_key=True)
    sexname = db.Column(db.String(50))

    parties = db.relationship('PartySex', back_populates='sexes')
    #users = db.relationship('User', back_populates='users')