from __future__ import unicode_literals
from django.db import models
from ..login.models import User
import datetime

# Create your models here.

class AppointmentManager(models.Manager):

    def new_appointment_validate(self, post_data, user_id):
        errors = []

        # check if appointment date is in future
        if post_data['date'] == "":
            errors.append("Date is required")
        else:
            date = datetime.datetime.strptime(post_data['date'],"%Y-%m-%d")
            if date < datetime.datetime.today():
                errors.append("Date must be in the future")

        if not errors:

            new_appointment = self.create(
                date = post_data['date'],
                time = post_data['time'],
                task = post_data['task'],
                status = 'Pending',
                user = user_id,
            )
            return new_appointment
        return errors

    def update_appointment_validate(self, post_data):
        errors = []

        # check if appointment date is in future
        if post_data['date'] == "":
            errors.append("Date is required")
        else:
            date = datetime.datetime.strptime(post_data['date'],"%Y-%m-%d")
            if date < datetime.datetime.today():
                errors.append("Date must be in the future")

        if not errors:

            appointment_update = Appointment.objects.get(id = appointment_id)
            appointment_update.task = post_data['task'],
            appointment_update.status = post_data['status'],
            appointment_update.date= post_data['date'],
            appointment_update.time= post_dat['time'],
            appointment_update.save()

        return redirect('/appoint')
            
class Appointment(models.Model):
    date = models.DateField()
    time = models.TimeField()
    task = models.CharField(max_length = 255)
    status = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name="appointments")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()