from django.urls import path
from . import views

urlpatterns = [
  path('', views.test_view, name='test'),
  path('signin', views.sign_in_view, name='sign_in'),
  path('signup', views.sign_up_view, name='sign_up'),
  path('signout', views.sign_out_view, name='sign_out'),
  path('<int:user_id>', views.user_view, name='user'),
  path('<int:user_id>/badge', views.badge_view, name='badges'),
  path('<int:user_id>/friendship', views.friendship_view, name='friendship'),
  path('movie', views.movie_list_create_view, name='movie_list_create'),
  path('movie/<int:movie_id>', views.movie_detail_view, name='movie_detail'),
  path('event', views.event_list_create_view, name='events_list_create'),
  path('event/<int:event_id>', views.event_detail_view, name='event_detail'),
]