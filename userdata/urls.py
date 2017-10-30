from django.conf.urls import url
from . import views
urlpatterns = [
    url(r'^$', views.login),
    url(r'success/', views.success),
    url(r'cu/', views.show)
]
