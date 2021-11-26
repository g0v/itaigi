from django.urls import path
from sutian.views import tiann, tshiau, khautso, siutsong

urlpatterns = [
    path('k/<str:ji>', tshiau, name='tshiau'),
    path('khautso/', khautso, name='khautso'),
    path('siutsong/', siutsong, name='siutsong'),
    path('', tiann, name='tiann'),
]
