from __future__ import unicode_literals
import re
import bcrypt
from django.db import models

# # Create your models here.
EMAIL_REGEX = re.compile(r'^[a-zA-Z0-9\.\+_-]+@[a-zA-Z0-9\._-]+\.[a-zA-Z]*$')
NAME_REGEX = re.compile(r'^[A-Za-z]\w+$')

class UserManager(models.Manager):
    def basic_validator(self, post_data):
        errors = {}
        for field, value in post_data.iteritems():
            if len(value) < 1:
                errors[field] = "{} field is required".format(field.replace('_',''))
            if field == 'f_name' or field == 'l_name':
                if not field in errors and len(value) < 3:
                    errors[field] = "{} field must de at least 3 charecters".format(field.replace('_',''))
            if not 'email' in errors and not re.match(EMAIL_REGEX, post_data['email']):
                errors['email'] = "invalid email"
            else:
                if len(self.filter(email=post_data['email'])) >1:
                    errors['email'] = "email already in use"

        return errors

class User(models.Model):
    f_name = models.CharField(max_length=255)
    l_name = models.CharField(max_length=255)
    email = models.EmailField(max_length=255)
    pw = models.CharField(max_length=255)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __str__ (self):
        return self.email
