$(function () {
  $(".plus li").on("click", function () {
    $(".plus li").removeClass("active");
    $(this).addClass("active");
  });
});
