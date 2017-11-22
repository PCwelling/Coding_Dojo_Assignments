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
    "quote" : Quote.objects.all().exclude(favorites__user_id=request.session['user_id']),
    # "excfav" : Quote.objects.exclude(),
    "favorite" : Favorite.objects.filter(user_id=request.session['user_id']),
    "user" : User.objects.get(id=request.session['user_id'])
  }
  return render(request, 'quotes/index.html', context)

def create(request):
   if "user_id" not in request.session:
        return redirect ('/')     

  result = Quote.objects.validate_quote(request.POST, request.session['user_id'])
  if type(result) == list:
  # if isinstance(result, list):
        for err in result:
              messages.error(request, err)
        return redirect('/quotes')
  messages.success(request, "Successfully added a quote!")
  return redirect('/quotes')

def add(request, quotes_id):
  if "user_id" not in request.session:
        return redirect ('/')
           
  favorite_update = Favorite(quote_id="quote_id", user_id="user_id")
  favorite_update.user_id = request.session['user_id']
  favorite_update.quote_id = quotes_id
  favorite_update.save()
  return redirect('/quotes')

def show(request, user_id):
  if "user_id" not in request.session:
        return redirect ('/')

  context = {
    "quote" : Quote.objects.filter(user_id=user_id),
    "user" : User.objects.get(id=user_id)
  }
  return render(request, 'quotes/quotes.html', context)


def delete(request, favorites_id):
  Favorite.objects.get(id = favorites_id).delete()
  return redirect('/quotes')

def logout(request):
  del request.session['user_id']
  return redirect('/')