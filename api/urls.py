from django.urls import path
from . import views

urlpatterns = [
  path('', views.test_view, name='test'),
  path('signin', views.sign_in_view, name='sign_in'),
  path('signup', views.sign_up_view, name='sign_up'),
  path('signout', views.sign_out_view, name='sign_out'),
  path('<int:user_id>', views.user_view, name='user'),
  path('<int:user_id>/badges', views.badges_view, name='badges'),
  path('<int:user_id>/friendship', views.friendship_view, name='friendship'),
]