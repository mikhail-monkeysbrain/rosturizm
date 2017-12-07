$(function(){
	//поведение хедера при скролле
	$(window).scroll(function(){
		var navMain = $('.nav__main').css('top');
		var wTop = $(window).scrollTop()/7;
		//диапазон скролла маленький, поэтому поделил на 7 (скорость подобрал на глаз)
		$('.font__logo, .form-search').css('top', '-'+wTop+'px');
		$('.logo--image--item').css('width', 'calc(76px - '+wTop/4+'px');
		$('.nav__main').css('top', '-'+wTop+'px');
		$('.header').css('height', 'calc(148px - '+wTop+'px');
		if(wTop >= 70){
			$('.nav__main').css('top', '-75px');
		}
		if ($(window).width() < 768) {
			$('.dropdown-toggle').text('Меню')
			$('.nav--forms').css('top', '-'+wTop+'px');
			if(wTop >= 54){
				$('.nav--forms').css('top', '-54px');
			}
			$('header').css('height', 'auto')
			$('.nav__main li').each(function(){
				$('.complete').show();
				$('.navbar-nav li').last().appendTo('.dropdown-menu');
			});
		}
	});

	//поведение меню
	$(window).resize(function(){
		$(window).scrollTop(1);
		var winWidth 		= $(window).width();
			navMainWidth  	= $('.nav__main').width();
			if(winWidth - navMainWidth <= 350){
				$('.complete').show();
				$('.navbar-nav li').last().appendTo('.dropdown-menu');
			}
			if(winWidth - navMainWidth >= 500){
				$('.dropdown-menu li').last().appendTo('.navbar-nav');
			};
			//если dropdown пуст
			$('.dropdown-menu').each(function(){
				if($.trim($(this).text()) == "" ){
					$(this).parent('.complete').hide();
				}
			});
	});


}); 
$(function(){
		var navMain = $('.nav__main').css('top');
		var wTop = $(window).scrollTop()/7;
	if ($(window).width() < 768) {
			$(window).scrollTop(1);
			$('.dropdown-toggle').text('Меню')
			$('.nav--forms').css('top', '-'+wTop+'px');
			if(wTop >= 54){
				$('.nav--forms').css('top', '-54px');
			}
			$('header').css('height', 'auto')
			$('.nav__main li').each(function(){
				$('.complete').show();
				$('.navbar-nav li').last().appendTo('.dropdown-menu');
			});
		}
});