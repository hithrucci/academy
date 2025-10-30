$(function () {
  $(".left li").on("click", function () {
    let i = $(this).index();
    $(".left li").removeClass("on");
    $(".left li").eq(i).addClass("on");
    // $(".right section").removeClass("on");
    // $(".right section").eq(i).addClass("on");
    $(".right section").fadeOut();
    $(".right section").eq(i).fadeIn();

    $(".flower li").removeClass("on");
    $(".flower li").eq(i).addClass("on");
  });
});
