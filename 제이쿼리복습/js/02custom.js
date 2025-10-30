// $(function () {
//   //
//   $(".small li").on("click", function () {
//     i = $(this).index();
//     $(".small li").css({ opacity: ".5" });
//     $(this).css({ opacity: "1" });
//     $(".wrap li").css({ border: "none" });
//     $(".wrap li").eq(i).css({ border: "2px solid red" });
//     //
//   });
// });

$(function () {
  $(".small li").on("click", function () {
    //small li 선택자를 클릭하면
    i = $(this).index(); //현재 클릭한 samll li에 순번 적용
    console.log(i); //개발자 모드 console에서 순번 확인 가능
    $(".small li").css({ opacity: "0.5" }); //small li 전체 opacity 0.5로 css적용
    $(this).css({ opacity: "1" }); //현재 클릭한 small li의 opacity 1로 css 적용
    $(".wrap li").css({ border: "none" }); //wrap li 전체의 border를 없앰
    $(".wrap li").eq(i).css({ border: "2px solid red" }); //small li의 순번과 동일한 순번의 wrap li 의 border를 2px solid red로 css 적용
  });
});
