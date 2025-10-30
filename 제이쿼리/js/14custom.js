$(function () {
  $(".menu li").on("click", function () {
    let i = $(this).index();
    console.log(i);
    $(".menu li").removeClass("on").addClass("off");
    $(this).removeClass("off").addClass("on");
    $(".pic li").hide();
    $(".pic li").eq(i).show();
  });
});

// $(function () {
//   $(".menu li").on("click", function () {
//     i = $(this).index();
//     console.log(i);
//     $(".menu li").css({ "background-color": "#eee", color: "black" });
//     $(this).css({ "background-color": "#777", color: "#fff" });
//     $(".pic li").hide();
//     $(".pic li").eq(i).show();
//   });
// });
