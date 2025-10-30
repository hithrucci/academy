$(function () {
  $(".popupCard").on("click", function () {
    $(".popupActive").stop().animate({ bottom: "200px" }, 300);
    $(".active_wrap").css({ opacity: "1" });
    $(this)
      .stop()
      .animate({ bottom: "-80px" }, 300, function () {
        $(this).hide();
      });
  });
  $(".title>i").on("click", function () {
    $(".popupActive")
      .stop()
      .animate({ bottom: "-500px" }, 300, function () {
        $(".active_wrap").css({ opacity: "0" });
      });
    $(".popupCard")
      .stop()
      .animate({ bottom: "0px" }, 300, function () {
        $(".popupCard").show();
      });
  });
  $(".login_btn").on("mouseenter", function () {
    $(this).find("i").show();
    $(this).stop().animate({ padding: "20px 30px" });
  });
  $(".login_btn").on("mouseleave", function () {
    $(this).find("i").hide();
    $(this).stop().animate({ padding: "20px 40px" });
  });
});
