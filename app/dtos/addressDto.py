from app.models.address import Address

class AddressDTO():

    @staticmethod
    def entityToJSON(address: Address):
        return {key : val for key, val in address.__dict__.items() if key not in  ["_sa_instance_state", "locationidS"]}