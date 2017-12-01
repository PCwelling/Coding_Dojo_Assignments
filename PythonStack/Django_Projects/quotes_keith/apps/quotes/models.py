# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..loginReg_App.models import User

from django.db import models

# Create your models here.
class QuotesManager(models.Manager):
    def addQuote(self, postData, userid):
        self.create(quotes = postData['desc'], author = postData['name'], user=User.objects.get(id = userid))
    
    def favoriteQuote(self, u_id, q_id):
        print u_id
        print q_id
        user_object = User.objects.get(id=u_id)
        quote_object = Quotes.objects.get(id=q_id)
        
        quote_object.favorited_by.add(user_object)
    
    def removeFavorite(self, u_id, q_id):
        user_object = User.objects.get(id=u_id)
        quote_object = Quotes.objects.get(id=q_id)
        
        quote_object.favorited_by.remove(user_object)



class Quotes(models.Model):
    quotes = models.TextField(max_length = 255)
    author = models.CharField(max_length = 200)
    user = models.ForeignKey(User, related_name="quotes")
    favorited_by = models.ManyToManyField(User, related_name="favorited")
    objects = QuotesManager()

