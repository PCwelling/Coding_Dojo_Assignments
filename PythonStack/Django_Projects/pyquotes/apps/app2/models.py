from __future__ import unicode_literals
from django.db import models
from ..login.models import User

# # Create your models here.

class QuoteManager(models.Manager):

    def validate_quote(self, post_data, user_id):
        errors = []
        # check length of quote field
        if len(post_data['quote']) < 10:
            errors.append("Quote field must be at least 10 characters")
        # check length of author field
        if len(post_data['author']) < 3:
            errors.append("Quoted By field must be at least 3 characters")

        if not errors:
            # make our new quote

            new_quote = self.create(
                quote = post_data['quote'],
                author = post_data['author'],
                user_id = user_id,
            )
            return new_quote
        return errors

    def update_quote(self, quote_id, user_id):
        favorites_update = Quote.objects.get(id=quote_id)
        favorites_update.favorites.add(User.objects.get(id=user_id))       
        favorites_update.save()

    def delete_favorite(self, quote_id, user_id):
        favorites_delete = Quote.objects.get(id=quote_id)
        favorites_delete.favorites.remove(User.objects.get(id=user_id))       
        favorites_delete.save()


class Quote(models.Model):
    quote = models.CharField(max_length=255)
    author = models.CharField(max_length=255)
    user = models.ForeignKey(User, related_name = 'posted_by')
    favorites = models.ManyToManyField(User, related_name ='favorite_quotes')
    created_at = models.DateTimeField(auto_now_add = True)
    updated_at = models.DateTimeField(auto_now = True)
    objects = QuoteManager()