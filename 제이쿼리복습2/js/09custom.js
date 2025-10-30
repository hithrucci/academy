$(function () {
  $(".menuTitle>li>a").on("mouseenter", function () {
    $(".headWrap h1:first-child").fadeIn(200);
    $(".headWrap h1:nth-child(2)").fadeOut(200);
    $(".subMenu").fadeIn(100);
    $(".headWrap")
      .stop()
      .animate({ "background-color": "#fff", color: "#444" }, 200);
    $(".headRight li:nth-child(3)")
      .stop()
      .animate({ "border-color": "#ccc" }, 200);
    $(".headBg").stop().slideDown(200);
    $(".headWrap").addClass("active");
    $(".headBanner").fadeIn(200);
  });
  $("header").on("mouseleave", function () {
    $(".headWrap h1:first-child").fadeOut(100);
    $(".headWrap h1:nth-child(2)").fadeIn(100);
    $(".subMenu").fadeOut(200);
    $(".headWrap")
      .stop()
      .animate({ "background-color": "transparent", color: "#fff" });
    $(".headBg").stop().slideUp(200);
    $(".headRight li:nth-child(3)").stop().animate({ "border-color": "#fff" });
    $(".headWrap").removeClass("active");
    $(".headBanner").fadeOut(200);
  });
  $(".headRight li:nth-child(3)").on("mouseenter", function () {
    $(this).addClass("red");
  });
  $(".headRight li:nth-child(3)").on("mouseleave", function () {
    $(this).removeClass("red");
  });
});
