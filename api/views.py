from rest_framework import generics,permissions
from .models import Turf,Booked
from .serializers import TurfSerializer,BookedSerializer


class TurfListCreateAPIView(generics.ListCreateAPIView):
    queryset = Turf.objects.all()
    serializer_class = TurfSerializer
    permission_classes=[permissions.AllowAny]

class SingleTurfAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Turf.objects.all()
    serializer_class = TurfSerializer
    permission_classes=[permissions.AllowAny]

class BookedListCreateAPIView(generics.ListCreateAPIView):
    queryset = Booked.objects.all()
    serializer_class = BookedSerializer
    permission_classes=[permissions.AllowAny]
    
class SingleBookAPIView(generics.RetrieveUpdateDestroyAPIView):
    queryset = Booked.objects.all()
    serializer_class = BookedSerializer
    permission_classes=[permissions.AllowAny]
