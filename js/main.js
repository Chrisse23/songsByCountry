$(document).ready(function () {
	$('.menu').on('click', function () {
		$('.overlay').css('display', 'block');
		$('.overlay').css('opacity', '1');
	});

	$('.close').on('click', function () {
		$('.overlay').css('display', 'none');
	});

	var circle = $('.circle');

	var initCircle = function () {
		circle.stop().animate({
			'top': 500
		}, 100);
	}

	$(window).scroll(function () {
		circle.stop().animate({
			'top': 500
		}, 100);
	});

	$('.circle').click(function () {
		$('body, html').animate({
			scrollTop: $('body, html').offset().top
		}, 500);
	});
});
