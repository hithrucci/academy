$(function () {
  /*-------------------------------*/
  $("header li").on("mouseenter", function () {
    $("header li").removeClass("active");
    $(this).addClass("active");
  });
  $("header li").on("mouseleave", function () {
    // if (!$(this).hasClass("fixed")) {
    $(this).removeClass("active");
    // }
  });

  /*-------------------------*/
  $("header li").on("click", function () {
    // if ($(this).hasClass("fixed")) {
    //   $(this).removeClass("fixed active");
    // } else {
    //   $(this).addClass("fixed active");
    // }
    let i = $(this).index();
    // console.log(i);
    // let page1 = $("#container .page1").offset().top;
    // console.log(page1);
    // let page2 = $("#container .page2").offset().top;
    // console.log(page2);
    // let page3 = $("#container .page3").offset().top;
    // console.log(page3);
    // let page4 = $("#container .page4").offset().top;
    // console.log(page4);
    let target = $("#container section").eq(i).offset().top; //'target' 변수에 현재 클릭한 li의 순번과 동일한 순번의 container section의 offset-top 값을 대입.
    console.log(i, target);
    $("html").stop().animate({ scrollTop: target }); //scrollTop을 target값 만큼 움직이는 animate 실행(대상:문서 전체,html)
    $("#navi li").removeClass("on");
    $("#navi li").eq(i).addClass("on");
  });
});
