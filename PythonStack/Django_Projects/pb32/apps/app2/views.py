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
        "mylist" : Product.objects.filter(users=request.session['user_id']),
        "mylist2" : Product.objects.filter(added_by_id=request.session['user_id']),
        "otherlist" : Product.objects.exclude(users=request.session['user_id']).exclude(added_by_id=request.session['user_id']),
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

def read(request, product_id):
    if "user_id" not in request.session:
        return redirect ('/')

    u = Product.objects.get(id=product_id)
    listers = u.users.all()

    context = {
        "item" : Product.objects.get(id=product_id),
        "listers" : listers,
    }
    return render(request, "app2/page3.html", context)

def new_item(request):
    if "user_id" not in request.session:
        return redirect ('/')

    return render(request, "app2/page2.html")

def update(request, product_id):
    if "user_id" not in request.session:
        return redirect ('/')
            
    mylist_update = Product.objects.get(id=product_id)
    mylist_update.users.add(User.objects.get(id = request.session['user_id']))
    mylist_update.save()
    return redirect('/app2')

def delete(request, product_id):
    if "user_id" not in request.session:
        return redirect ('/')

    Product.objects.get(id = product_id).delete()
    return redirect('/app2')

def remove(request, product_id):
    if "user_id" not in request.session:
        return redirect ('/')

    Product.objects.remove_wish(request.session['user_id'], product_id)
    return redirect('/app2')

def logout(request):
    del request.session['user_id']
    return redirect('/')
