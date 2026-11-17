// 1. 점수를 저장할 변수 score선언
//let score = 0;

// 2. 현재 점수에 10점을 올리는 addTenPoints()함수 정의
// function addTenPoints() {
//	score = score + 10;
//	console.log("현재 점수: " + score);
//}

// 3. 실제 addTenPoints()함수 두버 실행
//addTenPoints();
//addTenPoints();


let coins = 4;
coins = coins + 3;
console.log(coins);

// index2.html에서 id=startButton인 태그를 찾아라.
const startButton = document.querySelector("#startButton");
const endButton = document.querySelector(".endButton");


// startButton을 누르면 자동으로 실행됩니다.
// 이벤트핸들러 또는 이벤트처리함수
function startGame(){
	// 메세지창을 화면에 띄웁니다. 그 창을 닫아야 다른 작업이 가능
	// modal 대화창
	alert("게임을 시작합니다!");
}

function endGame(){
	alert("게임을 종료합니다!");
}

function copy(){
	message.textContent = greeting.value;
	alert("인사말: " + message.textContent);
}
// 이벤트를 감시하는 감시대행ㅇ르 등록하면 됩니다.
// 모든 이벤트 감시는 무리 그래서 하나만 감시합니다.
// startButton이 마우스로 눌렸는지만, 누르면 startGame()자동실행
// 태그명.addEventListener("이벤트명", 이벤트핸들러)
startButton.addEventListener("click", startGame);
endButton.addEventListener("click", endGame);
copyButton.addEventListener("click", copy);



const greeting = document.querySelector("#greeting");
const message = document.querySelector("#message");


//-----------------------------------------------
let score = 0;

const scoreElement = document.querySelector("#score");
const clickButton = document.querySelector("#clickButton");
const resetButton = document.querySelector("#resetButton");
const messageElement = document.querySelector("#message");

function addScore(){
	score = score + 1;
	scoreElement.textContent = score;
	messageElement.textContent = "좋아요! 한 점을 얻었습니다.";
}

function resetGame(){
	score = 0;
	scoreElement.textContent = score;
	messageElement.textContent = "점수가 초기화되었습니다.";
}

clickButton.addEventListener("click", addScore);
resetButton.addEventListener("click", resetGame);




