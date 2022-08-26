from app.models.address import Address

class LocationDTO():

    @staticmethod
    def entityToJSON(location: Address):
        return {key : val for key, val in location.__dict__.items() if key not in  ["_sa_instance_state", "locationidS"]}