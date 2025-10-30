$(function () {
  $(".gnb>li").on("mouseenter", function () {
    $(this).find("span").css({ color: "yellow" });
    $(this).find(".icons").css({ transform: "rotate(180deg)" });
    $(this).find(".subMenu").show();
  });
  $(".gnb>li").on("mouseleave", function () {
    $(this).find("span").css({ color: "#133e35" });
    $(this).find(".icons").css({ transform: "rotate(0deg)" });
    $(this).find(".subMenu").hide();
  });
  $(".subMenu>li").on("mouseenter", function () {
    $(this).css({ color: "orange" });
  });
  $(".subMenu2>li").on("mouseenter", function () {
    $(this).css({ color: "#133e35", "background-color": "#EBEAE5" });
  });
  $(".subMenu>li").on("mouseleave", function () {
    $(this).css({ color: "#133e35" });
  });
  $(".subMenu2>li").on("mouseleave", function () {
    $(".subMenu2>li").css({ "background-color": "#F4F4F1" });
  });
});
