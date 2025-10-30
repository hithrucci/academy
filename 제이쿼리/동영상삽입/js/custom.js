$(function () {
  $(".right li").on("mouseenter", function () {
    vid = $(this).find("video").get(0);
    vid.currentTime = 0; //비디오 0번 트랙
    vid.play(); //비디오 재생

    $(this)
      .stop()
      .animate({ width: "35%" }, function () {
        $(this).find("video").animate({ opacity: "0.8" });
      });

    $(this).find("h3").stop().animate({ opacity: "1" });
    $(this).find("p").stop().animate({ opacity: "1" });
  });
  $(".right li").on("mouseleave", function () {
    vid.pause(); //비디오 일시정지
    $(this).stop().animate({ width: "15%" });
    $(this).find("video").animate({ opacity: "0" });
    $(".right li").find("h3").stop().animate({ opacity: "0" });
    $(".right li").find("p").stop().animate({ opacity: "0" });
  });
});
