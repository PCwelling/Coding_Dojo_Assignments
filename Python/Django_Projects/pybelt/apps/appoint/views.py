# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from models import *
from django.shortcuts import render, redirect
from django.contrib import messages


# Create your views here.
def index(request):
    return render(request, 'appoint/index.html')

def create(request):
#   errors = Appointments.objects.validator(request.POST)
#   if len(errors):
#     for field, message in errors.iteritems():
#       error(request, message, extra_tags=field)

#     return redirect('/appoint/new')

  Appointment.objects.create(
    date = request.POST['date'],
    time = request.POST['time'],
    task = request.POST['task'],
  )
  return redirect('/appoint')


# def update(request, appointment_id):
#       errors = User.objects.basic_validator(request.POST)
#   if len(errors):
#     for field, message in errors.iteritems():
#       error(request, message, extra_tags=field)
  
#     return redirect('/user/{}/edit/'.format(user_id))

#   user_update = User.objects.get(id = appointment_id)
#   user_update.task = request.POST['task']
#   user_update.status = request.POST['status']
#   user_update.date= request.POST['date']
#   user_update.time= request.POST['time']
#   user_update.save()
#   return redirect('/appoint')

#     return render(request, "appoint/update.html")

# def delete(request, user_id):
#       Appointment.objects.get(id=appointment_id).delete()
#   return redirect('/appoint')