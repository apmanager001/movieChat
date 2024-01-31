from django.shortcuts import render
from django.contrib.auth import authenticate, login
from django.contrib.auth.models import User
from django.contrib.auth.hashers import make_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import UserSerializer



@api_view(['POST'])
def sign_in_view(request):
    # Get data from request object
    email = request.data.get('email')
    password = request.data.get('password')
    
    # Attempt to authenticate user
    user = authenticate(request, username=email, password=password)

    # If authenticated, log user in
    if user is not None:
        login(request, user)
        return Response(status=status.HTTP_200_OK)
    
    # If not authenticated, return invalid response
    else:
        return Response(status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def create_account_view(request):
    # Get data from request object
    name = request.data.get('name')
    email = request.data.get('email')
    password = request.data.get('password')

    # Hash password for database insertion
    hashed_password = make_password(password, salt=None, hasher='Argon2')

    # Create a new user in database
    new_user = User.objects.create_user(username=email, email=email, password=hashed_password, first_name=name)

    # Returns valid if account is successfully created
    if new_user != None:
        return Response(new_user, status=status.HTTP_201_OK)

    # Returns invalid if account is not successfully created
    return Response(status=status.HTTP_400_BAD_REQUEST)


@api_view(['POST'])
def update_account_view(request):
    # Get data from request object
    # If updating password, hash raw password for database insertion
    if password != None:
        hashed_password = make_password(password, salt=None, hasher='Argon2')
    # Update database
    # Returns valid if updated successfully
    # Returns invalid if updated unsuccessfully
    pass