from rest_framework import viewsets
from . import models
from . import serializers

class PlaceViewSets(viewsets.ModelViewSet):
    queryset = models.Place.objects.all()
    serializer_class = serializers.PlaceSerializer

