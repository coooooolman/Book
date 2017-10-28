from django.http import HttpResponse
from django.shortcuts import render


def demo_1(request):
    txt = 'Hello'
    return HttpResponse(txt)


def demo_2(request):
    return render(request, 'demos/demo_1.html')


