from app import db

class UserTag(db.Model):
    userid = db.Column(db.ForeignKey('users.userid'), primary_key=True, nullable=False)
    tagid  = db.Column(db.ForeignKey('tags.tagid'), primary_key=True, nullable=False)

    users = db.relationship('User', back_populates='tags')
    tags  = db.relationship('Tag')