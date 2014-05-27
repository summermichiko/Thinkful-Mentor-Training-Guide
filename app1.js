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

	$(".comprehension-questions input[type='radio']").change(function() {
		var $el = $(this).closest(".comprehension-questions");
		var correct = $(this).data("valid")!=undefined;
		$el.toggleClass("correctAnswer", correct).toggleClass("wrongAnswer", !correct);

		//make more generic (stored in html which ones are valid)
			//ask - can i look at all valid answers, and is there one that is not checked
			//for the particular class, find all valid answers, if returns none, i know its correct

			//make specific for each class loaded on the page
	    	//make button hide if both ids are not checked

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

	$(".chapter1").on("click", "#submit-button-one", function() {
		console.log("test");
		//hide chapter1 and show chapter2
		$('html, body').scrollTop(0);
	});

	$(".chapter2").on("click", "#submit-button-two", function() {
		console.log("test");
		//hide chapter2 and show chapter3
		$('html, body').scrollTop(0);
	});

	$(".chapter3").on("click", "#submit-button-three", function() {
		console.log("test");
		//hide chapter3 and show chapter4
		$('html, body').scrollTop(0);
	});

	$(".chapter4").on("click", "#submit-button-four", function() {
		console.log("test");
		//hide chapter4 and show chapter5
		$('html, body').scrollTop(0);
	});

	$(".chapter5").on("click", "#submit-button-five", function() {
		console.log("test");
		//hide chapter5 and show chapter6
		$('html, body').scrollTop(0);
	});

	$(".chapter6").on("click", "#submit-button-six", function() {
		console.log("test");
		//hide chapter6 and show next steps div
		$('html, body').scrollTop(0);
	});
    	//and make now current menu-li clickable and remove opacity

});




