from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^logout$', views.logout),
    url(r'^create$', views.create),
    url(r'^(?P<user_id>\d+)/read$', views.read),
    url(r'^(?P<quote_id>\d+)/update$', views.update),
    url(r'^(?P<quote_id>\d+)/delete$', views.delete),
]