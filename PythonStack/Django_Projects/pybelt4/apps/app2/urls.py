# APP2 URLS
from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^(?P<product_id>\d+)/read$', views.read),
    url(r'^(?P<product_id>\d+)/update$', views.update),
    url(r'^(?P<product_id>\d+)/delete$', views.delete),
    url(r'^logout$', views.logout)
]