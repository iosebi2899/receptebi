export const initializeSlick = (className) => {
  $(document).ready(function () {
    $(`.${className}`).slick({
      centerMode: true,
      autoplay: true,
      autoplaySpeed: 2000,
      centerPadding: "120px",
      slidesToShow: 3,
      responsive: [
        {
          breakpoint: 768,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 3,
          },
        },
        {
          breakpoint: 480,
          settings: {
            arrows: false,
            centerMode: true,
            centerPadding: "40px",
            slidesToShow: 1,
          },
        },
      ],
    });
  });
};
