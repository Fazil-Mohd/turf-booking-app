from django.db import models

# Create your models here.



class Turf(models.Model):
    turf_name = models.CharField(max_length=100)
    location = models.CharField(max_length=255)
    cordinates=models.CharField(max_length=200)
    favorite=models.BooleanField()

    def __str__(self):
        return self.turf_name
    

class Booked(models.Model):
    user_name=models.CharField(max_length=100)
    turf=models.ForeignKey(Turf,on_delete=models.CASCADE)
    date=models.CharField(max_length=100)
    time=models.CharField(max_length=100)
    status=models.BooleanField()

    def __str__(self):
        return self.user_name


