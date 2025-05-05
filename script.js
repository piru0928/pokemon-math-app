let num1, num2;

// 問題を新しく出す関数（1〜10まで）
function newQuestion() {
  num1 = Math.floor(Math.random() * 10) + 1;
  num2 = Math.floor(Math.random() * 10) + 1;
  document.getElementById("question").textContent = `${num1} + ${num2} = ?`;
  document.getElementById("answer").value = "";
  document.getElementById("result").textContent = "";
}

// 答えをチェックする関数
function checkAnswer() {
  const userAnswer = parseInt(document.getElementById("answer").value);
  if (userAnswer === num1 + num2) {
    document.getElementById("result").textContent = "せいかい！すごいね！";
  } else {
    document.getElementById("result").textContent = `ざんねん！こたえは ${num1 + num2} だよ`;
  }
  setTimeout(newQuestion, 1500); // 1.5秒後に次の問題
}

// 🌸/⭐ ステータスの表示更新
function updateStatusIcons() {
  const statusMap = {
    "cleared-addition-1to5": "status-addition-1to5",
    "cleared-addition-1to10": "status-addition-1to10",
    "cleared-addition-1to100": "status-addition-1to100"
  };

  for (const key in statusMap) {
    const el = document.getElementById(statusMap[key]);
    if (el) {
      el.textContent = "⭐";
      if (localStorage.getItem(key) === "true") {
        el.textContent = "🌸";
      }
    }
  }
}

// 単元ごとのデータを削除
function clearByUnit(subject) {
  const ok = confirm(`「${subject}」のがくしゅうデータをけしても いいですか？`);
  if (!ok) return;

  for (let key in localStorage) {
    if (localStorage.hasOwnProperty(key) && key.includes(subject)) {
      localStorage.removeItem(key);
    }
  }

  alert(`${subject} のデータを クリアしました`);
  updateStatusIcons(); // ステータスの見た目も更新
}

// 初期表示処理
window.onload = function () {
  if (document.getElementById("question")) {
    newQuestion();
  }
  updateStatusIcons();
}

// デバッグ用：アイコンリセット確認
function showLocalStorage() {
  const output = Object.entries(localStorage)
    .map(([key, value]) => `${key} = ${value}`)
    .join('\n');
  document.getElementById("debug-storage").textContent = output || "(何も保存されていません)";
};

