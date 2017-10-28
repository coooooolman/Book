// JavaScript Document
$(function(){
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