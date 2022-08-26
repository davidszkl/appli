from app.models.sex import Sex

class  sexService:
    def find_one():
        pass

    def find_one_by_name(name: str):
        return Sex.query.filter_by(sexname=name).first()
