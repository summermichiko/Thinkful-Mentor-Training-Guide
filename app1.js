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
	});

	$("submit-button-one").on("click", function() {
		$(this).closest(".chapter1").hide(".chapter2").show();
	});







    	//and make now current menu-li clickable and remove opacity
    

});




