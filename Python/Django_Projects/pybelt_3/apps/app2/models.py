from __future__ import unicode_literals
from django.db import models
from ..login.models import *

# Create your models here.

class ProductManager(models.Manager):

    def validate_product(self, post_data, user_id):
        errors = []
        # check length of item field
        if len(post_data['item']) < 3:
            errors.append("item field must be at least 3 characters")

        if len(errors) < 1:
            print "no errors"
            new_product = self.create(
                item = post_data['item'],
                user = request.session['user_id'],
            )
            return new_product      
        return errors
               
class Product(models.Model):
    item = models.CharField(max_length = 255)
    user = models.ManyToManyField(User, related_name="products")
    date = models.DateField(auto_now_add = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = ProductManager()
