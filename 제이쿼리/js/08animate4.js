$(function () {
  $(".bg").on("mouseenter", function () {
    $(this).addClass("on");
    $(".bg i").css({ opacity: "1" });
  });
});
$(function () {
  $(".bg").on("mouseleave", function () {
    $(this).removeClass("on");
    $(".bg i").css({ opacity: "0" });
  });
});
