$(function () {
    $('#username').change(function () {
        // if ($('#username').val() !== '')
        check(1);
    });
});


// 表单检查
// key = 1: 检查用户名
// key = 2: 检查用户名和密码
function check(key) {
    var username = $('#username');
    var passwd = $('#passwd');
    var t_username = $('.t_username');
    var t_passwd = $('.t_passwd');
    if (key === 1) {
        if (username.val() === '')
            t_username.html('');
        else {
            $.get('login/check/', {'username': username.val()}, function (result) {
                if (result === '0') {
                    t_username.html('该用户不存在！');
                } else if (result === '1') {
                    t_username.html('');
                }
            })
        }
    } else if (key === 2) {
        $.post('login/check/', {'username': username.val(), 'passwd': passwd.val()}, function (result) {
            if (result === '0') {
                t_username.html('该用户不存在！');
                t_passwd.html('');
                alert('该用户名不存在！');
            } else if (result === '1') {
                t_username.html('');
                t_passwd.html('密码错误！');
                alert('密码错误！');
            } else if (result === '2') {
                t_username.html('');
                t_passwd.html('');
                alert('登录成功！');
                welcome(username.val());
            }
        });
        return false;
    }
}

function welcome(username) {
    var t_welcome = $('.welcome');
    $('.show').hide();
    t_welcome.html('你好，' + username);
    t_welcome.show();
}
