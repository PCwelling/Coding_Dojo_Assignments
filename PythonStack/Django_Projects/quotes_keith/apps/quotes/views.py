# -*- coding: utf-8 -*-
from __future__ import unicode_literals

from django.shortcuts import render, redirect

from . models import Quotes
from ..loginReg_App.models import User

# Create your views here.
def dashboard(request):
    u1 = User.objects.get(id=request.session['userid']) # get a user object using session data from login
    all_faved_quotes = u1.favorited.all() # get all favorited quotes through above user object

    all_quotes = Quotes.objects.all()

    q_set = set(all_quotes)
    fav_set = set(all_faved_quotes)

    q_set -= fav_set
    
    context = {
        'allQuotes': q_set,
        'favorited_quotes': all_faved_quotes
    }

    return render(request, 'quotes/dashboard.html', context)

def process(request):
    Quotes.objects.addQuote(request.POST, request.session['userid'])
    return redirect('/quotes')

def users(request, id):
    user = User.objects.get(id=id)
    context = {
        'user': user,
        'quotes': Quotes.objects.filter(user=user)
    }

    return render(request, 'quotes/user.html', context)

def favorite(request, q_id):
    Quotes.objects.favoriteQuote(request.session['userid'], q_id)
    return redirect('/quotes')

def remove(request, q_id):
    Quotes.objects.removeFavorite(request.session['userid'], q_id)
    return redirect('/quotes')
    