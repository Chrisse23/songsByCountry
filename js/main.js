$(document).ready(function () {
	$('.menu').on('click', function () {
		$('.overlay').css('display', 'block');
		$('.overlay').css('opacity', '1');
	});

	$('.close').on('click', function () {
		$('.overlay').css('display', 'none');
	});

	$('.circle').click(function () {
		$('body, html').animate({
			scrollTop: $('body, html').offset().top
		}, 500);
	});
});
