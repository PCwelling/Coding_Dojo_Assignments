# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from datetime import datetime
import random
from django.shortcuts import render, redirect

# Create your views here.


def index(request):
    try:
        request.session['total']
    except KeyError:
        request.session['total'] = 0
    return render(request, "ninjagold/index.html")

def proccess(request):
    
