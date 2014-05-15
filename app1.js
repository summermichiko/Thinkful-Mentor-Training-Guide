$(document).ready(function() {
	$(".menu-li").click(function() {
		$(".menu-li").removeClass("salmon-highlight");
		$(this).addClass("salmon-highlight");
	});
	if (!$(".menu-li").hasClass("salmon-highlight")) {
		$(".menu-li").mouseover(function() {
			$(this).addClass("white-highlight");
		})
		$(".menu-li").mouseleave(function() {
			$(this).removeClass("white-highlight");
		})
	};	
	$("#li-one").click(function() {
		$(".chapter1").show();
		$('html, body').scrollTop(0);
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-two").click(function() {
		$(".chapter2").show();
		$('html, body').scrollTop(0);
		$(".chapter1").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-three").click(function() {
		$(".chapter3").show();
		$('html, body').scrollTop(0);
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-four").click(function() {
		$(".chapter4").show();
		$('html, body').scrollTop(0);
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-five").click(function() {
		$(".chapter5").show();
		$('html, body').scrollTop(0);
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter6").hide();
	});
	$("#li-six").click(function() {
		$(".chapter6").show();
		$('html, body').scrollTop(0);
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
	});
	if(document.getElementById('one_Three').checked) {
		$(".comprehension-questions").addClass("correctAnswer");
	} else if(document.getElementById('one_One').checked) {
		$(".comprehension-questions").addClass("wrongAnswer");
	} else if(document.getElementById('one_Two').checked) {
		$(".comprehension-questions").addClass("wrongAnswer");
	} else if(document.getElementById('one_Four').checked) {
		$(".comprehension-questions").addClass("wrongAnswer");
	}
});


