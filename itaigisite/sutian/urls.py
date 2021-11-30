from django.urls import path
from sutian.views import tiann, tshiau, khautso, siutsong, \
    siutsong_item, mng, tap, thongti, miasenn, kuantsu

urlpatterns = [
    path('k/<str:ji>', tshiau, name='tshiau'),
    path('khautso/', khautso, name='khautso'),
    path('siutsong/<int:pianho>', siutsong_item, name='siutsong_item'),
    path('siutsong/', siutsong, name='siutsong'),
    path('mng/', mng, name='mng'),
    path('tap/', tap, name='tap'),
    path('kuantsu/', kuantsu, name='kuantsu'),
    path('thongti/', thongti, name='thongti'),

    path('miasenn/', miasenn, name='miasenn'),
    path('', tiann, name='tiann'),
]
