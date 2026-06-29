from django.urls import path,include

from .views import SingleTurfAPIView,TurfListCreateAPIView,BookedListCreateAPIView,SingleBookAPIView
urlpatterns=[
    path('turf/',TurfListCreateAPIView.as_view()),
    path('turf/<int:pk>',SingleTurfAPIView.as_view()),
    path('booked/',BookedListCreateAPIView.as_view()),
    path('booked/<int:pk>',SingleBookAPIView.as_view())

]