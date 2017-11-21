# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from models import *
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
  context = {
    "quote" : Quote.objects.all(),
    "favorite" : Favorite.objects.all(),
    "user" : User.objects.get(id=request.session['user_id'])
  }
  return render(request, 'quotes/index.html', context)

def create(request):
  result = Quote.objects.validate_quote(request.POST)
  if type(result) == list:
    for err in result:
        messages.error(request, err)
    return redirect('/quotes')

  Quote.objects.create(
    quote_by = request.POST['quote_by'],
    quote = request.POST['quote'],
    user_id = request.session['user_id'],
  )
  return redirect('/quotes')

def add(request, quote_id):
     
  favorite_update = favorite.objects.get(id = quote_id)
  favorite_update.user_id = request.session['user_id']
  favorite_update.quote_id = quote.id 
  favorite_update.save()
  return redirect('/quotes')

def list(request, user_id):
  context = {
    "quote" : Quote.objects.get(id=user_id),
  }
  return render(request, 'quotes/quotes.html', context)


def remove(request, favorite_id):
  quotefavorite.objects.get(id = favorite_id).delete()
  return redirect('/quotes')

def logout(request):
  del request.session['user_id']
  return redirect('/')