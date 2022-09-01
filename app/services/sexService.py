from flask import jsonify
from app.models.sex import Sex
from app.dtos.sexDto import SexDTO

class  SexService:
    def find_one():
        pass

    def find_one_by_name(name: str):
        return Sex.query.filter_by(sexname=name).first()

    def find_all(self):
        return jsonify([SexDTO.entityToJSON(sex) for sex in Sex.query.all()])
