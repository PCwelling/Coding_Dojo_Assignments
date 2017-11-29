from django.shortcuts import render, HttpResponse, redirect
from models import *
from ..login.models import User


# Create your views here.

def index(request):
    context = {
        "user" : User.objects.get(id=request.session['user_id']),
    }
    return render(request, "app2/index.html", context)

def create(request):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Product.objects.validate_product(request.POST)
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/app2')
    messages.success(request, "Successfully added an item!")
    return ridirect('/app2')

def read(request):
    return

def update(request):
    return render(request, "app2/page2.html")

def delete(request):
    return

def logout(request):
  del request.session['user_id']
  return redirect('/')
