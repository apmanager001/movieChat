from django.contrib import admin
from .models import *

admin.site.register(User)
admin.site.register(Movie)
admin.site.register(Badge)
admin.site.register(Friendship)
admin.site.register(UserMovieWatched)
admin.site.register(Review)
admin.site.register(Staff)
admin.site.register(Role)
admin.site.register(Event)
admin.site.register(RSVP)