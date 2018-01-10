# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from .models import *
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
    context = {
        "user" : User.objects.get(id=request.session['user_id']),
        "quotes" : Quote.objects.exclude(favorites__id=request.session['user_id']),
        "favorites" : Quote.objects.filter(favorites__id=request.session['user_id']),
    }
    return render(request, 'app2/index.html', context)

def logout(reques
    del request.session['user_id']
    return redirect('/')

def create(request):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Quote.objects.validate_quote(request.POST, request.session['user_id'])
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/app2')
    messages.success(request, "Successfully added a quote!")
    return redirect('/app2')

def read(request, user_id):
    if "user_id" not in request.session:
        return redirect ('/')

    context = {
        "user" : User.objects.get(id=user_id),
        "quotes" : Quote.objects.filter(user_id=user_id),
    }
    return render(request, 'app2/page2.html', context)

def update(request, quote_id):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Quote.objects.update_quote(quote_id, request.session['user_id'])
    return redirect('/app2')

def delete(request, quote_id):
    if "user_id" not in request.session:
        return redirect ('/') 

    result = Quote.objects.delete_favorite(quote_id, request.session['user_id'])
    return redirect('/app2')