from app.models.sex import Sex

class SexDTO():

    @staticmethod
    def entityToJSON(sex: Sex):
        return sex.sexname