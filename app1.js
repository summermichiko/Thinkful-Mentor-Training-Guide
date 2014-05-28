$(document).ready(function() {
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

	if (!$(".menu-li").hasClass("salmon-highlight")) {
		$(".menu-li").mouseover(function() {
			$(this).addClass("white-highlight");
		})
		$(".menu-li").mouseleave(function() {
			$(this).removeClass("white-highlight");
		})
	};

	$(".comprehension-questions input[type='radio']").change(function() {
		var $el = $(this).closest(".comprehension-questions");
		var correct = $(this).data("valid")!=undefined;
		$el.toggleClass("correctAnswer", correct).toggleClass("wrongAnswer", !correct);
		if ($("#one_Three").is(':checked') && $("#two_Two").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-one #submit-button-one").show();   
	    } else {
	    	$(this).closest(".comprehension-questions-section").find("#button-one #submit-button-one").hide();
	    };

    	if ($("#three_One").is(':checked') && $("#four_Three").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-two #submit-button-two").show();   
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-two #submit-button-two").hide();
	    };

    	if ($("#five_Two").is(':checked') && $("#six_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-three #submit-button-three").show();   
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-three #submit-button-three").hide();
	    };

    	if ($("#seven_Two").is(':checked') && $("#eight_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-four #submit-button-four").show();   
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-four #submit-button-four").hide();
	    };

    	if ($("#nine_Two").is(':checked') && $("#ten_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-five #submit-button-five").show();   
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-five #submit-button-five").hide();
	    };

	    if ($("#eleven_Three").is(':checked') && $("#twelve_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find("#button-six #submit-button-six").show();   
    	} else {
	    	$(this).closest(".comprehension-questions-section").find("#button-six #submit-button-six").hide();
	    };
	});

	//add current class to current chapter - add css salmon highlight to current

	$(".next-chapter button").on("click", function(e) {
		console.log(e);
		var el = $(this);
		var nextChapter = el.data("next");
		$("[data-chapter='"+nextChapter+"']").addClass("active");
		$(".chapter").hide();
		$("." + nextChapter).show();
		$('html, body').scrollTop(0);
	});

	$("#submit-button-six button").on("click", function() {
		$(".chapter6").hide();
		$(".final").show();
		$('html, body').scrollTop(0);
	});
});




