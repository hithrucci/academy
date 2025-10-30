$(function () {
  $("header li").on("click", function () {
    $("header li").removeClass("active");
    $(this).addClass("active");

    let i = $(this).index();

    let target = $("#container section").eq(i).offset().top;
    $("html").stop().animate({ scrollTop: target });
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });
  let page2 = $("section.page2").offset().top;
  $(window).on("scroll", function () {
    let sc2 = $(this).scrollTop();
    console.log(sc2);
    if (sc2 >= page2) {
      $("section.page2 li").addClass("active");
    }
  });
  let page3 = $("section.page3").offset().top;
  $(window).on("scroll", function () {
    let sc3 = $(this).scrollTop();
    console.log(sc3);
    if (sc3 >= page3) {
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
