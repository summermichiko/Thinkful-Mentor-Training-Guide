$(document).ready(function() {
	$("#li-one").mouseover(function() {
		$(this).css("background-color", "#FFFFFF");
	})
	$("#li-two").mouseover(function() {
		$(this).css("background-color", "#FFFFFF");
	})
	$("#li-three").mouseover(function() {
		$(this).css("background-color", "#FFFFFF");
	})
	$("#li-five").mouseover(function() {
		$(this).css("background-color", "#FFFFFF");
	})
	$("#li-six").mouseover(function() {
		$(this).css("background-color", "#FFFFFF");
	})
	$("#li-one").mouseleave(function() {
		$(this).css("background-color", "#F1F1F1");
	})
	$("#li-two").mouseleave(function() {
		$(this).css("background-color", "#F1F1F1");
	})
	$("#li-three").mouseleave(function() {
		$(this).css("background-color", "#F1F1F1");
	})
	$("#li-five").mouseleave(function() {
		$(this).css("background-color", "#F1F1F1");
	})
	$("#li-six").mouseleave(function() {
		$(this).css("background-color", "#F1F1F1");
	})
	$("#li-one").click(function() {
		location.href = "li-one.html"
	})
	$("#li-two").click(function() {
		location.href = "li-two.html"
	})
	$("#li-three").click(function() {
		location.href = "li-three.html"
	})
	$("#li-five").click(function() {
		location.href = "li-five.html"
	})
	$("#li-six").click(function() {
		location.href = "li-six.html"
	})
});