// $(function(){
//     window.prettyPrint && prettyPrint();
// }(window.jQuery));

$(document).ready(function() {

	$(function(){
		$(window).scroll(function(event) {
			/* Act on the event */
			var x = $(window).scrollTop();
			if (x >= 30){
				$('#nav').addClass('scrolled scroll-delay');
			}else {
				$('#nav').removeClass('scrolled scroll-delay');
			}
			var y = $('.info-slide1').offset().top; y = y - 350;		
			var z = $('.info-slide2').offset().top; z = z - 500;
			var e = $('.info-slide3').offset().top; e = e - 350;
			var d = $('.info-slide3').offset().top; d = d - 150;
			var f = $('.products').offset().top; f = f - 350;
			console.log(y);
			if (x >= y){
				$('.info-slide1 .slide-left').addClass('fadeInLeft animated');
				$('.info-slide1 .info-text').addClass('fadeInRight animated');
			}
			if (x >= z){
				$('.info-slide2 .info-text').addClass('fadeInLeft animated');
				$('.info-slide2 .slide-right').addClass('fadeInRight animated');
				
			}
			if (x >= e){
				$('.info-slide3 .slide-left').addClass('fadeInLeft animated');
				$('.info-slide3 .info-text').addClass('fadeInRight animated');
			}
			if ( x >= d )
			{
				$('.info-slide4 .info-text').addClass('fadeInLeft animated');
				$('.info-slide4 .slide-right').addClass('fadeInRight animated');
				
			}
			if ( x >= f )
			{
				$('.product').addClass('bounceInUp animated');
				
			}

			

		});

	})

	// Scroll
	
	
	/* scroll body */
	
	$(function() {
		$('#toggle-widget .features-content').hide();
		$('#toggle-widget h3:first').addClass('active').next().slideDown('slow');
		$('#toggle-widget h3').click(function() {
			$(this).toggleClass('active');
			if($(this).next().is(':hidden')) {
				$('#toggle-widget h3').removeClass('active').next().slideUp('slow');
				$(this).toggleClass('active').next().slideDown('fast');
			}
		});
	})

	$(function(){
		$('#list-lang-content').hide();
		$('#lang-list').click(function(event) {
			/* Act on the event */
			$('#list-lang-content').slideToggle(400);
		});
	})
});