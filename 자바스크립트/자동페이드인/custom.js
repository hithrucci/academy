//html요소 가져오기
let slides = document.querySelectorAll(".fade li");
let naviBtn = document.querySelectorAll(".navi li");
let prev = document.querySelector(".prev");
let next = document.querySelector(".next");
let naviBar = document.querySelector(".navi2 .innerBar");
//슬라이드 총 갯수
let total = slides.length;
//현재 순번 0
let current = 0;
let stop;
//클릭 후 대기하면 다시 setInterval 되기 위해 함수에 넣기.
function autoSlide() {
  //클릭하면 멈추기 위해 stop 변수에 넣기.
  stop = setInterval(nextSlide, 3000);
}

autoSlide();
//setInterval내에서 돌아갈 함수(nextSlid)
function nextSlide() {
  //현재 순번 1씩 증가
  current++;
  //순번이 다 돌았을 때
  if (current == total) {
    //순번 초기화
    current = 0;
  }
  //모든 슬라이드에 active 클래스 제거
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  //모든 btn에 on클래스 제거
  naviBtn.forEach((btn) => {
    btn.classList.remove("on");
  });
  //현재 순번의 슬라이드에만 active클래스 추가
  slides[current].classList.add("active");
  //현재 순번의 내비버튼에만 on클래스 추가
  naviBtn[current].classList.add("on");
  naviBar.style.width = (100 / 3) * (current + 1) + "%";
}

function prevSlide() {
  current--;
  if (current < 0) {
    current = total - 1;
  }
  slides.forEach((slide) => {
    slide.classList.remove("active");
  });
  slides[current].classList.add("active");
  naviBtn.forEach((btn) => {
    btn.classList.remove("on");
  });
  naviBtn[current].classList.add("on");
  naviBar.style.width = (100 / 3) * (current + 1) + "%";
}

next.addEventListener("click", () => {
  //클리어인터벌
  clearInterval(stop);
  //기존 함수 호출
  nextSlide();
  autoSlide();
});
prev.addEventListener("click", () => {
  clearInterval(stop);
  prevSlide();
  autoSlide();
});

naviBtn.forEach((btn, index) => {
  btn.addEventListener("click", () => {
    clearInterval(stop);
    slides.forEach((slide) => {
      slide.classList.remove("active");
    });
    slides[index].classList.add("active");
    naviBtn.forEach((btn) => {
      btn.classList.remove("on");
    });
    naviBtn[index].classList.add("on");
    autoSlide();
    naviBar.style.width = (100 / 3) * (index + 1) + "%";
  });
});
