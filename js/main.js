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
		circle.stop().animate({
			'top': circle.scrollTop()
		}, 100);
	});

	$('.circle').click(function () {
		$('body, html').animate({
			scrollTop: $('body, html').offset().top
		}, 500);
	});
});
