# -*- coding: utf-8 -*-
# from __future__ import unicode_literals

from django.shortcuts import render, redirect
from models import User
from django.contrib import messages

# Create your views here.
# index=> ('/)
def index(request):
    return render(request, 'loginReg_App/index.html')


    

#register=> '/register'
def register(request):
        results = User.objects.validate(request.POST)
        if results['status'] == True:
           user = User.objects.creator(request.POST)
           print user.id
           request.session['userid']=user.id 
           messages.success(request, 'User has been created.')
           return redirect('/quotes')
        else:
            for error in results['errors']:
                messages.error(request, error)

        return redirect('/')

#login=> '/login'
def login(request):
    results = User.objects.loginVal(request.POST)
    if results['status'] == False:
        messages.error(request, 'Please check email and password')
        return redirect('/')
    request.session['email'] = results['user'].email
    request.session['userid'] = results['user'].id
    request.session['first_name'] = results['user'].first_name
    return redirect('/quotes')

def dashboard(request): 
    if 'email' not in request.session:
        return redirect('/')
    return render(request, 'loginReg_App/success.html')

def logout(request):
    request.session.flush()
    return redirect('/')


   