$(function () {
  $("div").on("click", function () {
    $(this)
      .stop()
      .animate({ "background-color": "#000" }, function () {
        $(this).stop().animate({ "margin-left": "100px" });
      });
  });
});
