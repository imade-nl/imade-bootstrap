
$('.nav-toggle').on('click', function(){
	var target = $(this).attr('data-target');
	$(target).slideToggle();
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
});

$(".js-clickblock").clickblock();

$('a[rel="external"], a.blank').click( function(e) {
	window.open( $(this).attr('href') );
	e.preventDefault();
});

/*

$("#content").highlight( $('#input_search').val() );

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