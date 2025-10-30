$(function () {
  $("header li").on("click", function () {
    $("header li").removeClass("active");
    $(this).addClass("active");

    const i = $(this).index();

    const target = $("#container section").eq(i).offset().top;
    $("html").stop().animate({ scrollTop: target });
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });

  const page2 = $("section.page2").offset().top;
  $(window).on("scroll", function () {
    const sc2 = $(this).scrollTop();
    const pg = $("#navi li").index();
    // console.log(sc2);
    console.log(pg);
    if (sc2 >= page2) {
      $("section.page2 li").addClass("active");
    }
  });
  const page3 = $("section.page3").offset().top;
  $(window).on("scroll", function () {
    const sc3 = $(this).scrollTop();
    // console.log(sc3);
    if (sc3 >= page3) {
      $("section.page3 h3").addClass("active");
      $("section.page3 p").addClass("active");

      $("section.page3 li:first-child").animate({ opacity: "1" }, function () {
        $("section.page3 li:nth-child(2)").animate(
          { opacity: "1" },
          function () {
            $("section.page3 li:nth-child(3)").animate(
              { opacity: "1" },
              function () {
                $("section.page3 li:nth-child(4)").animate({ opacity: "1" });
              }
            );
          }
        );
      });
    }
  });
});
