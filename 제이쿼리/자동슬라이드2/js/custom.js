$(function () {
  //전역 함수
  let stop;
  start();
  function start() {
    stop = setInterval(function () {
      $(".panel").animate({ "margin-left": "-100vw" }, 1000, function () {
        $(".panel li:nth-child(1)").appendTo(".panel");
        $(".panel").css({ "margin-left": "0px" });
      });
    }, 2000);
  }

  //next
  $(".next").on("click", function () {
    clearInterval(stop);
    $(".panel").animate({ "margin-left": "-100vw" }, function () {
      $(".panel li:nth-child(1)").appendTo(".panel");
      $(".panel").css({ "margin-left": "0px" });
    });
    start();
  });

  //prev
  $(".prev").on("click", function () {
    clearInterval(stop);
    $(".panel li:last-child").prependTo(".panel"); //마지막 li를 맨 앞으로 보냄
    $(".panel").css({ "margin-left": "-100vw" }); //ul.panel을 x축으로 -100vw만큼 이동(애니메이션 효과를 위함)
    $(".panel").animate({ "margin-left": "0" }); //ul을 X축 0의 위치로 이동
    start();
  });
});
