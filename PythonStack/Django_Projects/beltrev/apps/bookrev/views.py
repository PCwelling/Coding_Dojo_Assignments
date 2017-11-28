# -*- coding: utf-8 -*-
from __future__ import unicode_literals
from ..login.models import User
from django.shortcuts import render, redirect
from django.contrib import messages

# Create your views here.
def index(request):
    return render(request, 'bookrev/index.html')