from __future__ import unicode_literals
from django.db import models
from ..login.models import *

# Create your models here.

class QuoteManager(models.Manager):

    def validate_quote(self, post_data, user_id):
        errors = []
        # check length of quote_by field
        if len(post_data['quote_by']) < 3:
            errors.append("Quoted By field must be at least 3 characters")
        # check length of quote field
        if len(post_data['quote']) < 10:
            errors.append("quote must be at least 10 characters")
        if len(errors) < 1:
            print "no errors"
            new_quote = self.create(
                quote_by = post_data['quote_by'],
                quote = post_data['quote'],
                user_id = user_id,
            )
            return new_quote       
        return errors
               
class Quote(models.Model):
    quote = models.CharField(max_length = 255)
    quote_by = models.CharField(max_length = 255)
    user = models.ForeignKey(User, related_name="quote")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = QuoteManager()

class Favorite(models.Model):
    user = models.ForeignKey(User, related_name="favorites")
    quote = models.ForeignKey(Quote, related_name="favorites")
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = QuoteManager()