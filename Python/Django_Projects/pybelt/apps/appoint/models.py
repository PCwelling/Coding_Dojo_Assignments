from __future__ import unicode_literals
from django.db import models
from ..login.models import *
from datetime import datetime

# Create your models here.

class AppointmentManager(models.Manager):

    today = datetime.date

    def appointment_validate(self, post_data):
        errors = []
        if post_data['date'] > today:
            console.log(error)
            
class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    task = models.CharField(max_length = 255)
    status = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name="appointments")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()