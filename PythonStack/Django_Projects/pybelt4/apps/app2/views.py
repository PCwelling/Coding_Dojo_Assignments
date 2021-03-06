# APP2 VIEWS
from django.shortcuts import render, HttpResponse, redirect
from models import *
from ..login.models import User
from django.contrib import messages

# Create your views here.

def index(request):
    if "user_id" not in request.session:
        return redirect ('/')  

    context = {
        "user" : User.objects.get(id=request.session['user_id']),
        "myplan" : Trip.objects.filter(user = request.session['user_id']),
        "myplan2" : Trip.objects.filter(favorites__id=request.session['user_id']),
        "otherplan" : Trip.objects.exclude(user=request.session['user_id']).exclude(favorites__id=request.session['user_id']),
    }
    return render(request, "app2/index.html", context)

def logout(request):
    del request.session['user_id']
    return redirect('/')

def new(request):
    context = {
        "user" : User.objects.get(id=request.session['user_id'])
    }
    return render(request, "app2/page2.html", context)

def create(request):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Trip.objects.validate_trip(request.POST, request.session['user_id'])
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/app2/new')
    messages.success(request, "Successfully added a trip!")
    return redirect('/app2')

def read(request, trip_id):
    if "user_id" not in request.session:
        return redirect ('/')

    u = Trip.objects.get(id=trip_id)
    listers = u.favorites.all()

    context = {
        "trips" : Trip.objects.get(id=trip_id),
        "listers" : listers
    }
    return render(request, 'app2/page3.html', context)

def update(request, trip_id):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Trip.objects.update_trip(trip_id, request.session['user_id'])
    return redirect('/app2')