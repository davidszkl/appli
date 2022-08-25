from backend.models.party import Party
from backend.dtos.sexDto import  SexDTO
from backend.dtos.locationDto import LocationDTO
from backend.dtos.tagDto import TagDTO
from backend.dtos.datetimeDto import DateTimeDTO
from backend.dtos.timeDto import TimeDTO

class PartyDTO():

    @staticmethod
    def entityToJSON(party: Party):
        return {
            "partyid":       party.partyid,
            "partytitle":    party.partytitle,
            "partylocation": LocationDTO.entityToJSON(party.location),
            "partytime":     DateTimeDTO.entityToJSON(party.partytime),
            "partyduration": TimeDTO.entityToJSON(party.partyduration),
            "partyagemin":   party.partyagemin,
            "partyagemax":   party.partyagemax,
            "partysexes":    [SexDTO.entityToJSON(sex.sexes) for sex in party.sexes],
            "partytags":     [TagDTO.entityToJSON(tag.tags) for tag in party.tags],
        }