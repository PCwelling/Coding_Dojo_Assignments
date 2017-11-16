### BLOGS URLS.PY FILE
from django.conf.urls import url
from . import views           # This line is new!
urlpatterns = [
  url(r'^$', views.index),     # This line has changed!
  url(r'^new$', views.new),
  url(r'^create$', views.create),
  url(r'^(?P<blog_id>\d+)$', views.show),
  url(r'^(?P<blog_id>\d+)/edit$', views.edit),
  url(r'^(?P<blog_id>\d+)/delete$', views.delete),
]