$(function () {
  $(".top")
    .delay(500)
    .animate({ width: "100%" }, 1000, function () {
      $(".right").animate({ height: "100%" }, 1000, function () {
        $(".bottom").animate({ width: "100%" }, 1000, function () {
          $(".left").animate({ height: "100%" }, 1000, function () {
            $(".wrap").fadeOut(1000);
            $(".wrap").fadeIn(500);
          });
        });
      });
    });
});
