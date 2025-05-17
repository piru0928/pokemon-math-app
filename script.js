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
  setTimeout(newQuestion, 1500);
}

// 🌸/⭐ ステータスの表示更新
function updateStatusIcons() {
  const statusMap = {
    // さんすう
    "cleared-addition-1to5": "status-addition-1to5",
    "cleared-subtraction-1to5": "status-subtraction-1to5",
    "cleared-addition-1to10": "status-addition-1to10",
    "cleared-subtraction-1to10": "status-subtraction-1to10",
    "cleared-addition-1to100": "status-addition-1to100",
    "cleared-subtraction-1to100": "status-subtraction-1to100",
    "cleared-multiplication-1to10": "status-multiplication-1to10",
    "cleared-multiplication-1to100": "status-multiplication-1to100",
    "cleared-division-1to10": "status-division-1to10",
    "cleared-division-1to10000": "status-division-1to10000",

    // こくご（japanese）
    "cleared-ondoku": "status-ondoku",
    "cleared-nani": "status-nani.html",
    "cleared-yousu": "status-yousu.html",
    "cleared-ugoki": "status-ugoki.html",
    "cleared-kuttuki": "status-kuttuki.html",
    "cleared-bun": "status-bun.html",
    "cleared-kanji": "status-kanji.html",
    "cleared-shugo": "status-shugo.html",
    "cleared-soushoku": "status-soushoku.html",
    "cleared-iikae": "status-iikae.html",
    "cleared-onkun": "status-onkun.html"
    
    // えいご（english）
    "cleared-pokemon-english": "status-pokemon-english",
    "cleared-fruit": "status-fruit",
    "cleared-snack": "status-snack",
    "cleared-room": "status-room",
    "cleared-bigsmall": "status-bigsmall",
    "cleared-like-eat-drink": "status-like-eat-drink",
    "cleared-5w": "status-5w",
    "cleared-story": "status-story"

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

  const deleteMap = {
    math: [
      "cleared-addition-1to5",
      "cleared-subtraction-1to5",
      "cleared-addition-1to10",
      "cleared-subtraction-1to10",
      "cleared-addition-1to100",
      "cleared-subtraction-1to100",
      "cleared-multiplication-1to10",
      "cleared-multiplication-1to100",
      "cleared-division-1to10",
      "cleared-division-1to10000"
    ],
    japanese: [
      "cleared-ondoku",
      "cleared-nani",
      "cleared-yousu",
      "cleared-ugoki",
      "cleared-kuttuki",
      "cleared-bun",
      "cleared-kanji",
      "cleared-shugo",
      "cleared-soushoku",
      "cleared-iikae",
      "cleared-onkun"
    ],
    english: [
      "cleared-pokemon-english",
      "cleared-fruit",
      "cleared-snack",
      "cleared-room",
      "cleared-bigsmall",
      "cleared-like-eat-drink",
      "cleared-5w",
      "cleared-story"
    ]
  };

  const targets = deleteMap[subject] || [];
  targets.forEach(key => localStorage.removeItem(key));

  alert(`${subject} のデータを クリアしました`);
  updateStatusIcons();
  showLocalStorage();
}

// 初期表示処理
window.onload = function () {
  if (document.getElementById("question")) {
    newQuestion();
  }
  updateStatusIcons();
};

// デバッグ用：localStorage 確認
function showLocalStorage() {
  const output = Object.entries(localStorage)
    .map(([key, value]) => `${key} = ${value}`)
    .join('\n');
  document.getElementById("debug-storage").textContent = output || "(何も保存されていません)";
};
