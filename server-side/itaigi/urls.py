from django.conf.urls import include, url
from django.contrib import admin
from django.conf import settings
from django.views.static import serve

urlpatterns = [
    url(r'^accounts/', include('allauth.urls')),
    url(r'^', include('臺灣言語平臺.網址')),
    url(r'^影音檔案/(?P<path>.*)$', serve, {
        'document_root': settings.MEDIA_ROOT,
    }),
    url(r'^he7thong2/', include(admin.site.urls)),
]
