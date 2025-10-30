$(function () {
  $(".title").on("click", function () {
    $(".inquiry").toggleClass("up");
    $(".title>span").toggle();

    if ($(".inquiry").hasClass("up")) {
      $(".chev").stop().animate({ transform: "rotate(180deg)" });
    } else {
      $(".chev").stop().animate({ transform: "rotate(0deg)" });
    }
  });
});
