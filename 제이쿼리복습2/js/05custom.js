$(function () {
  $(".menu li:nth-child(1)").on("mouseenter", function () {
    $(".lang").show();
  });

  $(".menu>li").on("mouseleave", function () {
    $(".lang").hide();
  });
  $(".lang li").on("mouseenter", function () {
    $(this).addClass("active");
  });
  $(".lang li").on("click", function () {
    $(this).addClass("active");
  });

  $(".lang li:nth-child(2)").on("mouseleave", function () {
    $(this).removeClass("active");
  });
});
