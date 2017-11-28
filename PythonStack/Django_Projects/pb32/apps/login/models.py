from __future__ import unicode_literals
import re
import bcrypt
import datetime
from django.db import models

# # Create your models here.
NAME_REGEX = re.compile(r'^[A-Za-z]\w+$')

class UserManager(models.Manager):
    def validate_login(self, post_data):
        errors = []
        # check DB for post_data['u_name']
        if len(self.filter(u_name=post_data['u_name'])) > 0:
            # check this user's password
            user = self.filter(u_name=post_data['u_name'])[0]
            if not bcrypt.checkpw(post_data['password'].encode(), user.password.encode()):
                errors.append('username/password incorrect')
        else:
            errors.append('username/password incorrect')

        if errors:
            return errors
        return user

    def validate_registration(self, post_data):
        errors = []
        # check length of name fields
        if len(post_data['first_name']) < 2:
            errors.append("name fields must be at least 3 characters")
        # check length of name password
        if len(post_data['password']) < 8:
            errors.append("password must be at least 8 characters")
        # check name fields for letter characters            
        if not re.match(NAME_REGEX, post_data['first_name']):
            errors.append('name fields must be letter characters only')
        # check uniqueness of username
        if len(User.objects.filter(u_name=post_data['u_name'])) > 0:
            errors.append("User Name already in use")
        # check password == password_confirm
        if post_data['password'] != post_data['password_confirm']:
            errors.append("passwords do not match")
        # check bod is not in future
        if post_data['doh'] == "":
            errors.append("Date of hire is required")
        else:
            dob = datetime.datetime.strptime(post_data['doh'],"%Y-%m-%d")
            if dob > datetime.datetime.today():
                errors.append("Date of hire must be in the past")

        if not errors:
            # make our new user
            # hash password
            hashed = bcrypt.hashpw((post_data['password'].encode()), bcrypt.gensalt(5))

            new_user = self.create(
                first_name = post_data['first_name'],
                u_name = post_data['u_name'],
                doh = post_data['doh'],
                password = hashed
            )
            return new_user
        return errors

class User(models.Model):
    first_name = models.CharField(max_length=255)
    u_name = models.CharField(max_length=255)
    password = models.CharField(max_length=255)
    doh = models.DateField()
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = UserManager()
    def __str__ (self):
        return self.u_name
