### Users URLS.PY FILE
from django.conf.urls import url
from . import views           # This line is new!

urlpatterns = [
  url(r'^$', views.index, name='my_index'),
  url(r'^users$', views.index, name='my_users'),
  url(r'^users/new$', views.new, name='my_new'),     
  url(r'^users/create$', views.create, name='my_create'),
  url(r'^users/(?P<user_id>\d+)$', views.show, name='my_show'),
  url(r'^users/(?P<user_id>\d+)/edit$', views.edit, name='my_edit'),
  url(r'^users/(?P<user_id>\d+)/update$', views.update, name='my_update'),
  url(r'^users/(?P<user_id>\d+)/delete$', views.delete, name='my_delete'),
]