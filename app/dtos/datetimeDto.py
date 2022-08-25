from datetime import datetime

class DateTimeDTO():

    @staticmethod
    def entityToJSON(datetime: datetime):
        print(datetime.year)
        return {
            "year": datetime.year,
            "month": datetime.month,
            "day": datetime.day,
            "hour": datetime.hour,
            "minute": datetime.minute
        }