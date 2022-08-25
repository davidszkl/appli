from backend.models.tag import Tag

class TagDTO():

    @staticmethod
    def entityToJSON(tag: Tag):
        return {"tagname": tag.tagname}