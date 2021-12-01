from django.shortcuts import render

# Create your views here.


def tiann(request):
    return render(request, 'sutian/tiann.html')


def tshiau(request, ji):
    return render(request, 'sutian/tshiau.html')


def khautso(request):
    return render(request, 'gua/khautso.html')


def siutsong(request):
    return render(request, 'gua/siutsong.html')


def siutsong_item(request, pianho):
    return render(request, 'gua/siutsong_item.html')


def mng(request):
    return render(request, 'gua/mng.html')


def tap(request):
    return render(request, 'gua/tap.html')


def kuantsu(request):
    return render(request, 'gua/kuantsu.html')


def thongti(request):
    return render(request, 'gua/thongti.html')


def miasenn(request):
    return render(request, 'sutian/miasenn.html')


def pokam(request):
    return render(request, 'pokam/pokam.html')


def pokam_item(request, pianho):
    return render(request, 'pokam/pokam_item.html')
