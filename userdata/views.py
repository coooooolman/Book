from django.shortcuts import render
from django.http import HttpResponse


def login(request):
    return render(request, 'userdata/login.html')


def success(request):
    return HttpResponse('Success!')


def show(request):
    return HttpResponse('Doge')

# TODO (CoolMan)
# 建议把处理函数名称改为check，用来检验用户登录是否正确

# 请求1:
# url: /check
# 方法: get
# 参数: {'username': 用户名}
# 返回值: 用户名存在返回 1 ，否则返回 0 。

# 请求2:
# url: /check
# 方法: post
# 参数: {'username': 用户名, 'passwd': 密码}
# 返回值: 用户名不存在返回 0 ，用户名存在但密码错误返回 1 ，二者都正确返回 2 。
