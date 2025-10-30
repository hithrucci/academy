let result = document.querySelector("#result");
let user = document.querySelector("#user");
let play = document.querySelector("#play");
let newGame = document.querySelector("#new");
let tryCount = document.querySelector(".try");
//함수 안에서 변수를 만들면 지역변수가 되므로

let computerNum;
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}
randomNum();
// document.write(`정답:${computerNum}`);
count = 0;
play.addEventListener("click", (e) => {
  e.preventDefault(); //form 요소의 자동 새로고침 방지 //클릭할때마다 함수호출

  count++;
  tryCount.textContent = count;

  if (count == 5) {
    play.disabled = true;
  }

  let userNum = user.value;
  console.log(`user:${userNum}`);
  console.log(`com:${computerNum}`);
  if (userNum == computerNum) {
    // console.log("BINGO");
    result.textContent = "BINGO";
  } else if (userNum > computerNum) {
    // console.log("DOWN");
    result.textContent = "DOWN";
  } else if (userNum < computerNum) {
    // console.log("UP");
    result.textContent = "UP";
  } else {
    // console.log("잘못입력하셨습니다.");
    alert("잘못입력하셨습니다.");
  }
});
user.addEventListener("focus", () => {
  user.value = "";
  user.placeholder = "";
});
user.addEventListener("blur", () => {
  user.placeholder = "1부터 100까지의 수를 입력";
});

newGame.addEventListener("click", () => {
  randomNum();
});
