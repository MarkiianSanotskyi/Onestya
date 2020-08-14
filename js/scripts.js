
/*placeholder*/
$(document).ready(function(){
        $.Placeholder.init({ color : "#3b3b3b" });
 });
 

 
  /*menu*/
$(".nav li").first().addClass('home');
 
 $(function() {
      $('#slides').superslides({
        hashchange: true,
        play: 100000
      });

      $('#slides').on('mouseenter', function() {
        $(this).superslides('stop');
        console.log('Stopped')
      });
      $('#slides').on('mouseleave', function() {
        $(this).superslides('start');
        console.log('Started')
      });
    });


$(document).ready(function(){
        var $menu = $("#top-box");
   $(window).scroll(function(){
            if ( $(this).scrollTop() > 10 && $menu.hasClass("default") ){
        $menu.removeClass("default").addClass("fixed");
            } else if($(this).scrollTop() <= 10 && $menu.hasClass("fixed")) {
                $menu.removeClass("fixed").addClass("default");
            }
        });//scroll
    });
	
$(document).ready(function(){
 new WOW().init();
 
 });
 	
