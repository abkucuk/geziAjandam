from placesapi.viewsets import PlaceViewSets
from rest_framework import routers

router = routers.DefaultRouter()
router.register('place', PlaceViewSets)