# -*- coding: utf-8 -*-
# Generated by Django 1.11.7 on 2017-11-22 23:27
from __future__ import unicode_literals

from django.db import migrations, models
import django.db.models.deletion


class Migration(migrations.Migration):

    initial = True

    dependencies = [
        ('loginReg_App', '0001_initial'),
    ]

    operations = [
        migrations.CreateModel(
            name='Quotes',
            fields=[
                ('id', models.AutoField(auto_created=True, primary_key=True, serialize=False, verbose_name='ID')),
                ('quotes', models.TextField(max_length=255)),
                ('author', models.CharField(max_length=200)),
                ('favorited_by', models.ManyToManyField(related_name='favorited', to='loginReg_App.User')),
                ('user', models.ForeignKey(on_delete=django.db.models.deletion.CASCADE, related_name='quotes', to='loginReg_App.User')),
            ],
        ),
    ]