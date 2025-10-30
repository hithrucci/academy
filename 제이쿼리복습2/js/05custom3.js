$(function () {
  $(".left").animate({ width: "50%" }, 1000, "easeInQuad");
  $(".right").animate({ width: "50%" }, 1000, "easeInQuad");
  $(".center").animate({ height: "50%" }, 1000, "easeInQuad");
  $("li").animate({ transform: "translateY(0)" }, 1000, "easeOutBounce");
});
