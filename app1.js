$(document).ready(function() {
	$(".menu-li").click(function() {
		$(".menu-li").removeClass("salmon-highlight");
		$(this).addClass("salmon-highlight");
		var chapter = $(this).data("chapter");
		$(".chapter").hide();
		$("." + chapter).show();
		$('html, body').scrollTop(0);
	});
	if (!$(".menu-li").hasClass("salmon-highlight")) {
		$(".menu-li").mouseover(function() {
			$(this).addClass("white-highlight");
		})
		$(".menu-li").mouseleave(function() {
			$(this).removeClass("white-highlight");
		})
	};	
	$("#one_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#one_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#one_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#one_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#two_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#two_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#two_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#two_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#three_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#three_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#three_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#three_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#four_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#four_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#four_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#four_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#five_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#five_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#five_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#five_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#six_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#six_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#six_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#six_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#seven_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#seven_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#seven_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#seven_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eight_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#eight_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eight_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eight_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#nine_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#nine_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#nine_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#nine_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#ten_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#ten_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#ten_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#ten_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eleven_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eleven_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#eleven_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#eleven_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#twelve_One").change(function() {
		$(this).closest(".comprehension-questions").removeClass("wrongAnswer").addClass("correctAnswer");
	});
	$("#twelve_Two").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#twelve_Three").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
	$("#twelve_Four").change(function() {
		$(this).closest(".comprehension-questions").removeClass("correctAnswer").addClass("wrongAnswer");
	});
});


