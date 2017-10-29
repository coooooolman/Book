from django.shortcuts import render
from django.http import HttpResponse
from . import models


def login(request):
    return render(request, 'userdata/login.html')


def success(request):
    return HttpResponse('Success!')


def check(request):
    if request.method == 'GET':
        g_username = request.GET.get('username')
        have_username = models.UserData.objects.filter(username=g_username)
        if list(have_username):
            return HttpResponse(1)
        return HttpResponse(0)
    elif request.method == 'POST':
        g_username = request.POST.get('username')
        d_username = models.UserData.objects.filter(username=g_username)
        if list(d_username):
            g_passwd = request.POST.get('passwd')
            if list(d_username)[0].password == g_passwd:
                return HttpResponse(2)
            return HttpResponse(1)
        else:
            return HttpResponse(0)
