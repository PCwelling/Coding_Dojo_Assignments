from __future__ import unicode_literals
from .models import User
from django.contrib.messages import error
from django.shortcuts import render, HttpResponse, redirect

def index(request):
  context = {
    'users': User.objects.all
  }
  return render(request, 'index.html', context)

def new(request):
  return render(request, 'new.html')

def create(request):
  errors = User.objects.basic_validator(request.POST)
  if len(errors):
    for field, message in errors.iteritems():
      error(request, message, extra_tags=field)

    return redirect('/users/new')

  User.objects.create(
    f_name = request.POST['f_name'],
    l_name = request.POST['l_name'],
    email = request.POST['email'],
  )

  return redirect('/')

def edit(request, user_id):
  context = {
    'user': User.objects.get(id=user_id)
  }
  return render(request, 'edit.html', context)


def update(request, user_id):
  errors = User.objects.basic_validator(request.POST)
  if len(errors):
    for field, message in errors.iteritems():
      error(request, message, extra_tags=field)
  
    return redirect('/user/{}/edit/'.format(user_id))

  user_update = User.objects.get(id = user_id)
  user_update.f_name = request.POST['f_name']
  user_update.l_name = request.POST['l_name']
  user_update.email = request.POST['email']
  user_update.save()
  return redirect('/users')

def show(request, user_id):
  context = {
    'user': User.objects.get(id=user_id)
  }

  return render(request, 'show.html', context)

def delete(request, user_id):
  User.objects.get(id=user_id).delete()
  return redirect('/users')
