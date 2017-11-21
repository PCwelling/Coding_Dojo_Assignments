from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^(?P<quotes_id>\d+)/add$', views.add),
    url(r'^(?P<user_id>\d+)/show$', views.show),
    url(r'^(?P<favorite_id>\d+)/remove$', views.remove),
    url(r'^logout$', views.logout)
]