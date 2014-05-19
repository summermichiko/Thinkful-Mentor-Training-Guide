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

		if ($("#one_Three").is(':checked') && $("#two_Two").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
	    };

    	if ($("#three_One").is(':checked') && $("#four_Three").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
    	};
    	if ($("#five_Two").is(':checked') && $("#six_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
    	};
    	if ($("#seven_Two").is(':checked') && $("#eight_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
    	};
    	if ($("#nine_Two").is(':checked') && $("#ten_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
    	};
    	if ($("#eleven_Three").is(':checked') && $("#twelve_One").is(':checked')) {
	   		$(this).closest(".comprehension-questions-section").find(".button .submit-button").show();   
    	};
	});

	//store ids in array
	//store info in html

	/*var currentChapter = 1;
	if (currentChapter < 6) {
	    $(".submit-button").click(function() {
	    	currentChapter++;
	    	$(".changing-container").html(currentChapter);
	}) else {
		$(".congratsSection").show();
	};*/

    	//and make now current menu-li clickable and remove opacity

    $("#lastButton").click(function(){
    	//when last button is clicked, show Congrats div
    });
    

});




