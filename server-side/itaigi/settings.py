"""
Django settings for itaigi project.

For more information on this file, see
https://docs.djangoproject.com/en/1.7/topics/settings/

For the full list of settings and their values, see
https://docs.djangoproject.com/en/1.7/ref/settings/
"""

# Build paths inside the project like this: os.path.join(BASE_DIR, ...)
import os

from celery.schedules import crontab

BASE_DIR = os.path.dirname(os.path.dirname(__file__))


# Quick-start development settings - unsuitable for production
# See https://docs.djangoproject.com/en/1.7/howto/deployment/checklist/

# SECURITY WARNING: keep the secret key used in production secret!
SECRET_KEY = 'ar307x56sv7!iodrfx3@))%lp0&^^tg0xhw-@ijr0c4ic_q&wo'

# SECURITY WARNING: don't run with debug turned on in production!
DEBUG = True

ALLOWED_HOSTS = ['*']


# Application definition

INSTALLED_APPS = (
    'django.contrib.admin',
    'django.contrib.auth',
    'django.contrib.contenttypes',
    'django.contrib.sessions',
    'django.contrib.messages',
    'django.contrib.staticfiles',
)

MIDDLEWARE_CLASSES = (
    'whitenoise.middleware.WhiteNoiseMiddleware',
    'django.contrib.sessions.middleware.SessionMiddleware',
    'django.middleware.common.CommonMiddleware',
    'django.middleware.csrf.CsrfViewMiddleware',
    'django.contrib.auth.middleware.AuthenticationMiddleware',
    'django.contrib.auth.middleware.SessionAuthenticationMiddleware',
    'django.contrib.messages.middleware.MessageMiddleware',
    'django.middleware.clickjacking.XFrameOptionsMiddleware',
)

ROOT_URLCONF = 'itaigi.urls'

WSGI_APPLICATION = 'itaigi.wsgi.application'


# Database
# https://docs.djangoproject.com/en/1.7/ref/settings/#databases

DATABASES = {
    'default': {
        'ENGINE': 'django.db.backends.sqlite3',
        'NAME': os.path.join(BASE_DIR, 'db.sqlite3'),
    }
}

# Internationalization
# https://docs.djangoproject.com/en/1.7/topics/i18n/

LANGUAGE_CODE = 'zh-Hant'

TIME_ZONE = 'Asia/Taipei'

USE_I18N = True

USE_L10N = True

USE_TZ = True

LOGGING = {
    'version': 1,
    'disable_existing_loggers': False,
    'formatters': {
        'verbose': {
            'format': "[%(asctime)s] %(levelname)s [%(name)s:%(lineno)s] %(message)s",
            'datefmt': "%d/%b/%Y %H:%M:%S"
        },
        'simple': {
            'format': '%(levelname)s %(message)s'
        },
    },
    'filters': {
        'require_debug_false': {
            '()': 'django.utils.log.RequireDebugFalse'
        }
    },
    'handlers': {
        'file': {
            'level': 'INFO',
            'class': 'logging.FileHandler',
            'filename': os.path.join(BASE_DIR, 'django.log'),
            'filters': ['require_debug_false'],
            'formatter': 'verbose'
        },
        'mail_admins': {
            'level': 'ERROR',
            'filters': ['require_debug_false'],
            'class': 'django.utils.log.AdminEmailHandler'
        }
    },
    'loggers': {
        'django': {
            'handlers': ['file'],
            'propagate': True,
            'level': 'ERROR',
        },
    }
}

# Static files (CSS, JavaScript, Images)
# https://docs.djangoproject.com/en/1.7/howto/static-files/

STATIC_URL = '/static/'

# 套件設定
INSTALLED_APPS += (
    '臺灣言語資料庫',
    '臺灣言語平臺',
)
MOTHER_TONGUE = '臺語'
FOREIGN_LANGUAGE = '華語'

# 使用者上傳檔案
MEDIA_ROOT = os.path.join(BASE_DIR, "資料庫影音檔案")
MEDIA_URL = '/影音檔案/'

# django-cors-headers
CORS_ORIGIN_ALLOW_ALL = True
CORS_ALLOW_CREDENTIALS = True
INSTALLED_APPS += (
    'corsheaders',
)
MIDDLEWARE_CLASSES += (
    'corsheaders.middleware.CorsMiddleware',
    'django.middleware.common.CommonMiddleware',
)

# django-allauth，佮使用者有關係
AUTH_USER_MODEL = '臺灣言語平臺.使用者表'
ACCOUNT_ADAPTER = '臺灣言語平臺.使用者模型.使用者一般接口'
SOCIALACCOUNT_ADAPTER = '臺灣言語平臺.使用者模型.使用者社群接口'
ACCOUNT_USER_MODEL_USERNAME_FIELD = None
ACCOUNT_EMAIL_REQUIRED = True
ACCOUNT_USERNAME_REQUIRED = False
ACCOUNT_AUTHENTICATION_METHOD = 'email'
ACCOUNT_UNIQUE_EMAIL = True
SITE_ID = 1
INSTALLED_APPS += (
    # The Django sites framework is required for allauth
    'django.contrib.sites',
    'allauth',
    'allauth.account',
    'allauth.socialaccount',
    'allauth.socialaccount.providers.facebook',
)
AUTHENTICATION_BACKENDS = (
    # Needed to login by username in Django admin, regardless of `allauth`
    "django.contrib.auth.backends.ModelBackend",
    # `allauth` specific authentication methods, such as login by e-mail
    "allauth.account.auth_backends.AuthenticationBackend",
)
ACCOUNT_EMAIL_VERIFICATION = 'none'
TEMPLATES = [
    {
        'BACKEND': 'django.template.backends.django.DjangoTemplates',
        'DIRS': [],
        'APP_DIRS': True,
        'OPTIONS': {
            'context_processors': [
                # Required by allauth template tags
                'django.contrib.auth.context_processors.auth',
                # `allauth` needs this from django
                'django.template.context_processors.request',
            ],
        },
    },
]
SOCIALACCOUNT_PROVIDERS = {
    'facebook': {
        'SCOPE': ['email', ],
        'METHOD': 'js_sdk',
        'LOCALE_FUNC': lambda request: 'zh_TW',
        'VERIFIED_EMAIL': False,
        'VERSION': 'v2.3',
    }
}


# For better celery performance
CELERY_IGNORE_RESULT = True
CELERY_DISABLE_RATE_LIMITS = True
# Only accept json for safety and upcoming celery version default setting
CELERY_ACCEPT_CONTENT = ['json']
CELERY_TASK_SERIALIZER = 'json'
CELERY_RESULT_SERIALIZER = 'json'

CELERY_TIMEZONE = TIME_ZONE
CELERYBEAT_SCHEDULE = {
    '半瞑自sheets掠轉資料庫': {
        'task': '臺灣言語平臺.tasks.半瞑自sheets掠轉資料庫',
        'schedule': crontab(hour=3, minute=30),
        'args': ()
    },
}


try:
    from .local_settings import SECRET_KEY, DEBUG, DATABASES, LOGGING
except ImportError:
    SECRET_KEY, DEBUG, DATABASES, LOGGING

STATIC_ROOT = os.path.join(BASE_DIR, 'whitenoise_static') 
STATICFILES_STORAGE = 'whitenoise.storage.CompressedManifestStaticFilesStorage'
