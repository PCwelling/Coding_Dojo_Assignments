# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from models import *
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
  if "user_id" not in request.session:
        return redirect ('/')
            
  context = {
    "user" : User.objects.get(id=request.session['user_id']),
    "mylist" : Favorite.objects.filter(user_id=request.session['user_id']),
    "otherlist" : Wish.objects.all()#.exclude(favorites__user_id=request.session['user_id']),
  }
  return render(request, 'app2/index.html', context)

def new(request):
      return render(request,'app2/page2.html')

def create(request):
  if "user_id" not in request.session:
    return redirect ('/')

  result = Wish.objects.validate_wish(request.POST, request.session['user_id'])
  if type(result) == list:
    for err in result:
      messages.error(request, err)
    return redirect('/app2')
  messages.success(request, "Successfully added an item!")
  return  redirect('/app2')

def add(request, item_id):
  if "user_id" not in request.session:
    return redirect ('/')
           
  mylistadd_update = Favorite(item_id="item_id", user_id="user_id")
  mylistadd_update.user_id = request.session['user_id']
  mylistadd_update.item_id = item_id
  mylistadd_update.save()
  return redirect('/app2')

def show(request, item_id):
  if "user_id" not in request.session:
        return redirect ('/')

  context = {
    "items" : Wish.objects.get(id =item_id),
    "users" : User.objects.filter(id=user_id__)
  }
  return render(request, 'app2/page3.html', context)


def remove(request, item_id):
  Favorites.objects.get(id = item_id).delete()
  return redirect('/app2')

def logout(request):
  del request.session['user_id']
  return redirect('/')