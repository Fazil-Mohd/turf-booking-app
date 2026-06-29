from rest_framework import serializers
from .models import Turf,Booked
class TurfSerializer(serializers.ModelSerializer):
    class Meta:
        model = Turf
        fields = '__all__'

class BookedSerializer(serializers.ModelSerializer):
    class Meta:
        model=Booked
        fields='__all__'
    