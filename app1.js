$(document).ready(function() {

	// click on responsive navbar
	$(".dropDownButton").on("click", function() {
		$(".responsiveChapterUl").toggle();
	});

	// click on chapter within responsive navbar
	$(".responsiveChapterUl li").on("click", function() {
		if ($(this).hasClass("active")) {
			$(".responsiveChapterUl").hide();
			var updateText = $(this).find("h2").text();
			$(".dropDownButton").text(updateText);
		};
	});

	// fixed scroll for desktop and mobile
	var sideMenu = $(".desktop-side-menu"),
		fixedSideMenu = sideMenu.offset().top - 30,
		responsiveMenu = $(".dropDownButton"),
		fixedResponsiveMenu = responsiveMenu.offset().top;

	var fixedMenu = function() {
		var scrollTop = $(window).scrollTop();
		if ($(window).width() > 767) {
			if (scrollTop > fixedSideMenu) {
				sideMenu.addClass('fixed-desktop');
			} else {
				sideMenu.removeClass('fixed-desktop');
			}
		} else {
			if (scrollTop > fixedResponsiveMenu) {
				responsiveMenu.addClass('fixed-mobile');
			} else {
				responsiveMenu.removeClass('fixed-mobile');
			}
		}
	};
	$(window).scroll(function() {
		fixedMenu();
	});

	$(".menu-li").click(function() {
		// disabled chapter if questions have not been answered correctly
		if ($(this).hasClass('active')==false) {
			return;
		}

		// if current chapter of completed chapters
		$(".menu-li").removeClass("salmon-highlight");
		$(".menu-li.active").each(function(index, nav) {
			$(this).find("h2").removeClass("white-text");
			$(this).find("h2").addClass("complete-text");
			$(this).find("h3").removeClass("white-text");
			$(this).find("h3").addClass("complete-text");
		});

		$(this).addClass("salmon-highlight");
		$(this).find("h2").addClass("white-text");
		$(this).find("h3").addClass("white-text");
		var chapter = $(this).data("chapter");
		$(".chapter").hide();
		$(".final").hide();
		$("." + chapter).show();
		$('html, body').scrollTop(0);
	});

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
	$('.desktopMenu #li-one').addClass('salmon-highlight');
	$('.desktopMenu #li-one').find('h2').addClass('white-text');
	$('.desktopMenu #li-one').find('h3').addClass('white-text');
	$('.responsiveNavbar #li-one').addClass('salmon-highlight');
	$('.responsiveNavbar #li-one').find('h2').addClass('white-text');
	$('.responsiveNavbar #li-one').find('h3').addClass('white-text');

	// click on next chapter button
	$(".next-chapter button").on("click", function(e) {
		var thisChapter = $(this).data("this"),
			nextChapter = $(this).data("next");

		// for this chapter
		$("[data-chapter='" + thisChapter + "']").removeClass("salmon-highlight");
		$("[data-chapter='" + thisChapter + "']").find('h2').removeClass("white-text");
		$("[data-chapter='" + thisChapter + "']").find('h3').removeClass("white-text");
		$("[data-chapter='" + thisChapter + "']").find('h2').addClass("complete-text");
		$("[data-chapter='" + thisChapter + "']").find('h3').addClass("complete-text");

		// for next chapter
		$("[data-chapter='" + nextChapter + "']").addClass("active salmon-highlight");
		$("[data-chapter='" + nextChapter + "']").find('h2').removeClass("disabled-text");
		$("[data-chapter='" + nextChapter + "']").find('h3').removeClass("disabled-text");
		$("[data-chapter='" + nextChapter + "']").find('h2').addClass("white-text");
		$("[data-chapter='" + nextChapter + "']").find('h3').addClass("white-text");

		// general
		$(".chapter").hide();
		$("." + nextChapter).show();
		$('body').animate({ scrollTop: 0 });

		// update navbar button text for responsive view
		var nextChapterText = $(".responsiveChapterUl").find("[data-chapter='" + nextChapter + "']").find("h2").text();
		$(".dropDownButton").text(nextChapterText);
	});

	// click on final steps button
	$(".final-chapter button").on("click", function() {
		$(".chapter").hide();

		// calculate the user's screen height
		var userHeight = $(window).height() - 30;
		$(".final").css("height", userHeight).show();
		$('body').animate({ scrollTop: 0 });
	});
});

