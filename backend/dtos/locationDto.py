from backend.models.location import Location

class LocationDTO():

    @staticmethod
    def entityToJSON(location: Location):
        return {key : val for key, val in location.__dict__.items() if key not in  ["_sa_instance_state", "locationidS"]}