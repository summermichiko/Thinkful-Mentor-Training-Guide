$(document).ready(function() {

	// click on side menu item
	// $(".menu-li").click(function() {
	// 	var chapter = $(this).data("chapter");
	// 	if ($(this).hasClass('active') == false) {
	// 		return;
	// 	}
	// 	$(this).find('h2').removeClass('disabled-text');
	// 	$(this).find('h3').removeClass('disabled-text');
	// 	$(".menu-li").removeClass("salmon-highlight");
	// 	$(this).addClass("salmon-highlight");
	// 	$(this).find('h2').addClass('white-text');
	// 	$(this).find('h3').addClass('white-text');
	// 	$(".chapter").hide();
	// 	$("." + chapter).show();
	// 	$('body').animate({ scrollTop: 0 });
	// });

	$(".menu-li").click(function() {
		if ($(this).hasClass('active')==false) {
			return;
		}
		$(".menu-li").removeClass("salmon-highlight");
		$(this).addClass("salmon-highlight");
		var chapter = $(this).data("chapter");
		$(".chapter").hide();
		$("." + chapter).show();
		$('html, body').scrollTop(0);
	});

	// if (!$(".menu-li").hasClass("salmon-highlight")) {
	// 	$(".menu-li").mouseleave(function() {
	// 		$(this).removeClass("white-highlight");
	// 	})
	// };

	// toggle next button if correct answers are selected
	$(".comprehension-questions input[type='radio']").change(function() {
		var $el = $(this).closest(".comprehension-questions"),
			correct = $(this).data("valid") != undefined;
		$el.toggleClass("correctAnswer", correct).toggleClass("wrongAnswer", !correct);

		// check chapter 1
		if ($("#one_Three").is(':checked') && $("#two_Two").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-one #submit-button-one").show();
	    } else {
	    	$(this).closest(".comprehension-questions-section").find("#button-one #submit-button-one").hide();
	    };

	    // check chapter 2
    	if ($("#three_One").is(':checked') && $("#four_Three").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-two #submit-button-two").show();
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-two #submit-button-two").hide();
	    };

	    // check chapter 3
    	if ($("#five_Two").is(':checked') && $("#six_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-three #submit-button-three").show();
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-three #submit-button-three").hide();
	    };

	    // check chapter 4
    	if ($("#seven_Two").is(':checked') && $("#eight_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-four #submit-button-four").show();
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-four #submit-button-four").hide();
	    };

	    // check chapter 5
    	if ($("#nine_Two").is(':checked') && $("#ten_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-five #submit-button-five").show();
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-five #submit-button-five").hide();
	    };

	    // check chapter 6
	    if ($("#eleven_Three").is(':checked') && $("#twelve_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-six #submit-button-six").show();
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-six #submit-button-six").hide();
	    };
	});

	// initial styling of chapter one on load
	$('#li-one').addClass('salmon-highlight');
	$('#li-one').find('h2').addClass('white-text');
	$('#li-one').find('h3').addClass('white-text');

	// click on next button
	// $(".next-chapter button").on("click", function(e) {
	// 	var el = $(this),
	// 		thisChapter = el.data("this"),
	// 		nextChapter = el.data("next");
	// 	$("[data-chapter=" + thisChapter + "]").removeClass("salmon-highlight");
	// 	$("[data-chapter=" + thisChapter + "]").find('h2').removeClass("white-text");
	// 	$("[data-chapter=" + thisChapter + "]").find('h3').removeClass("white-text");
	// 	$("[data-chapter=" + thisChapter + "]").find('h2').addClass("completed-section");
	// 	$("[data-chapter=" + thisChapter + "]").find('h3').addClass("completed-section");
	// 	$("[data-chapter=" + nextChapter + "]").addClass("salmon-highlight");
	// 	$("[data-chapter=" + nextChapter + "]").find('h2').removeClass("disabled-text");
	// 	$("[data-chapter=" + nextChapter + "]").find('h3').removeClass("disabled-text");
	// 	$("[data-chapter=" + nextChapter + "]").find('h2').addClass("white-text");
	// 	$("[data-chapter=" + nextChapter + "]").find('h3').addClass("white-text");
	// 	$(".chapter").hide();
	// 	$("." + nextChapter).show();
	// 	$('body').animate({ scrollTop: 0 });
	// });

	$(".next-chapter button").on("click", function(e) {
		console.log(e);
		var el = $(this);
		var nextChapter = el.data("next");
		$("[data-chapter='"+nextChapter+"']").addClass("active");
		$(".chapter").hide();
		$("." + nextChapter).show();
		$('html, body').scrollTop(0);
	});

	$(".final-chapter button").on("click", function() {
		$(".chapter").hide();
		$(".final").show();
		$('body').animate({ scrollTop: 0 });
	});
});




