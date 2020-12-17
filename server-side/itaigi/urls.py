from urllib.parse import quote

from django.conf import settings
from django.conf.urls import include, url
from django.shortcuts import render
from django.urls.conf import path
from django.views.static import serve
import debug_toolbar


def seo(request, su, huasu=None, im=None):
    return pangboo(
        request, status=200,
        title='{} - iTaigi 愛台語'.format(su),
        image='https://www.moedict.tw/{}.png?font=wt064'.format(
            quote(su)
        ),
    )




def kithann(request, exception=None):
    return pangboo(
        request, status=404,
        title='iTaigi 愛台語',
        image='https://g0v.github.io/itaigi/design/logo_og.png',
    )


urlpatterns = [
    url(r'^accounts/', include('allauth.urls')),
    url(r'^', include('臺灣言語平臺.網址')),
    url(r'^影音檔案/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT,
    }),
    path('k/<su>/', seo),
    path('t/<su>/', seo),
    #
    #     url: `https://itaigi.tw/${Iah}/${Su}`,
    #     title: `${Su} - iTaigi 愛台語`,
    #     image: `https://www.moedict.tw/${encodeURI(Su)}.png?font=wt064`,

    path('t/<huasu>/<su>/<im>', seo),
    path('k/<huasu>/<su>/<im>', seo),
    #     url: `https://itaigi.tw/${Iah}/${HuaSu}/${TaiSu}/${Im}`,
    #     title: `${TaiSu} - iTaigi 愛台語`,
    #     image: `https://www.moedict.tw/${encodeURI(TaiSu)}.png?font=wt064`,
    path('__liahlau__/', include(debug_toolbar.urls)),
    path('', kithann),
]


def pangboo(request, status, title, image):
    return render(request, 'index.html', status=status, context={
        'url': request.build_absolute_uri(),
        'title': title,
        'image': image,
    })

handler404 = kithann
