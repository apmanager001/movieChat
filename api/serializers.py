from rest_framework.serializers import ModelSerializer
from .models import *

class UserSerializer(ModelSerializer):
  class Meta:
    model = User
    fields = ['id', 'username', 'email', 'first_name', 'last_name', 'badges', 'friends', 'created_at']

class BadgeSerializer(ModelSerializer):
  class Meta:
    model = Badge
    fields = '__all__'

class FriendshipSerializer(ModelSerializer):
  class Meta:
    model = Friendship
    fields = '__all__'