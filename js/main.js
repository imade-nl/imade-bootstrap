
$('.js-toggle').on('click', function(e){
	$(this).toggleClass('open');
	var target = $(this).data('toggle');
	$(target).slideToggle(150);
	e.preventDefault();
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


/* animated scroll */
$(".js-scrollto").click(function(e){
	e.preventDefault();
	$('html,body').animate({scrollTop:$(this.hash).offset().top}, 500);
});

/* show scroll to top */
$(window).scroll(function() {
	var scrollTop = $(window).scrollTop();
	var btn_top = $('.btn-scrolltop');

	if(scrollTop > 100) {
		btn_top.addClass('btn-scrolltop-show');
	}else{
		btn_top.removeClass('btn-scrolltop-show');
	}
});

/*

$('input, textarea').placeholder();

if( $('#search_field').length ){
	 $("#search_result").highlight( $('#search_field').val() );
}


// NU GEBRUIKEN MET ATTIRBUTE "REL"
function setSameHeight()
{
	var elms = {};

	$('.js-sameheight')
		.css('min-height', '0px')
		.each(function(){
			var rel = $(this).attr('rel');
			var elHeight = $(this).outerHeight(false);
			if( elHeight > elms[rel] || elms[rel] == undefined ) elms[rel] = elHeight;
		});

	if( $(window).width() >= 480 )
	{
		$.each(elms, function( index, value ) {
			// console.log( index + ": " + value );
			$( ".js-sameheight[rel='" + index + "']" ).css('min-height', value + 'px');
		});
	}
}

$(window).on('resize', function(){ setSameHeight(); });
setSameHeight();


*/
