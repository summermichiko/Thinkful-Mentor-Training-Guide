$(document).ready(function() {
	if (!$(".menu-li").hasClass("salmon-highlight")) {
		$(".menu-li").mouseover(function() {
			$(this).addClass("white-highlight");
		})
		$(".menu-li").mouseleave(function() {
			$(this).removeClass("white-highlight");
		})
	};	
	$(".menu-li").click(function() {
		$(".menu-li").removeClass("salmon-highlight");
		$(this).addClass("salmon-highlight");
	});
	$("#li-one").click(function() {
		$(".chapter1").show();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-two").click(function() {
		$(".chapter2").show();
		$(".chapter1").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-three").click(function() {
		$(".chapter3").show();
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-four").click(function() {
		$(".chapter4").show();
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter5").hide();
		$(".chapter6").hide();
	});
	$("#li-five").click(function() {
		$(".chapter5").show();
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter6").hide();
	});
	$("#li-six").click(function() {
		$(".chapter6").show();
		$(".chapter1").hide();
		$(".chapter2").hide();
		$(".chapter3").hide();
		$(".chapter4").hide();
		$(".chapter5").hide();
	});

	$(function(){
  		$('input[type="radio"]').click(function(){
    		if ($(".2").is(':checked')) {
      			$(this).closest(".comprehension-questions").addClass("correctAnswer");
    		};
    		if ($(".0").is(':checked')) {
    			$(this).closest(".comprehension-questions").addClass("wrongAnswer");
    		};
    		if ($(".1").is(':checked')) {
    			$(this).closest(".comprehension-questions").addClass("wrongAnswer");
    		};
    		if ($(".3").is(':checked')) {
    			$(this).closest(".comprehension-questions").addClass("wrongAnswer");
    		};
  		});
	});


    
	/*var currentChapter = 1;
	var numberCorrect = 0;*/

	/*var storedAnswers = [
		{
			chapter: ".chapter1",
			question1: "Thinkful's learning philosophy includes all of the following except:",
			answerOptions: ["Real learning is fundamentally human.", " Real learning requires a significant personal commitment and subsequently a supportive community.", " Real learning requires regular formative assessments.", " Real learning happens when education is relevant to students' interests and is project-based."],
			correct: 2,
			question2: "Thinkful is focused on:",
			answerOptions: ["High Test Scores.", "Student Success.", "Beautiful Videos.", "Teacher to Student Ratios."]
			correct: 1,
		},
		{
			chapter: ".chapter2",
			correct: 0,
			correct: 2,
		},
		{
			chapter: ".chapter3",
			correct: 1,
			correct: 0,
		},
		{
			chapter: ".chapter4",
			correct: 1,
			correct: 0,
		}, 
		{
			chapter: ".chapter5",
			correct: 1,
			correct:0,
		},
		{
			chapter: ".chapter6",
			correct: 2,
			correct: 0,
		}
	];*/

	/*function checkAnswer() {
		var answer = $('input[type="radio"]:checked').val();
		if (answer == storedAnswers[currentChapter].correct) {
			$(".comprehension-questions").addClass("correctAnswer");
		} else {
			$(".comprehension-questions").addClass("wrongAnswer");
		}
	}*/

	
});


