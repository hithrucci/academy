$(function () {
  $(".btn").on("mouseenter", function () {
    $(".menu").stop().css({ opacity: "1" });
    $(".menu").css({ transform: "translateY(0px)", transition: "0.5s" });
  });
  $(".btn").on("mouseleave", function () {
    $(".menu").css({ opacity: "0" });
    $(".menu").css({ transform: "translateY(20px)", transition: "0.5s" });
  });
});
