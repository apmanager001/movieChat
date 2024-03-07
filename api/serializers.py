from rest_framework.serializers import ModelSerializer
from datetime import timedelta
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

class MovieSerializer(ModelSerializer):
    class Meta:
        model = Movie
        fields = '__all__'

    def to_internal_value(self, data):
        # Copy the incoming data to avoid immutability issues
        mutable_data = data.copy()
        
        # Convert runtime to a timedelta object if needed
        if 'runtime' in mutable_data:
            runtime_seconds = int(mutable_data['runtime'])
            mutable_data['runtime'] = timedelta(seconds=runtime_seconds)

        return super().to_internal_value(mutable_data)

class EventSerializer(ModelSerializer):
    class Meta:
        model = Event
        fields = '__all__'
        read_only_fields = ('user', 'created_at', 'updated_at')

    def to_internal_value(self, data):
      # Copies data to avoid immutability issues
      mutable_data = data.copy()

      # Converts occurring_when to datetime object
      occurring_when_str = mutable_data.get('occurring_when', None)
      if occurring_when_str:
          try:
              # Parses the date string into a datetime object
              occurring_when_datetime = parser.parse(occurring_when_str)
              # Updates the mutable data with the datetime object
              mutable_data['occurring_when'] = occurring_when_datetime
          except ValueError:
              # Handle the case where the date string format is incorrect
              raise serializers.ValidationError({
                  'occurring_when': 'Invalid date format.'
              })

      return super().to_internal_value(mutable_data)