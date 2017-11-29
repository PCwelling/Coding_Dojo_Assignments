from __future__ import unicode_literals
from django.db import models
from ..login.models import User


# Create your models here.
class ProductManager(models.Manager):

    def validate_product(self, post_data, user_id):
        errors = []
        # check length of item fields
        if len(post_data['item']) < 2:
            errors.append("item field must be at least 3 characters")
        if not errors:

            new_product = self.create(
                item = post_data['item'],
                added_by = user_id,
            )
            return new_product
        return errors

class Product(models.Model):
    item = models.CharField(max_length=255)
    added_by = models.ForeignKey(User, related name="added_items")
    users = models.ManyToManyField(User, related_name="products")
    date_added = models.DateField(auto_now_add = True)
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = ProductManager()

