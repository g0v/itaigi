from django.urls import path
from sutian.views import tiann, tshiau

urlpatterns = [
    path('k/', tshiau, name='tshiau'),
    path('', tiann, name='tiann'),
]
