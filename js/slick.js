export const initializeSlick = (className) => {
  $(document).ready(function () {
    $(`.${className}`).slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerPadding: "120px",
      slidesToShow: 3,
      dots: true,
      responsive: [
        {
          breakpoint: 980,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 2,
          },
        },
        {
          breakpoint: 720,
          settings: {
            arrows: false,
            dots: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  });
};
