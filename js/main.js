
$('.js-nav-toggle').on('click', function(e){
	toggleNav(e);
});

$('body').on('click', '.page-show-nav', function(e){
	if($(e.target).closest('.page-nav').length == 0) toggleNav(e); // clicked outside .page-nav
});

function toggleNav(e){
	$('.page').toggleClass('page-show-nav');
	e.preventDefault();
	e.stopPropagation();
}


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
