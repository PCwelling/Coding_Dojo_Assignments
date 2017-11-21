from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^create$', views.create),
    url(r'^add$', views.add),
    url(r'^(?P<user_id>\d+)/list$', views.list),
    url(r'^(?P<favorite_id>\d+)/remove$', views.remove),
    url(r'^logout$', views.logout)
]