from time import time

class TimeDTO():

    @staticmethod
    def entityToJSON(time: time):
        return {
            "hour": time.hour,
            "minute": time.minute
        }