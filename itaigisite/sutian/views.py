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
