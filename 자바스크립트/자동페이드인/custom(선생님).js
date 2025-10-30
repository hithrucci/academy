//요소 가지고오기
let slides = document.querySelectorAll(".fade li");
let naviBtn = document.querySelectorAll(".navi li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let total = slides.length;
let current = 0;
let stop;

function slide() {
  stop = setInterval(nextSlide, 2000);
}

slide();

function nextSlide() {
  //   console.log("자동");
  //   console.log(total);

  current++;
  if (current == total) {
    current = 0;
  }

  //fade움직임
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[current].classList.add("active");
  });

  //navi움직임
  naviBtn.forEach((btn) => {
    btn.classList.remove("on");
    naviBtn[current].classList.add("on");
  });
}

//next버튼 클릭
next.addEventListener("click", () => {
  clearInterval(stop);
  nextSlide();
  slide();
});

//prev버튼 클릭
prev.addEventListener("click", () => {
  clearInterval(stop);
  prevSlide();
  slide();
});

//이전으로 갈 수 있는 함수
function prevSlide() {
  current--;
  if (current < 0) {
    current = total - 1;
  }

  //fade움직임
  slides.forEach((slide) => {
    slide.classList.remove("active");
    slides[current].classList.add("active");
  });

  //navi움직임
  naviBtn.forEach((btn) => {
    btn.classList.remove("on");
    naviBtn[current].classList.add("on");
  });
}

//navi를 클릭했을때
naviBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    clearInterval(stop);
    naviSlide(index);
    slide();
  });
});

function naviSlide(index) {
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[index].classList.add("active");

  naviBtn.forEach((btn) => {
    btn.classList.remove("on");
    naviBtn[index].classList.add("on");
  });
}
