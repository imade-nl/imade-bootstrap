
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



function setSameHeight()
{
	var minHeight = 0;

	$('.js-sameheight')
		.css('min-height', '0px')
		.each(function(){
			var elHeight = $(this).outerHeight(false);
			if( elHeight > minHeight ) minHeight = elHeight;
		});

	if( $(window).width() >= 480 ) $('.js-sameheight').css('min-height', minHeight + 'px');
}

$(window).on('resize', function(){ setSameHeight(); });
setSameHeight();


*/
