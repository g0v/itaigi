from django.urls import path
from sutian.views import tiann, tshiau, khautso

urlpatterns = [
    path('k/<str:ji>', tshiau, name='tshiau'),
    path('khautso/', khautso, name='khautso'),
    path('', tiann, name='tiann'),
]
