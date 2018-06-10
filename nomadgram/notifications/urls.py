from django.conf.urls import url
from . import views

app_name = "images" 
urlpatterns = [
    url(
        regex=r'^$', #regular expression
        view=views.Notifications.as_view(), #view
        name='notifications' #name
    ),
]

