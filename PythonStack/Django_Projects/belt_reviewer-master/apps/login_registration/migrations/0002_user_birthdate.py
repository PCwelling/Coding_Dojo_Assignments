# -*- coding: utf-8 -*-
# Generated by Django 1.11.1 on 2017-05-23 14:50
from __future__ import unicode_literals

from django.db import migrations, models


class Migration(migrations.Migration):

    dependencies = [
        ('login_registration', '0001_initial'),
    ]

    operations = [
        migrations.AddField(
            model_name='user',
            name='birthdate',
            field=models.DateField(null=True),
        ),
    ]
