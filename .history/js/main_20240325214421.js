// menu

document.addEventListener("DOMContentLoaded", function() {
  // 현재 페이지의 URL을 가져옵니다.
  var currentPageUrl = window.location.href;
  // 모든 메뉴 항목에 대한 참조를 가져옵니다.
  var menuItems = document.querySelectorAll('.nav_item a');
  // 각 메뉴 항목에 대해 반복합니다.
  menuItems.forEach(function(item) {
      // 만약 메뉴 항목의 href 속성이 현재 페이지 URL을 포함한다면,
      if(currentPageUrl.includes(item.getAttribute('href'))) {
          // 해당 메뉴 항목에 'active' 클래스를 추가합니다.
          item.classList.add('active');
      }
  });
});

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

    prevArrow: '<button class="slide-arrow slick-prev"><img src="./img/left_img.png"></button>',
    nextArrow: '<button class="slide-arrow slick-next"><img src="./img/rignt-img.png"></button>'
});



