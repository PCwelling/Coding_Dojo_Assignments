from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^(?P<quotes_id>\d+)/add$', views.add),
    url(r'^(?P<user_id>\d+)/show$', views.show),
    url(r'^(?P<favorites_id>\d+)/delete$', views.delete),
    url(r'^logout$', views.logout)
]