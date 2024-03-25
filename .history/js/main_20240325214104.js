// menu

document.addEventListener("DOMContentLoaded", function() {
  // 현재 페이지의 URL을 가져옵니다.
  var currentPageUrl = window.location.pathname;

  // 모든 메뉴 항목에 대해 반복합니다.
  var menuItems = document.querySelectorAll('.nav_item a'); // 'nav_item' 클래스를 가진 nav 안의 모든 a 태그를 선택
  menuItems.forEach(function(item) {
      if (item.getAttribute('href') === currentPageUrl) {
          // 현재 페이지와 메뉴 항목의 href가 일치하면 'active' 클래스를 추가합니다.
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



