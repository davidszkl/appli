from flask import jsonify
from app import db
from app.models.tag import Tag
from app.dtos.tagDto import TagDTO

class  TagService:    
    def find_one():
        pass

    def find_one_by_name(name: str):
        return Tag.query.filter_by(tagname=name).first()

    def find_all(self):
        return jsonify([TagDTO.entityToJSON(tag) for tag in Tag.query.all()])

    def insert_one(self, tagname: str):
        all_tags = self.find_all()

        for tag in all_tags.json:
            if tag['tagname'] == tagname:
                return

        try:
            tag = Tag()
            tag.tagname = tagname
            db.session.add(tag)
            db.session.commit()

        except Exception as e:
            db.session.rollback()
            print(e)

    def insert_many(self, tags):
        for tag in tags:
            self.insert_one(tag)