from django.urls import path
from . import views

urlpatterns = [
  path('users', views.get_users, name='users'),
  path('signIn', views.sign_in_view, name='sign_in'),
  path('createAcct', views.create_account_view, name='create_account'),
]