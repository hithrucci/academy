$(function () {
  $(".mag>i").on("click", function () {
    const i = $(this).index();
    console.log(i);
    $(".detail li").hide();
    $(".detail li").eq(i).show();
    $(".mag>i").css({ color: "#ccc" });
    $(".mag>i").css("active");
    $(this).addClass("active");
  });

  /*----more----*/
  $(".more").on("mouseenter", function () {
    $(this).addClass("active2");
    $(".more i").stop().animate({ transform: "rotate(90deg)" });
  });
  $(".more").on("mouseleave", function () {
    $(this).removeClass("active2");
    $(".more i").stop().animate({ transform: "rotate(0deg)" });
  });
});
