from django.conf.urls import url
from . import views

app_name = "images" 
urlpatterns = [
    url(
        regex=r'^$', #regular expression
        view=views.Feed.as_view(), #view
        name='feed' #name
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/likes/',
        view=views.LikeImage.as_view(),
        name='like_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/unlikes/',
        view=views.UnLikeImage.as_view(),
        name='like_image'
    ),
    url(
        regex=r'^(?P<image_id>[0-9]+)/comments/',
        view=views.CommentOnImage.as_view(),
        name='comment_image'
    ),
    url(
        regex=r'comments/(?P<comment_id>[0-9]+)/$',
        view=views.Comment.as_view(),
        name='comment'
    )
]

#/images/3/like

#0 create the url and the view
#1 take the id from the url
#2 we want to find an image with this id
#3 we want to create a like for taht image