$(".our_slider").slick({
  infinite: true,
  slidesToShow: 3,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    "<button type='button' class='slick-prev'><i class='fa-solid fa-caret-left' style='color: #b58a4c;'></i></button>", // 이전 화살표 모양 설정
  nextArrow:
    "<button type='button' class='slick-next'><i class='fa-solid fa-caret-right' style='color: #b58a4c;'></i></button>",
  centerMode: true,
  responsive: [
    {
      breakpoint: 1020,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
      },
    },
  ],
});
$(".review_slider").slick({
  infinite: true,
  slidesToShow: 1,
  slidesToScroll: 1,
  arrows: true,
  prevArrow:
    "<button type='button' class='review-prev'><i class='fa-solid fa-caret-left' style='color: #A5A5A5;'></i></button>", // 이전 화살표 모양 설정
  nextArrow:
    "<button type='button' class='review-next'><i class='fa-solid fa-caret-right' style='color: #A5A5A5;'></i></button>",
});
