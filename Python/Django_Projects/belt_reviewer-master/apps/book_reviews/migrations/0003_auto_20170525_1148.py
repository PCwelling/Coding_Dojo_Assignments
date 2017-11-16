# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-25 18:48
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    dependencies = [
        ('book_reviews', '0002_bookreview_user'),
    ]

    operations = [
        migrations.AlterField(
            model_name='bookreview',
            name='book',
            field=models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='reviews', to='book_reviews.Book'),
        ),
    ]
