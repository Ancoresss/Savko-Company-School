$(document).ready(function() {
	//nav-menu script 
	$('.nav-menu_icon').on('click', function(event) {
		event.preventDefault();
		$('.nav-items').toggleClass('nav-items_active');
	});
	//left-sidebar script
	$('.sidebar-adapt').on('click', function() {
		$('.left-sidebar').toggleClass('left-sidebar_active');
	});
});