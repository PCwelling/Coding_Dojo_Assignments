# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from models import *
from django.shortcuts import render, redirect
from django.contrib import messages
from datetime import datetime

# Create your views here.
def index(request):
  context = {
    "quote" : Quote.objects.all(),
    "favorite" : Favorite.objects.all(),
  }
  return render(request, 'quotes/index.html', context)

def create(request):
  # errors = Appointment.objects.validator(request.POST)
  # if len(errors):
  #   for field, message in errors.iteritems():
  #     error(request, message, extra_tags=field)

  #   return redirect('/')

  Quote.objects.create(
    quote_by = request.POST['quote_by'],
    quote = request.POST['quote'],
    user_id = request.session['user_id'],
  )
  return redirect('/quotes')

# def add(request, appointment_id):
#   context = {
#     "appointment" : Appointment.objects.get(id=appointment_id)
#   }
#   return render(request, "quotes/update.html", context)      

# def update(request, appointment_id):
# #   errors = Appointment.objects.basic_validator(request.POST)
# #   if len(errors):
# #     for field, message in errors.iteritems():
# #       error(request, message, extra_tags=field)
# #     return redirect('/user/{}/edit/'.format(user_id))

#   appointment_update = Appointment.objects.get(id = appointment_id)
#   appointment_update.task = request.POST['task']
#   appointment_update.status = request.POST['status']
#   appointment_update.date= request.POST['date']
#   appointment_update.time= request.POST['time']
#   appointment_update.save()
#   return redirect('/quotes')

def remove(request, favorite_id):
  quotefavorite.objects.get(id = favorite_id).delete()
  return redirect('/quotes')

def logout(request):
  del request.session['user_id']
  return redirect('/')