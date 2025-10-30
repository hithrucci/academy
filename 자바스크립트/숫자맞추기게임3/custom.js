//요소가져오기
let result = document.querySelector("#result"),
  chance = document.querySelector("#chance"),
  user = document.querySelector("#user"),
  playBtn = document.querySelector("#play"),
  resetBtn = document.querySelector("#reset"),
  imgBox = document.querySelector("img");
let chances = 5;

//random수
let computerNum;
function randomNum() {
  computerNum = Math.floor(Math.random() * 100 + 1);
}
randomNum();
function play() {
  let userNum = user.value;
  console.log(userNum);
  console.log(computerNum);
  if (userNum < 1 || userNum > 100) {
    result.textContent = "1부터 100까지의 수를 입력해 주세요.";
    return;
  }
  if (computerNum > userNum) {
    result.textContent = "UP";
    imgBox.src = "img/up.png";
  } else if (computerNum < userNum) {
    result.textContent = "DOWN";
    imgBox.src = "img/down.png";
  } else if (computerNum == userNum) {
    result.textContent = "BINGO";
    imgBox.src = "img/bingo.png";
    playBtn.disabled = true;
  } else {
    alert("잘못입력하셨습니다.");
  }
  chances--;
  chance.textContent = `남은찬스 : ${chances}번`;
  if (chances < 1) {
    playBtn.disabled = true;
    chance.textContent = "GAMEOVER";
    imgBox.src = "img/gameover.png";
  }
}

user.addEventListener("focus", () => {
  user.value = "";
  user.placeholder = "";
});
user.addEventListener("blur", () => {
  user.placeholder = "1부터 100까지의 수를 입력";
});

//초기화
resetBtn.addEventListener("click", reset);
function reset() {
  result.textContent = "up/down/bingo";
  imgBox.src = "img/main1.png";
  chances = 5;
  chance.textContent = `남은찬스 : ${chances}번`;
  playBtn.disabled = false;
  randomNum();
  user.value = "";
}
playBtn.addEventListener("click", play);
//play()는 자동으로 함수를 호출
//클릭했을때 함수를 호출하려면 ()를 제거
