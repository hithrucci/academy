$(function () {
  $(".btn1").on("click", function () {
    $("div").show(500);
  });
  $(".btn2").on("click", function () {
    $("div").hide(500);
  });
  $(".btn3").on("click", function () {
    $("div").toggle(500);
  });
  $(".btn4").on("click", function () {
    $("div").slideUp(500);
  });
  $(".btn5").on("click", function () {
    $("div").slideDown(500);
  });
  $(".btn6").on("click", function () {
    $("div").slideToggle(500);
  });
  $(".btn7").on("click", function () {
    $("div").fadeIn(500);
  });
  $(".btn8").on("click", function () {
    $("div").fadeOut(500);
  });
  let clickCount = 0;
  $(".btn9").on("click", function () {
    clickCount++;
    if (clickCount === 1) {
      $("div").fadeTo(500, 0.2);
    } else if (clickCount === 2) {
      $("div").fadeTo(500, 0.5);
    } else if (clickCount === 3) {
      $("div").fadeTo(500, 1);
    } else {
      $("div").fadeTo(500, 0);
      clickCount = 0;
    }
  });
  $(".btn10").on("click", function () {
    $("div").fadeToggle(500);
  });
});
