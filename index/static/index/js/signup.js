// JavaScript Document
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