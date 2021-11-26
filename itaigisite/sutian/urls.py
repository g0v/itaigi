from django.urls import path
from sutian.views import tiann, tshiau, khautso, siutsong, siutsong_item

urlpatterns = [
    path('k/<str:ji>', tshiau, name='tshiau'),
    path('khautso/', khautso, name='khautso'),
    path('siutsong/<int:pianho>', siutsong_item, name='siutsong_item'),
    path('siutsong/', siutsong, name='siutsong'),
    path('', tiann, name='tiann'),
]
