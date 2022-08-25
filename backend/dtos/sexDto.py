from backend.models.sex import Sex

class SexDTO():

    @staticmethod
    def entityToJSON(sex: Sex):
        return {key : val for key, val in sex.__dict__.items() if key != "_sa_instance_state"}