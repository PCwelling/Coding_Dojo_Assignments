from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    url(r'^(?P<item_id>\d+)/add$', views.add),
    url(r'^(?P<item_id>\d+)/show$', views.show),
    url(r'^(?P<item_id>\d+)/remove$', views.remove),
    url(r'^logout$', views.logout)
]