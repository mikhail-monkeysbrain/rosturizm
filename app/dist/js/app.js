$(function(){
	$(window).scroll(function(){
		var navMain = $('.nav__main').css('top');
		var wTop = $(window).scrollTop()/7; //диапазон скролла маленький, поэтому поделил на 7 (скорость подобрал на глаз)
		$('.font__logo, .query__search:eq(0)').css('top', '-'+wTop+'px');
		$('.logo--image--item').css('width', 'calc(76px - '+wTop/4+'px');
		$('.nav__main').css('top', '-'+wTop+'px');
		$('.header').css('height', 'calc(148px - '+wTop+'px');
		if(wTop >= 70){
			$('.nav__main').css('top', '-75px');
		}
	});
}); 