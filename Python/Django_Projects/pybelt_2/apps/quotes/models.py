from __future__ import unicode_literals
from django.db import models
from ..login.models import *

# Create your models here.

class QuoteManager(models.Manager):

    def quote_validate(self, post_data):
        errors = []
        return self

            
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