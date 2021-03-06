from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^(?P<appointment_id>\d+)/edit$', views.edit),
    url(r'^(?P<appointment_id>\d+)/update$', views.update),
    url(r'^(?P<appointment_id>\d+)/delete$', views.delete),
    url(r'^logout$', views.logout)
]