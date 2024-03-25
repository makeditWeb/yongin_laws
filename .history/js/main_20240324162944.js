// main 바로가기 슬라이드

$('.dash_board_slide').slick({
    dots: false,
    arrows: true,
    infinite: true,
    speed: 300,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,

    prevArrow: '<button class="slide-arrow slick-prev"><img src="../img/left_img.png"></button>',
    nextArrow: '<button class="slide-arrow slick-next"><img src="../img/rignt-img.png"></button>'
});



// tab
$(document).ready(function(){
	
	$('ul.tabs li').click(function(){
		var tab_id = $(this).attr('data-tab');

		$('ul.tabs li').removeClass('current');
		$('.tab-content').removeClass('current');

		$(this).addClass('current');
		$("#"+tab_id).addClass('current');
	})

})