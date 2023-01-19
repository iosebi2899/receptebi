$(".burger-menu").click(function () {
  $(this).toggleClass("menu-on");
  $(".main-navigation").toggleClass("active");
});
$(".main-navigation li a").click(function () {
  $(".main-navigation").removeClass("active");
  $(".burger-menu").removeClass("menu-on");
});
