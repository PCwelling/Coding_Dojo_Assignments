from django.conf.urls import url
from . import views           # This line is new!

urlpatterns = [
    url(r'^$', views.index),
    url(r'^new_item$', views.new_item),
    url(r'^create$', views.create),
    # url(r'^(?P<item_id>\d+)/read', views.read),
    url(r'^(?P<product_id>\d+)/update$', views.update),
    # url(r'^(?P<item_id>\d+)/delete', views.delete),
    url(r'^logout$', views.logout)
]