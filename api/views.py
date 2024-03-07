from django.shortcuts import get_object_or_404
from django.contrib.auth import authenticate, login, logout
from django.contrib.auth import get_user_model
from django.contrib.auth.hashers import make_password, check_password
from rest_framework import status
from rest_framework.response import Response
from rest_framework.permissions import IsAuthenticated, IsAdminUser
from rest_framework.authentication import SessionAuthentication
from rest_framework.decorators import api_view, authentication_classes, permission_classes
from .serializers import UserSerializer, BadgeSerializer, FriendshipSerializer, MovieSerializer, EventSerializer
from .models import Badge, Friendship, Movie, Event


@api_view(['GET'])
def test_view(request):
    User = get_user_model()
    users = User.objects.all()
    serializer = UserSerializer(users, many=True)
    return Response(serializer.data, status=status.HTTP_200_OK)


@api_view(['POST'])
def sign_in_view(request):
    # Get data from request object
    username = request.data.get('username')
    password = request.data.get('password')
    
    # Attempt to authenticate user
    user = authenticate(request, username=username, password=password)
    
    # If authenticated, log user in
    if user is not None:
        login(request, user)
        return Response({'message': 'Successfully logged in.'}, status=status.HTTP_200_OK)
    
    # If not authenticated, return invalid response
    else:
        return Response({'message': 'Sign in unsuccessful.'}, status=status.HTTP_400_BAD_REQUEST)



@api_view(['POST'])
def sign_up_view(request):
    # Get data from request object
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    first_name = request.data.get('firstName', None)
    last_name = request.data.get('lastName', None)

    # Create a new user in database
    User = get_user_model()
    try:
        new_user = User.objects.create_user(username=username, email=email, password=password, first_name=first_name, last_name=last_name)
    except Exception as e:
        # Returns invalid if account is not successfully created
        return Response({'message': 'Sign up unsuccessful. ' + str(e)}, status=status.HTTP_400_BAD_REQUEST)
    
    # Returns valid if account successfully creates
    serializer = UserSerializer(new_user)
    return Response(serializer.data, status=status.HTTP_201_CREATED) 



@api_view(['POST'])
@permission_classes([IsAuthenticated])
def sign_out_view(request):
    logout(request)
    return Response({'message': 'Successfully logged out.'}, status=status.HTTP_200_OK)


@api_view(['GET', 'PUT', 'DELETE'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def user_view(request, user_id):

    User = get_user_model()
    user = get_object_or_404(User, pk=user_id)
    
    # Retrieve user information
    if request.method == 'GET':
        serializer = UserSerializer(user)
        return Response(serializer.data, status=status.HTTP_200_OK)
    
    # Update user information
    elif request.method == 'PUT':
        serializer = UserSerializer(user, data=request.data, partial=True)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_200_OK)
        else:
            return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)
    
    # Delete user
    elif request.method == 'DELETE':
        user.delete()
        return Response({'message': 'User {} successfully deleted'.format(user_id)}, status=status.HTTP_204_NO_CONTENT)

    return Response({'error': 'Method not allowed'}, status=status.HTTP_405_METHOD_NOT_ALLOWED)



@api_view(['GET', 'POST', 'DELETE'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def badge_view(request, user_id):

    User = get_user_model()
    user = get_object_or_404(User, pk=user_id)

    # Retrieve all badges information for user
    if request.method == 'GET':
        badges = user.badges.all()
        serializer = BadgeSerializer(badges, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    # Add new badge to user account
    if request.method == 'POST':
        # Get badge from JSON data
        badge_title = request.data.get('badge_title')
        try:
            badge = Badge.objects.get(title=badge_title)
        except Badge.DoesNotExist:
            return Response({"error": "Unknown badge title"}, status=status.HTTP_404_NOT_FOUND)
        user.badges.add(badge)
        return Response({"message": "Successfully added badge to user"}, status=status.HTTP_201_CREATED)

    elif request.method == 'DELETE':
        # Get badge from query parameters
        badge_title = request.query_params.get('badge_title')
        try:
            badge = Badge.objects.get(title=badge_title)
        except Badge.DoesNotExist:
            return Response({"error": "Unknown badge title"}, status=status.HTTP_404_NOT_FOUND)
        user.badges.remove(badge)
        return Response({"message": "Successfully removed badge from user"}, status=status.HTTP_204_NO_CONTENT)



@api_view(['GET', 'POST', 'DELETE'])
@authentication_classes([SessionAuthentication])
@permission_classes([IsAuthenticated])
def friendship_view(request, user_id):

    User = get_user_model()
    try:
        user = User.objects.get(pk=user_id)
    except User.DoesNotExist:
        return Response({'error': 'User not found using user_id parameter'}, status=status.HTTP_404_NOT_FOUND)

    if request.method == "GET":
        friends = user.get_friends()
        serializer = UserSerializer(friends, many=True)
        return Response(serializer.data, status=status.HTTP_200_OK)

    if request.method == "POST":
        user_b_id = request.data.get('user_b_id')
        if user_b_id == None:
            return Response({'error': 'Missing user_b parameter'}, status=status.HTTP_400_BAD_REQUEST)
        
        try:
            user_b = User.objects.get(pk=user_b_id)
            new_friendship = Friendship(user_a=user, user_b=user_b)
            new_friendship.save()
            return Response({'message': 'Friendship created'}, status=status.HTTP_201_CREATED)
        except User.DoesNotExist:
            return Response({'error': 'User specified in user_b parameter not found'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': 'Friendship creation unsuccessful:  ' + str(e)}, status=status.HTTP_400_BAD_REQUEST)

    if request.method == "DELETE":
        user_b_id = request.query_params.get('user_b_id')
        if user_b_id == None:
            return Response({'error': 'Missing user_b parameter'}, status=status.HTTP_400_BAD_REQUEST)

        try:
            user_b = User.objects.get(pk=user_b_id)
            friendship = Friendship.objects.get(user_a=user, user_b=user_b)
            friendship.delete()
        except User.DoesNotExist:
            return Response({'error': 'User specified in user_b parameter not found'}, status=status.HTTP_404_NOT_FOUND)
        except Friendship.DoesNotExist:
            return Response({'error': 'Friendship does not exist'}, status=status.HTTP_404_NOT_FOUND)
        except Exception as e:
            return Response({'error': 'Friendship deletion unsuccessful:  ' + str(e)}, status=status.HTTP_400_BAD_REQUEST)
        return Response({'message': 'Successfully deleted friendship'}, status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def movie_list_create_view(request):
    if request.method == 'GET':
        movies = Movie.objects.all()
        serializer = MovieSerializer(movies, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = MovieSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def movie_detail_view(request, movie_id):
    try:
        movie = Movie.objects.get(pk=movie_id)
    except Movie.DoesNotExist:
        return Response(status=status.HTTP_404_NOT_FOUND)

    if request.method == 'GET':
        serializer = MovieSerializer(movie)
        return Response(serializer.data)

    elif request.method == 'PUT':
        serializer = MovieSerializer(movie, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        movie.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)


@api_view(['GET', 'POST'])
@permission_classes([IsAuthenticated])
def event_list_create_view(request):
    """
    List all events or create a new event.
    """
    if request.method == 'GET':
        events = Event.objects.all()
        serializer = EventSerializer(events, many=True)
        return Response(serializer.data)

    elif request.method == 'POST':
        serializer = EventSerializer(data=request.data)
        if serializer.is_valid():
            serializer.save(user=request.user)  # Automatically set the user to the current user
            return Response(serializer.data, status=status.HTTP_201_CREATED)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)


@api_view(['GET', 'PUT', 'DELETE'])
@permission_classes([IsAuthenticated])
def event_detail_view(request, event_id):
    """
    Retrieve, update, or delete an event.
    """
    event = get_object_or_404(Event, pk=event_id)

    if request.method == 'GET':
        serializer = EventSerializer(event)
        return Response(serializer.data)

    elif request.method == 'PUT':
        if request.user != event.user and not request.user.is_staff:
            return Response({'detail': 'Not authorized to update this event'}, status=status.HTTP_403_FORBIDDEN)

        serializer = EventSerializer(event, data=request.data)
        if serializer.is_valid():
            serializer.save()
            return Response(serializer.data)
        return Response(serializer.errors, status=status.HTTP_400_BAD_REQUEST)

    elif request.method == 'DELETE':
        if request.user != event.user and not request.user.is_staff:
            return Response({'detail': 'Not authorized to delete this event'}, status=status.HTTP_403_FORBIDDEN)

        event.delete()
        return Response(status=status.HTTP_204_NO_CONTENT)