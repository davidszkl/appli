from app.models.party import Party
from app.dtos.sexDto import  SexDTO
from app.dtos.locationDto import LocationDTO
from app.dtos.tagDto import TagDTO
from app.dtos.datetimeDto import DateTimeDTO
from app.dtos.timeDto import TimeDTO

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