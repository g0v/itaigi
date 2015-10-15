from django.conf.urls import patterns, include, url
from django.contrib import admin
from django.conf import settings

urlpatterns = patterns(
    '',
    url(r'^accounts/', include('allauth.urls')),
    url(r'^', include('臺灣言語平臺.網址')),
    url(r'^影音檔案/(?P<path>.*)$', 'django.views.static.serve', {
        'document_root': settings.MEDIA_ROOT,
    }),
    url(r'^admin/', include(admin.site.urls)),
)
