from django.db import models
from django.contrib.auth.models import AbstractBaseUser, PermissionsMixin, BaseUserManager
from django.utils.formats import date_format

# MODELS:

# UserManager .create_user .create_superuser
# User
# Movie
# Badge
# Friendship
# UserMovieWatched
# Review
# Staff
# Role
# Event
# RSVP


class UserManager(BaseUserManager):
  """
  Manager class used by calling User.objects.create_user or .create_superuser
  """

  def create_user(self, username, email, password, **extra_fields):
    """
    Creates and saves a regular User with the given email and raw password 
    (will hash password during execution)
    """
    if not username or not email or not password:
      raise ValueError('Cannot create new User; missing username, email, and/or password.')
    email = self.normalize_email(email)
    user = self.model(username=username, email=email, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user

  def create_superuser(self, username, email, password, **extra_fields):
    """
    Creates and saves a SuperUser with the given username, email, and password.
    """
    extra_fields.setdefault('is_staff', True)
    extra_fields.setdefault('is_superuser', True)

    if extra_fields.get('is_staff') is not True:
        raise ValueError('Superuser must have is_staff=True.')
    if extra_fields.get('is_superuser') is not True:
        raise ValueError('Superuser must have is_superuser=True.')
    if not username or not email:
        raise ValueError('The given username and email must be set')

    email = self.normalize_email(email)
    user = self.model(username=username, email=email, **extra_fields)
    user.set_password(password)
    user.save(using=self._db)
    return user



class Badge(models.Model):
  title = models.CharField(max_length=255, unique=True)
  requirement = models.TextField()
  pic_src = models.URLField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return self.title



class User(AbstractBaseUser):
  first_name = models.CharField(max_length=255, null=True)
  last_name = models.CharField(max_length=255, null=True)
  username = models.CharField(max_length=25, unique=True)
  email = models.EmailField(unique=True)
  friends = models.ManyToManyField('self', through='Friendship', symmetrical=True)
  badges = models.ManyToManyField(Badge, through='UserBadge', related_name='users')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  objects = UserManager()

  USERNAME_FIELD = 'email'
  REQUIRED_FIELDS = ['username']
  
  def __str__(self):
      return self.username

  def get_friends(self):
      # Friends where the user is the initiator or receiver
      friendships = Friendship.objects.filter(models.Q(user_a=self) | models.Q(user_b=self))

      # Extracting user IDs from friendships, excluding the current user's ID
      friend_ids = set()
      for friendship in friendships:
          friend_ids.add(friendship.user_a_id if friendship.user_a_id != self.id else friendship.user_b_id)

      # Retrieve User instances for the collected friend IDs
      friends = User.objects.filter(id__in=friend_ids)

      return friends



class Movie(models.Model):
    title = models.CharField(max_length=255)
    src = models.URLField()
    runtime = models.DurationField()
    created_at = models.DateTimeField(auto_now_add=True)
    updated_at = models.DateTimeField(auto_now=True)

    def __str__(self):
        return self.title



class UserBadge(models.Model):
    user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='user_badges')
    badge = models.ForeignKey(Badge, on_delete=models.CASCADE, related_name='badge_users')
    awarded_at = models.DateTimeField(auto_now_add=True)  

    class Meta:
        unique_together = ('user', 'badge')
        verbose_name = 'User Badge'
        verbose_name_plural = 'User Badges'

    def __str__(self):
        return f"{self.user.username} awarded {self.badge.title} on {self.awarded_at}"



class Friendship(models.Model):
  user_a = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friendships_as_a')
  user_b = models.ForeignKey(User, on_delete=models.CASCADE, related_name='friendships_as_b')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  class Meta:
    unique_together = ('user_a', 'user_b')

  def __str__(self):
    return f"Friendship of {self.user_a} and {self.user_b}"

  def save(self, *args, **kwargs):
    # Ensure user_a always has the lower ID to eliminate directionality
    if self.user_a_id > self.user_b_id:
        self.user_a, self.user_b = self.user_b, self.user_a
    super(Friendship, self).save(*args, **kwargs)



class UserMovieWatched(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE)
  movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f"Record of {self.user} watching {self.movie}"



class Review(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='reviews')
  movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
  rating = models.IntegerField()
  comments = models.TextField()
  created_at = models.DateTimeField(auto_now_add=True)
  udpated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f"Record of {self.user} reviewing {self.movie}"



class Staff(models.Model):
    name = models.CharField(max_length=255)
    dob = models.DateField(verbose_name='Date of Birth', null=True, blank=True)
    bio = models.TextField(null=True, blank=True)

    def __str__(self):
        return self.name



class Role(models.Model):
    ROLE_CHOICES = [
      ('actor', 'Actor'),
      ('director', 'Director'),
      ('writer', 'Writer'),
      ('producer', 'Producer'),
      ('executive_producer', 'Executive Producer'),
      ('cinematographer', 'Cinematographer'),
      ('editor', 'Editor'),
      ('composer', 'Composer'),
      ('sound_designer', 'Sound Designer'),
      ('art_director', 'Art Director'),
      ('costume_designer', 'Costume Designer'),
      ('makeup_artist', 'Makeup Artist'),
      ('visual_effects_supervisor', 'Visual Effects Supervisor'),
      ('stunt_coordinator', 'Stunt Coordinator'),
      ('casting_director', 'Casting Director'),
      ('production_designer', 'Production Designer'),
      ('set_decorator', 'Set Decorator'),
      ('location_manager', 'Location Manager'),
      ('music_supervisor', 'Music Supervisor'),
      ('choreographer', 'Choreographer'),
    ]
    movie = models.ForeignKey(Movie, on_delete=models.CASCADE, related_name='roles')
    staff = models.ForeignKey(Staff, on_delete=models.CASCADE, related_name='roles')
    role = models.CharField(max_length=50, choices=ROLE_CHOICES)
    character_name = models.CharField(max_length=255, null=True, blank=True)

    def __str__(self):
        role_display = dict(self.ROLE_CHOICES).get(self.role, 'Unknown Role')
        return f"{self.staff.name} as {role_display} in {self.movie.title}"
  


class Event(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='events')
  admin = models.ForeignKey(User, on_delete=models.SET_NULL, null=True)
  movie = models.ForeignKey(Movie, on_delete=models.CASCADE)
  occurring_when = models.DateTimeField()
  RSVP_limit = models.IntegerField()
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    formatted_date = date_format(self.occuring_when, "DATETIME_FORMAT")
    return f"Event for watching {self.movie} at {formatted_date}"



class RSVP(models.Model):
  user = models.ForeignKey(User, on_delete=models.CASCADE, related_name='RSVPs')
  event = models.ForeignKey(Event, on_delete=models.CASCADE, related_name='events')
  created_at = models.DateTimeField(auto_now_add=True)
  updated_at = models.DateTimeField(auto_now=True)

  def __str__(self):
    return f"Record of {self.user} RSVPing for {self.event.movie} event"
