$(document).ready(function() {
	var link = $('.service-link');
	var text = $('.service-text');
	var hint = $('.hint');
	var serviceHint = $('.service-hint');

	link.on('click', function() {
		$(this).next().slideToggle();
		$(this).toggleClass('service-link_active');
	});

	hint.mouseenter( function() { 
		serviceHint.addClass('service-hint_active');
	});
	hint.mouseleave( function() { 
		serviceHint.removeClass('service-hint_active');
	});
	text.hide();
});