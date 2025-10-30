$(function () {
  //
  $(".btn01").on("click", function () {
    $("div").show();
  });
  $(".btn02").on("click", function () {
    $("div").hide();
  });
  $(".btn03").on("click", function () {
    $("div").toggle();
  });
  $(".btn04").on("click", function () {
    $("div").slideUp();
  });
  $(".btn05").on("click", function () {
    $("div").slideDown();
  });
  $(".btn06").on("click", function () {
    $("div").slideToggle();
  });
  $(".btn07").on("click", function () {
    $("div").fadeIn();
  });
  $(".btn08").on("click", function () {
    $("div").fadeOut();
  });
  $(".btn09").on("click", function () {
    $("div").fadeToggle();
  });

  let clickCount = 0;
  $(".btn10").on("click", function () {
    clickCount++;

    if (clickCount === 1) {
      $("div").fadeTo(800, 0.2);
    } else if (clickCount === 2) {
      $("div").fadeTo(800, 0.5);
    } else if (clickCount === 3) {
      $("div").fadeTo(800, 1);
      clickCount = 0;
    }
  });

  $(".btn11").on("click", function () {
    $("div").css({ display: "block" });
  });
  $(".btn12").on("click", function () {
    $("div").css({ opacity: "1" });
  });

  //
});

// $(function () {
//   let clickCount = 0;

//   $(".btn13").on("click", function () {
//     clickCount++;

//     if (clickCount === 1) {
//       $("div").fadeTo("fast", 0.2);
//     } else if (clickCount === 2) {
//       $("div").fadeTo("fast", 0.5);
//     } else if (clickCount === 3) {
//       $("div").fadeTo("fast", 1);
//       clickCount = 0;
//     }
//   });
// });
