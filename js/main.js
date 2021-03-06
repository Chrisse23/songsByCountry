$(document).ready(function () {
	var circle = $('.circle');
	var circlePos = circle.offset().top;

	circle.click(function () {
		$('body, html').animate({
			scrollTop: $('body, html').offset().top
		}, 500);
		$('.overlay').css('display', 'none');
		$('body').css('overflow', 'auto');
		$('.image').css('display', 'block');
	});

	$('.overlayButton').on('click', function () {
		$('.overlay').css('display', 'block');
		$('body').css('overflow', 'hidden');
		$('.image').css('display', 'none');
		$('body, html').animate({
			scrollTop: $('.overlay').offset().top
		}, 500);
	});

	$(window).on('keydown', function(e) {
		if (e.which === 27) {
			$('.overlay').css('display', 'none');
			$('body').css('overflow', 'auto');
			$('.circle').css('display', 'block');
		}
	});

	$('.fa-times').on('click', function () {
		$('.overlay').css('display', 'none');
		$('body').css('overflow', 'auto');
		$('.circle').css('display', 'block');
	});
});
