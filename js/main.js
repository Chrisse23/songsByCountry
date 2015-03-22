$(document).ready(function () {
	$('.menu').on('click', function () {
		$('.overlay').css('display', 'block');
		$('.overlay').css('opacity', '1');
	});

	$('.close').on('click', function () {
		$('.overlay').css('display', 'none');
	});

	var circle = $('.circle');

	$(window).scroll(function () {
		var circlePos = circle.offset().top;

		if (circlePos < 600) {
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
});
