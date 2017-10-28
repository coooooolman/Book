jQuery(document).ajaxSend(function(event, xhr, settings) {

	"use strict";
    function getCookie(name) {
        var cookieValue = null;
        if (document.cookie && document.cookie !== '') {
            var cookies = document.cookie.split(';');
            for (var i = 0; i < cookies.length; i++) {
                var cookie = jQuery.trim(cookies[i]);
                // Does this cookie string begin with the name we want?
                if (cookie.substring(0, name.length + 1) === (name + '=')) {
                    cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                    break;
                }
            }
        }
        return cookieValue;
    }
    function sameOrigin(url) {
        // url could be relative or scheme relative or absolute
        var host = document.location.host; // host + port
        var protocol = document.location.protocol;
        var sr_origin = '//' + host;
        var origin = protocol + sr_origin;
        // Allow absolute or scheme relative URLs to same origin
        return (url === origin || url.slice(0, origin.length + 1) === origin + '/') ||
            (url === sr_origin || url.slice(0, sr_origin.length + 1) === sr_origin + '/') ||
            // or any other URL that isn't scheme relative or absolute i.e relative.
            !(/^(\/\/|http:|https:).*/.test(url));
    }
    function safeMethod(method) {
        return (/^(GET|HEAD|OPTIONS|TRACE)$/.test(method));
    }

    if (!safeMethod(settings.type) && sameOrigin(settings.url)) {
        xhr.setRequestHeader("X-CSRFToken", getCookie('csrftoken'));
    }
});

$(function(){
	"use strict";
	
	// toggle the width of search bar;
	var search = $("[name=search]");
	search.focus(function(){
		search.addClass("sch-fcs");
	});
	search.blur(function(){
		search.removeClass("sch-fcs");
	});
	var h_search = $(".h-search");
	h_search.focus(function(){
		h_search.addClass("sch-fcs");
	});
	h_search.blur(function(){
		h_search.removeClass("sch-fcs");
	});
	
	// toggle body cover
	var cover = $(".cover");
	var loginC = $(".login-c");
	var signupC = $(".signup-c");
	$(".login").click(function(){
		cover.addClass("enable");
		loginC.addClass("enable");
	});
	$(".signup").click(function(){
		cover.addClass("enable");
		signupC.addClass("enable");
	});
	$(".cover").click(function(){
		cover.removeClass("enable");
		loginC.removeClass("enable");
		signupC.removeClass("enable");
	});
});

//check stayIn
$(function(){
	"use strict";
	var img = $(".stayIn div");
	var checkBox = $(".stayIn input");
	img.click(function(){
		if(img.hasClass("checked")){
			img.removeClass("checked");
			checkBox.attr("checked", false);
		} else {
			img.addClass("checked");
			checkBox.attr("checked", true);
		}
	});
});

//check the readme box
function clickCheckBox() {
	"use strict";
	var img = $(".readme div");
	var checkBox = $(".readme input");
	if(img.hasClass("checked")){
		img.removeClass("checked");
		checkBox.attr("checked", false);
	} else {
		img.addClass("checked");
		checkBox.attr("checked", true);
	}
}

//listen to the scroller
$(document).scroll(function(){
	"use strict";
	
	var t_nav = $(".nav");
	var top = $(document).scrollTop();
	if (top > 200){
		t_nav.addClass("show_nav");
	} else {
		t_nav.removeClass("show_nav");
	}
});

//login to signup
function l_to_s(){
	"use strict";
	
	$(".login-c").removeClass("enable");
	$(".signup-c").addClass("enable");
	return false;
}

//signup to login
function s_to_l(){
	"use strict";
	
	$(".signup-c").removeClass("enable");
	$(".login-c").addClass("enable");
	return false;
}

//signUp confirm
$(function(){
	"use strict";
	$(".readme div").click(function(){
		clickCheckBox();
	});
	$("#signUp").submit(function(){
		check();
	});
	$("[name=username]").change(function(){
		checkUsername();
	});
});

function checkUsername() {
	"use strict";
	var check = false;
	var username = document.getElementsByName("username")[0].value;
	if(username.length < 1 || username.lenth > 7) {
		check = false;
	} else {
		check = true;
	}
	return check;
}
function checkBox() {
	"use strict";
	var check = false;
	var thisCheckBox = document.getElementsByName("checkbox")[0];
	if (!thisCheckBox.checked){
		check = false;
	} else {
		check = true;
	}
	return check;
}
function check() {
	"use strict";
	var check = checkBox() && checkUsername();
	return check;
}