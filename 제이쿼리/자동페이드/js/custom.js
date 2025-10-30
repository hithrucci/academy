// $(function () {
//   //   let total = 4; //총 갯수
//   let total = $(".pic li").length;
//   console.log(total);
//   let i = 0; //시작 순서
//   setInterval(function () {
//     if (i == total - 1) {
//       i = 0;
//     } else {
//       i++;
//     }

//     $(".pic li").stop().fadeOut();
//     $(".pic li").eq(i).stop().fadeIn();
//   }, 2000);
// });

// $(function () {
//   let total = $(".pic li").length;
//   let i = 0;
//   setInterval(function () {
//     if (i === total - 1) {
//       i = 0;
//     } else {
//       i++;
//     }
//     $(".pic li").fadeOut();
//     $(".pic li").eq(i).stop().fadeIn();
//   }, 2000);
// });

$(function () {
  let total = $(".pic li").length;
  let i = 0;
  setInterval(function () {
    if (i == total - 1) {
      i = 0;
    } else {
      i++;
    }
    $(".pic li").fadeOut();
    $(".pic li").eq(i).stop().fadeIn();
  }, 2000);
});
