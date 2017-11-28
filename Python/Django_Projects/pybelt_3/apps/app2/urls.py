from django.conf.urls import url
from . import views

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new$', views.new),
    url(r'^create$', views.create),
    # url(r'^(?P<product_id>\d+)/add$', views.add),
    # url(r'^(?P<favorite_id>\d+)/fshow$', views.fshow),
    #  url(r'^(?P<wish_id>\d+)/wshow$', views.wshow),   
    # url(r'^(?P<mylist_id>\d+)/remove$', views.remove),
    url(r'^logout$', views.logout)
]