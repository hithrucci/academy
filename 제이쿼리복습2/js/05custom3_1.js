$(function () {
  $(".plus li").on("click", function () {
    const i = $(this).index();
    // console.log(i);
    $(this).closest(".plus").find("li").removeClass("active");
    $(this).addClass("active");

    const parentIndex = $(this).closest(".large>li").index();
    // console.log(parentIndex);
    $(".small ul").eq(parentIndex).find("li").removeClass("on");
    $(".small ul").eq(parentIndex).find("li").eq(i).addClass("on");
  });
});
