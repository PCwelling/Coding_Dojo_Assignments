from __future__ import unicode_literals
from django.db import models
from ..login.models import *

# Create your models here.

class WishManager(models.Manager):

    def validate_wish(self, post_data, user_id):
        errors = []
        # check length of quote_by field
        if len(post_data['item']) < 3:
            errors.append("item field must be at least 3 characters")

        if len(errors) < 1:
            print "no errors"
            new_wish = self.create(
                item = post_data['item'],
                user_id = user_id,
            )
            return new_wish      
        return errors
               
class Wish(models.Model):
    item = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name="wishes")
    date = models.DateField(auto_now_add = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = WishManager()

class Favorite(models.Model):
    user = models.ForeignKey(User, related_name="favorites")
    wish = models.ForeignKey(Wish, related_name="favorites")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = WishManager()
