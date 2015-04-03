$(document).ready(function () {
	var circle = $('.circle');
	var circlePos = circle.offset().top;

	$(window).scroll(function () {
		var pos = $(this).scrollTop();
		
		if (pos === circlePos) {
			circle.css('display', 'none');
		} else {
			circle.css('display', 'block');
		}
	});

	circle.click(function () {
		$('body, html').animate({
			scrollTop: $('body, html').offset().top
		}, 500);
	});

	$('.overlayButton').on('click', function () {
		$('.overlay').css('display', 'block');
		$('body').css('overflow', 'hidden');
		$('body, html').animate({
			scrollTop: $('.overlay').offset().top
		}, 500);
		circle.css('display', 'none');
	});

	$(window).on('keydown', function(e) {
		if (e.which === 27) {
			$('.overlay').css('display', 'none');
			$('body').css('overflow', 'auto');
			circle.css('display', 'block');
		}
	});

	$('.fa-times').on('click', function () {
		$('.overlay').css('display', 'none');
		$('body').css('overflow', 'auto');
		circle.css('display', 'block');
	});
});
