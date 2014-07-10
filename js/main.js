
$('.js-toggle').on('click', function(e){
	var target = $(this).attr('data-target');
	if ( $(window).width() < 768 ) $(target).slideToggle(200);
	if( $(this).attr('href') == "#" ) e.preventDefault();
});

$('.flexslider').flexslider({
	controlNav: true,
	directionNav: false,
	slideshowSpeed: 3000,
	animationSpeed: 800
});

$('.js-popup').magnificPopup({
	type:'image',
	disableOn:768,
	gallery:{enabled:true}
}).on('click', function(e){
	e.preventDefault();
});

$(".js-clickblock").clickblock();

$('a[rel="external"], a.blank').click( function(e) {
	window.open( $(this).attr('href') );
	e.preventDefault();
});

/*

$('input, textarea').placeholder();

if( $('#search_field').length ){
	 $("#search_result").highlight( $('#search_field').val() );
}

$('a[href^="http://"]').attr("target", "_blank");

$('#nav li').has('ul').hover(
	function () {
		$(this).find("ul").stop(true, true).fadeIn(300);
	}, function(){
		$(this).find('ul').stop(true, true).fadeOut(800);
	}
).find('ul').css('display', 'none');

*/

/*
	Google Analytics: change UA-XXXXX-X to be your site's ID.
var _gaq=[['_setAccount','UA-XXXXX-X'],['_trackPageview']];
(function(d,t){var g=d.createElement(t),s=d.getElementsByTagName(t)[0];
g.src=('https:'==location.protocol?'//ssl':'//www')+'.google-analytics.com/ga.js';
s.parentNode.insertBefore(g,s)}(document,'script'));
*/