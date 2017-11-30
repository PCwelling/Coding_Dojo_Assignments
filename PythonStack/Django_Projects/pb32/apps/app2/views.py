from django.shortcuts import render, HttpResponse, redirect
from models import *
from ..login.models import User
from django.contrib import messages

# Create your views here.

def index(request):
    context = {
        "user" : User.objects.get(id=request.session['user_id']),
        "mylist" : Product.objects.filter(item=user.id),
        "otherlist" : Product.objects.exclude(added_by_id=request.session['user_id']),
    }
    return render(request, "app2/index.html", context)

def create(request):
    if "user_id" not in request.session:
        return redirect ('/')

    result = Product.objects.validate_product(request.POST, request.session['user_id'])
    if type(result) == list:
        for err in result:
            messages.error(request, err)
        return redirect('/app2')
    messages.success(request, "Successfully added an item!")
    return redirect('/app2')

def read(request):
    return

def new_item(request):
    return render(request, "app2/page2.html")

def update(request, product_id):
  if "user_id" not in request.session:
        return redirect ('/')
           
  mylist_update = Product.objects.get(id=product_id)
  mylist_update.users.add(User.objects.get(id = request.session['user_id']))
  mylist_update.save()
  return redirect('/app2')

def delete(request, item_id):
    return

def logout(request):
  del request.session['user_id']
  return redirect('/')
