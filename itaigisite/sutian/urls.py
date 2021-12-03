from django.urls import path
from sutian.views import tiann, k, tshiau, khautso, siutsong, \
    siutsong_item, mng, tap, thongti, miasenn, kuantsu, \
    pokam, pokam_list, pokam_item

urlpatterns = [
    # 舊網址
    path('k/<str:ji>', k, name='k'),

    path('tshiau/', tshiau, name='tshiau'),
    path('khautso/', khautso, name='khautso'),
    path('siutsong/<int:pianho>', siutsong_item, name='siutsong_item'),
    path('siutsong/', siutsong, name='siutsong'),
    path('mng/', mng, name='mng'),
    path('tap/', tap, name='tap'),
    path('kuantsu/', kuantsu, name='kuantsu'),
    path('thongti/', thongti, name='thongti'),

    path('miasenn/', miasenn, name='miasenn'),
    path('pokam/<int:pianho>/<int:mngho>', pokam_item, name='pokam_item'),
    path('pokam/<int:pianho>', pokam_list, name='pokam_list'),
    path('pokam/', pokam, name='pokam'),
    path('', tiann, name='tiann'),
]
