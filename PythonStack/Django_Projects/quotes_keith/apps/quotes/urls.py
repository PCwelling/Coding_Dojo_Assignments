from django.conf.urls import url
from . import views




urlpatterns = [
    url(r'^$', views.dashboard), # this url routes top the dashboard method in views
    url(r'^process$', views.process),
    url(r'^users/(?P<id>\d+)', views.users),
    url(r'^favQuote/(?P<q_id>\d+)', views.favorite),
    url(r'^remove/(?P<q_id>\d+)', views.remove),
]