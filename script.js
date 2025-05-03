// script.js
let num1, num2;

function newQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === num1 + num2) {
    document.getElementById("result").textContent = "せいかい！すごいね！";
  } else {
    document.getElementById("result").textContent = `ざんねん！こたえは ${num1 + num2} だよ`;
  }
  setTimeout(newQuestion, 2000); // 2秒後に次の問題
}

// 初期表示
window.onload = newQuestion;
