$(function () {
  //전역 함수
  let stop;
  let i;
  let s;
  start();
  function start() {
    $(".txt").addClass("active");
    stop = setInterval(function () {
      $(".panel").animate({ "margin-left": "-100vw" }, 1000, function () {
        $(".txt").addClass("active");
        $(".panel li:nth-child(1)").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
      $(".txt").removeClass("active");
    }, 5000);
  }

  //next
  $(".next").on("click", function () {
    $(".txt").removeClass("active");

    clearInterval(stop);
    $(".panel").animate({ "margin-left": "-100vw" }, function () {
      $(".txt").addClass("active");
      $(".panel li:nth-child(1)").appendTo(".panel");
      $(".panel").css({ "margin-left": "0px" });
    });
    start();
  });

  //prev
  $(".prev").on("click", function () {
    $(".txt").removeClass("active");

    clearInterval(stop);
    $(".panel li:last-child").prependTo(".panel"); //마지막 li를 맨 앞으로 보냄
    $(".panel").css({ "margin-left": "-100vw" }); //ul.panel을 x축으로
    // -100vw만큼 이동(애니메이션 효과를 위함)
    $(".txt").addClass("active");
    $(".panel").animate({ "margin-left": "0" }); //ul을 X축 0의 위치로 이동
    start();
  });
});
