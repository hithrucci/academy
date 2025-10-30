// set();
// function set() {
//   let win = $(window).height(); //화면의 높이.
//   let tab = $("#container").offset().top;
//   let con = win - tab;
//   console.log(con);
//   $("#container").css({ height: `${con}px` });
// }
// $(window).on("resize", function () {
//   //resize::화면의 크기가 변할 때 마다
//   set(); //높이값을 재할당(set함수 불러오기)
// });
// $(".tab li").on("click", function () {
//   let i = $(this).index();
//   $(".tab li").removeClass("on");
//   $(".tab li").eq(i).addClass("on");
//   $("#visual section").removeClass("on");
//   $("#visual section").eq(i).addClass("on");
//   $("#container section").removeClass("on");
//   $("#container section").eq(i).addClass("on");
// });

let menu = document.querySelectorAll(".tab li");
let con = document.querySelectorAll("#container section");
let vis = document.querySelectorAll("#visual section");
menu.forEach((item, index) => {
  item.addEventListener("click", () => {
    menu.forEach((item) => {
      item.classList.remove("on");
    });
    menu[index].classList.add("on");

    vis.forEach((visSec) => {
      visSec.classList.remove("on");
    });
    vis[index].classList.add("on");

    con.forEach((ctn) => {
      ctn.classList.remove("on");
    });
    con[index].classList.add("on");
  });
});
