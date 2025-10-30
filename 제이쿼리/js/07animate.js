$(function () {
  //   $("div").on("click", function () {
  //     $(this).stop().animate({ width: "200px" });
  //     $(this).stop().animate({ height: "100px" });
  //   });
  $("div").on("click", function () {
    $(this)
      .stop()
      .animate({ "background-color": "#000" }, function () {
        $(this).stop().animate({ height: "100px" });
      });
  });
});
