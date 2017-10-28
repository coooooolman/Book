from django.conf.urls import url
from . import views


urlpatterns = [
    url(r'^1/$', views.demo_1),
    url(r'^2/$', views.demo_2),
]
