let large = document.querySelectorAll(".large li");
let small = document.querySelectorAll(".small li");

//small의 하나씩 받은 변수 item, 순번 index
small.forEach((item, index) => {
  item.addEventListener("mouseenter", () => {
    //item전체에 remove
    small.forEach((item) => {
      item.classList.remove("on");
    });
    //선택된 item에 add
    item.classList.add("on");
    //large의 하나씩 받은 변수 largeItem
    large.forEach((largeItem) => {
      //largeItem전체에 display none
      largeItem.style.display = "none";
    });
    //index번째 large에만 display block
    large[index].style.display = "block";
  });
});
