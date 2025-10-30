$(function () {
  $(".menu li").on("click", function () {
    i = $(this).index();
    $(".pic li").hide();
    $(".pic li").eq(i).show();
    $(".menu li").removeClass("on");
    $(this).addClass("on");
    $(this).css({ "border-color": "#fff" });
  });
});
