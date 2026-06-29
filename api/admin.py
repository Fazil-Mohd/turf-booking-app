from django.contrib import admin

from .models import Turf
from .models import Booked

# Register your models here.
admin.site.register(Turf)
admin.site.register(Booked)
