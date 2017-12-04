from __future__ import unicode_literals
from django.db import models


# # Create your models here.

class AppointmentManager(models.Manager):

    def validate_(self, post_data):
        errors = []
        # check length of task field
        if len(post_data['task']) < 2:
            errors.append("task field must be at least 3 characters")
        if post_data['password'] != post_data['password_confirm']:
            errors.append("passwords do not match")

        if not errors:
            # make our new user


            new_user = self.create(
                first_name=post_data['first_name'],
                email=post_data['email'],
                dob=post_data['dob'],
                password=hashed
            )
            return new_user
        return errors

class Appointment(models.Model):
    task = models.CharField(max_length=255)
    date = models.DateField(auto_now = False)
    time = models.TimeField(auto_now = False)
    status = models.CharField(max_length=255)
    user = models.ForeignKey(User related_name = appointments)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = AppointmentManager()
