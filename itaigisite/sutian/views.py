from django.shortcuts import render

# Create your views here.


def tiann(request):
    return render(request, 'sutian/tiann.html')


def tshiau(request, ji):
    sutin = [{
        'id': 1134,
        'lo': 'jio̍k-huâ',
        'han': '辱華',
        'tshuttshu': '家人說的' * 10,
        'khautso': 'Tshuà Bûn-lī',
        'tsan': 12,
        'siutsong': 5,
    }] * 3
    return render(request, 'tshiau/tshiau.html', {
        'sutin': sutin,
    })


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


def pokam_list(request, pianho):
    mngtin = [
        '寶可夢',
        '妙蛙種子',
        '妙蛙草',
        '妙蛙花',
        '小火龍',
        '火恐龍',
        '噴火龍',
        '傑尼龜',
        '卡咪龜',
        '水箭龜',
    ]
    lui = '抱去摸'
    return render(request, 'pokam/pokam_sohin.html', {
        'lui': lui,
        'mngtin': mngtin,
    })


def pokam_item(request, pianho, mngho):
    mngtin = [
        '寶可夢',
        '妙蛙種子',
        '妙蛙草',
        '妙蛙花',
        '小火龍',
        '火恐龍',
        '噴火龍',
        '傑尼龜',
        '卡咪龜',
        '水箭龜',
    ] * 10
    lui = '抱去摸'
    piaute = '傑尼龜'
    sutin = [{
        'id': 1134,
        'lo': 'lak-tē-á-kuài-siù',
        'han': '橐袋仔怪獸',
        'tshuttshu': '家人說的',
        'khautso': '沒有人',
        'tsan': 12,
        'siutsong': 5,
    }, {
        'id': 1134,
        'lo': 'Sîn-kî-pó-puè',
        'han': '神奇寶貝',
        'tshuttshu': '家人說的',
        'khautso': '沒有人',
        'tsan': 12,
        'siutsong': 5,
    }, {
        'id': 1134,
        'lo': 'Pó-khó-bōng',
        'han': '寶可夢',
        'tshuttshu': '家人說的',
        'khautso': '沒有人',
        'tsan': 12,
        'siutsong': 5,
    }, {
        'id': 1134,
        'lo': 'Pho-khe-bóng',
        'han': '波科魍',
        'tshuttshu': '家人說的',
        'khautso': '沒有人',
        'tsan': 12,
        'siutsong': 5,
    }]
    return render(request, 'pokam/pokam_item.html', {
        'lui': lui,
        'piaute': piaute,
        'sutin': sutin,
        'mngtin': mngtin,
    })
