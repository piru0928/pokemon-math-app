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
  setTimeout(newQuestion, 1500); // 1.5秒後に次の問題
}

// ステータスの表示更新（たしざん：1〜5、1〜10）
function updateStatus() {
  const status5 = document.getElementById("status-addition-1to5");
  const status10 = document.getElementById("status-addition-1to10");

  if (status5 && localStorage.getItem("cleared-addition-1to5") === "true") {
    status5.textContent = "🌸";
  }
  if (status10 && localStorage.getItem("cleared-addition-1to10") === "true") {
    status10.textContent = "🌸";
  }
}

// 初期表示
window.onload = function () {
  newQuestion();
  updateStatus();
};
