$(function(){

		var slide_img = jQuery.makeArray($('.slider-img').children('img'));
		var button = jQuery.makeArray($('.slider-button').children('a'));
		
		$(".slider-img").empty();
		$('.slider').prepend('<div class="loader"><img src="js/loader.gif"/></div>');
		var images=[];
		
		for(var i=0; i<slide_img.length;i++){
			images[i]=$(slide_img[i]).attr('src');
		}
		
		$.preload(images, 1, function(last){
		
		for(var i=0;i<this.length;i++){
		
			$(".slider-img").append('<img style="display:none;" src="'+this[i]+'" alt=""/>');
		}
		if (last){
				$('.loader').hide();
				$(".slider-img").children('img').first().show();
				var static_url = $(".slider-img").children('img').attr("src");
				$(".slider-button").children("a").hover(function(){
					$(".slider-img").children('img').first().hide();
					$(".slider-img").children('img').first().attr("src",$(this).attr("alt")).fadeIn(300);
				},function(){
					$(".slider-img").children('img').first().hide();
					$(".slider-img").children('img').first().attr("src",static_url).fadeIn(300);
				})
				
			}
		});
});



