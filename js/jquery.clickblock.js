(function($){
    $.fn.extend({
        //plugin name - animatemenu
        clickblock: function(options) {
 
            //Settings list and the default values
            var defaults = {
				title: true
            };
             
            var options = $.extend(defaults, options);
         
            return this.each(function() {
                var obj = $(this);
				var a = obj.find("a").filter(":first");
				
				if(a.length == 0)
				{
					return;
				}
				
				if(options.title)
				{
					var title = a.text();
					obj.attr('title', title);
				}
				
				obj.click(function(e){
					window.location = a.attr('href');
				});
				
				obj.hover(function(){
					$(this).addClass('mouseover');
				},function(){
					$(this).removeClass('mouseover');
				}); 
				
            });
        }
    });
})(jQuery);