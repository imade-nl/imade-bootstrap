
$('.nav-primary').on('click', 'a', function(e){
	var a = $(this);
	var open = $(e.toElement).hasClass('open'); // click on icon to slideUp

	if( a.next().length && !open )
	{
		a.toggleClass('open').next().slideToggle(150);
		e.preventDefault();
	}
});


$('.js-toggle').on('click', function(e){
	$(this).toggleClass('open');
	var target = $(this).data('toggle');
	$(target).slideToggle(150);
	e.preventDefault();
});


$(".js-slider").owlCarousel({

	navigation : false, // Show next and prev buttons
	// navigationText: ['<i class="i-angle-left"></i>', '<i class="i-angle-right"></i>'],
	slideSpeed : 300,
	paginationSpeed : 400,
	singleItem: true

	// "singleItem:true" is a shortcut for:
	// items : 1,
	// itemsDesktop : false,
	// itemsDesktopSmall : false,
	// itemsTablet: false,
	// itemsMobile : false

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
