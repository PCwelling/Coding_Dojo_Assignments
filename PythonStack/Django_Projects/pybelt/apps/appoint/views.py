# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from models import *
from django.shortcuts import render, redirect
from django.contrib import messages
from time import strftime, gmtime

# Create your views here.
def index(request):

  context = {
    "user" : User.objects.get(id=request.session['user_id']),
    "current" : Appointment.objects.all(),
    "future" : Appointment.objects.filter(id=request.session['user_id']),
    "date" : strftime("%B-%d-%Y", gmtime()),
  }
  return render(request, 'appoint/index.html', context)

def create(request):
  result = Appointment.objects.new_appointment_validate(request.POST,request.session['user_id'])
  if type(result) == list:
    for err in result:
      messages.error(request, err)
  return redirect('/appoint')

  messages.success(request, "Successfully created an appointment!")
  return redirect('/appoint')

def edit(request, appointment_id):
  context = {
    "appointment" : Appointment.objects.get(id=appointment_id)
  }
  return render(request, "appoint/update.html", context)      

def update(request, appointment_id):
  errors = Appointment.objects.update_appointment_validate(request.POST, appointment_id)
  if len(errors):
    for field, message in errors.iteritems():
      error(request, message, extra_tags=field)
  return redirect('/appoint')

def delete(request, appointment_id):
  Appointment.objects.get(id = appointment_id).delete()
  return redirect('/appoint')

def logout(request):
  del request.session['user_id']
  return redirect('/')