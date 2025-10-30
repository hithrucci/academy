$(function () {
  $(".small li").on("click", function () {
    i = $(this).index();
    console.log(i);
    $(".small li").css({ opacity: ".5", "border-color": "transparent" });
    $(this).css({ opacity: "1", "border-color": "red" });
    $(".wrap li").hide();
    $(".wrap li").eq(i).show();
  });
});
