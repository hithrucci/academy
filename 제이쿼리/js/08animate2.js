$(function () {
  $(".btn").on("click", function () {
    $(this).toggleClass("yellow");
    $("body").toggleClass("on");
  });
});
