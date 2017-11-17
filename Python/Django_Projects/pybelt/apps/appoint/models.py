from __future__ import unicode_literals

from django.db import models
from ..login.models import User

# Create your models here.

class AppointmentManager(models.Manager):
    def validate_date(self, post_data):
        errors = []
        if post_data['date'] > today:
            console.log(error)
            
        

class Appointment(models.Model):
    date = models.DateField(default = 0)
    time = models.TimeField(auto_now = True)
    task = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name="users")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()
    def __str__ (self):
        return self.date

class Status(models.Model):
    status = models.CharField(max_length = 50)
    appointment = models.ForeignKey(Appointment, related_name="appointments")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()
    def __str__ (self):
        return self.status