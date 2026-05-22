const troubles = [
  {
    name: "キッチンの水音",
    failImage: "assets/images/cat_fail_water.png",
    stages: [
      "蛇口から音がします。\nしずくなら許容範囲。",
      "床に水たまりがあります。\n小さいので、まだ床です。",
      "水たまりが広がっています。\nゆっくりなので、まだ見守れます。",
      "足元まで水が来ています。\n靴下はまだ片方だけです。"
    ],
    failText: "台所が池になりました。\n魚はいません。"
  },
  {
    name: "締切の気配",
    failImage: "assets/images/cat_fail_paper.png",
    stages: [
      "カレンダーに赤丸があります。\nまだ赤いだけです。",
      "赤丸の日付が近いです。\n近いだけなら、まだ予定です。",
      "通知が何度も震えています。\n見なければ、まだ通知です。",
      "提出ボタンが見えています。\n押すには心が細いです。"
    ],
    failText: "締切が過ぎました。\n待ってはくれませんでした。"
  },
  {
    name: "謎の焦げにおい",
    failImage: "assets/images/cat_fail_smoke.png",
    stages: [
      "焦げたにおいがします。\n気のせいという案もあります。",
      "トースターがあやしいです。\nでもまだ見なくても大丈夫かも。",
      "細い煙が出ています。\n細いので、まだ控えめです。",
      "中がだいぶ黒いです。\nパンだった気配はあります。"
    ],
    failText: "朝ごはんが黒い板です。\n食べ物だった記録はあります。"
  },
  {
    name: "未読の山",
    failImage: "assets/images/cat_fail_paper.png",
    stages: [
      "メッセージが3件あります。\n3件かあ。",
      "未読が12件あります。\nここまで来ると、開きにくいです。",
      "大事そうな件名があります。\n大事そうなので、まだ見ません。",
      "相手が入力中です。\nこちらは心の準備中です。"
    ],
    failText: "電話がかかってきました。\n文字では済みませんでした。"
  },
  {
    name: "洗濯物の雲行き",
    failImage: "assets/images/cat_fail_water.png",
    stages: [
      "空が少し暗いです。\n夕方のふりかもしれません。",
      "風が湿っています。\n洗濯物はまだ平気そうです。",
      "雨がぽつぽつ来ています。\nぽつぽつなら、まだ迷えます。",
      "雨粒が増えています。\n取り込むには腰が重いです。"
    ],
    failText: "洗濯物がしっとりしました。\nそういう仕上げではありません。"
  },
  {
    name: "パソコンのうなり",
    failImage: "assets/images/cat_fail_smoke.png",
    stages: [
      "ファンが元気です。\n元気なのはいいことです。",
      "画面がもっさりしています。\nこちらももっさりです。",
      "保存していないファイルがあります。\nでも今は動いています。",
      "カーソルが止まりました。\nまだ祈る余地があります。"
    ],
    failText: "画面が真っ暗です。\n保存も暗くなりました。"
  },
  {
    name: "冷蔵庫の奥",
    stages: [
      "冷蔵庫に知らない容器があります。\n今度確認すればいいか。",
      "ふたが少しふくらんでいます。\n容器にも事情があります。",
      "開ける前から存在感があります。\n開けなければ、まだ容器です。",
      "容器が気になります。\n気になるだけなら閉められます。"
    ],
    failText: "台所に香りが広がりました。\n記憶に残るタイプです。"
  },
  {
    name: "玄関の鍵",
    stages: [
      "鍵をかけた気がします。\n気がするなら大丈夫です。",
      "少し自信がありません。\n少しなので、まだ歩けます。",
      "離れるほど気になります。\n戻るには少し遠いです。",
      "玄関の映像が浮かびます。\n再放送が多いです。"
    ],
    failText: "鍵が開いていました。\nやさしさはいりません。"
  },
  {
    name: "観葉植物",
    stages: [
      "葉っぱが下を向いています。\nそういう姿勢の日かもしれません。",
      "土がからからです。\n乾いているだけなら、まだ土です。",
      "葉っぱがしんなりしています。\n寝ているだけかもしれません。",
      "鉢全体が静かです。\n静かなので、つい後回しです。"
    ],
    failText: "植物がぐったりしています。\nこちらも無言になりました。"
  },
  {
    name: "会議の準備",
    failImage: "assets/images/cat_fail_paper.png",
    stages: [
      "会議まであと30分です。\n30分もあります。",
      "資料の名前が仮です。\n仮にも名前はあります。",
      "共有ファイルが見つかりません。\nもともとなかったのかも。",
      "参加通知が出ました。\n資料はまだ旅に出ています。"
    ],
    failText: "会議が始まりました。\n資料はまだ帰ってきません。"
  }
];

const pointsByStage = [10, 25, 45, 80];
const miracleScore = 100;
const accidentRatesByStage = [0.05, 0.2, 0.45, 0.7];
const maxMisses = 3;
const failDelayMs = 900;
const defaultWaitButtonText = "たぶん大丈夫";
const defaultHandleButtonText = "対応する";
const catImages = [
  "assets/images/cat_normal.png",
  "assets/images/cat_wait.png",
  "assets/images/cat_danger.png",
  "assets/images/cat_danger.png"
];

const failCatImage = "assets/images/cat_fail.png";
const failCatImages = ["assets/images/cat_fail.png", "assets/images/cat_fail_2.png"];
const handleCatImage = "assets/images/cat_handle.png";
const miracleCatImage = "assets/images/cat_miracle.png";

const successMessagesByStage = [
  [
    "早めに片づけました。まだ何も起きていません。",
    "すぐ対応しました。今日は動きが早いです。",
    "対応しました。猫は横にいました。"
  ],
  [
    "少しあやしかったので、片づけました。",
    "まだ事故ではないところで止めました。",
    "見なかったことにする前に戻ってきました。"
  ],
  [
    "ほぼ事故でした。まだ事故ではありません。",
    "ぎりぎりで片づけました。猫は静かです。",
    "かなり危なかったです。間に合ったことにします。"
  ],
  [
    "ここで戻りました。戻れてよかったです。",
    "かなり攻めました。もう対応でいいです。",
    "限界の手前で止めました。手前ということにします。"
  ]
];

const failureMessages = [
  "起きました。見てはいました。",
  "大丈夫ではありませんでした。",
  "間に合いませんでした。そういう日です。",
  "猫は見ていました。何もしていません。",
  "後回しの結果が来ました。"
];

const nextTroubleMessages = [
  "次の様子を見ます。",
  "何事もなかったことにして、次です。",
  "別の問題が来ました。",
  "処理は続きます。",
  "机の上はまだ終わりません。"
];

const troubleCount = document.getElementById("trouble-count");
const stageCount = document.getElementById("stage-count");
const missCount = document.getElementById("miss-count");
const scoreCount = document.getElementById("score-count");
const catImage = document.getElementById("cat-image");
const troubleName = document.getElementById("trouble-name");
const troubleText = document.getElementById("trouble-text");
const message = document.getElementById("message");
const actionArea = document.querySelector(".actions");
const waitButton = document.getElementById("wait-button");
const handleButton = document.getElementById("handle-button");
const resultPanel = document.getElementById("result-panel");
const resultScore = document.getElementById("result-score");
const resultRank = document.getElementById("result-rank");
const restartButton = document.getElementById("restart-button");


let currentTroubleIndex = 0;
let currentStageIndex = 0;
let misses = 0;
let score = 0;
let gameOver = false;
let isShowingFailure = false;
let resultTimerId = null;
let pendingNextMessage = null;
let pendingNextDelayResult = false;
let isWaitingForNextTrouble = false;
let isFailureWaitingForNextTrouble = false;
let waitingCatImage = null;
let currentFailCatImage = failCatImage;

function pickRandom(items) {
  return items[Math.floor(Math.random() * items.length)];
}

function getSuccessMessage(stageIndex, gainedScore) {
  return `${pickRandom(successMessagesByStage[stageIndex])} ${gainedScore}点入りました。`;
}

function updateView() {
  const currentTrouble = troubles[currentTroubleIndex];
  const shouldShowFailure = isShowingFailure || isFailureWaitingForNextTrouble;

  troubleCount.textContent = Math.min(currentTroubleIndex + 1, troubles.length);
  stageCount.textContent = currentStageIndex;
  missCount.textContent = misses;
  scoreCount.textContent = score;

  if (currentTrouble && isFailureWaitingForNextTrouble) {
    troubleName.textContent = currentTrouble.name;
    troubleText.textContent = currentTrouble.failText;
  } else if (currentTrouble) {
    troubleName.textContent = currentTrouble.name;
    troubleText.textContent = currentTrouble.stages[currentStageIndex];
  }

  catImage.src = shouldShowFailure
    ? currentFailCatImage
    : waitingCatImage || catImages[currentStageIndex];
  catImage.alt = shouldShowFailure
    ? "失敗後に立っている猫"
    : "いまの状況を見守る猫";

  waitButton.textContent = defaultWaitButtonText;
  handleButton.textContent = isWaitingForNextTrouble
    ? getNextButtonText()
    : defaultHandleButtonText;

  actionArea.classList.toggle("single-action", isWaitingForNextTrouble);
  waitButton.classList.toggle("hidden", isWaitingForNextTrouble);
  waitButton.disabled = gameOver || isShowingFailure || isWaitingForNextTrouble;
  handleButton.disabled = gameOver || isShowingFailure;
}

function getNextButtonText() {
  if (misses >= maxMisses || currentTroubleIndex >= troubles.length - 1) {
    return "結果を見る";
  }

  const labels = [
    "次は何しよう",
    "別の問題を見る",
    "何事もなかったことにする",
    "処理を続ける",
    "次の様子を見る"
  ];

  return pickRandom(labels);
}

function moveToNextTrouble(nextMessage, delayResult = true) {
  currentTroubleIndex += 1;
  currentStageIndex = 0;
  pendingNextMessage = null;
  pendingNextDelayResult = false;
  isWaitingForNextTrouble = false;
  isFailureWaitingForNextTrouble = false;
  waitingCatImage = null;
  message.textContent = nextMessage;

  if (misses >= maxMisses || currentTroubleIndex >= troubles.length) {
    endGame(delayResult);
    return;
  }

  updateView();
}

function waitAndSee() {
  if (gameOver || isShowingFailure) return;

  const currentTrouble = troubles[currentTroubleIndex];
  const accidentRate = accidentRatesByStage[currentStageIndex];
  const didAccidentHappen = Math.random() < accidentRate;

  if (!didAccidentHappen) {
    if (currentStageIndex < 3) {
      currentStageIndex += 1;

      message.textContent = pickRandom([
        "もうちょい待ちます。まだ何も起きていません。",
        "様子見です。返すのが面倒なわけではありません。",
        "先送りできました。できたと言っていいのかは別です。",
        "猫は何もしていません。状況だけ少し進みました。",
        "今のところは大丈夫そうです。今のところは。",
        "まだ何とかなる気がしています。気がしているだけです。",
        "一回だけ見なかったことにしました。まだ怒られていません。",
        "だいぶ怪しいです。でも今回は何も起きませんでした。"
      ]);
      updateView();
      return;
    }

    score += miracleScore;
    message.textContent = pickRandom([
      `間一髪でした。${miracleScore}点入りました。運です。`,
      `まだ大丈夫でした。${miracleScore}点入りました。大丈夫の幅が広いです。`,
      `なぜか何も起きませんでした。${miracleScore}点です。猫は同じ顔です。`,
      `ここまで待って、まだ無事でした。${miracleScore}点入りました。`
    ]);
    pendingNextMessage = pickRandom(nextTroubleMessages);
    pendingNextDelayResult = false;
    isWaitingForNextTrouble = true;
    waitingCatImage = miracleCatImage;
    updateView();
    return;
  }

  misses += 1;
  message.textContent = pickRandom(failureMessages);
  currentFailCatImage = currentTrouble.failImage || pickRandom(failCatImages);
  pendingNextMessage = pickRandom(nextTroubleMessages);
  pendingNextDelayResult = false;
  isWaitingForNextTrouble = true;
  isFailureWaitingForNextTrouble = true;
  updateView();
}

function handleTrouble() {
  if (gameOver || isShowingFailure) return;

  if (isWaitingForNextTrouble) {
    moveToNextTrouble(pendingNextMessage || pickRandom(nextTroubleMessages), pendingNextDelayResult);
    return;
  }

  const gainedScore = pointsByStage[currentStageIndex];
  score += gainedScore;
  message.textContent = getSuccessMessage(currentStageIndex, gainedScore);
  pendingNextMessage = pickRandom(nextTroubleMessages);
  pendingNextDelayResult = false;
  isWaitingForNextTrouble = true;
  waitingCatImage = handleCatImage;
  updateView();
}

function getRankText() {
  if (misses >= maxMisses) return "もう大丈夫ではありません。次は少し早めに動きます。";
  if (score >= 520) return "かなり大丈夫でした。たまたまも含みます。";
  if (score >= 360) return "だいたい大丈夫でした。見なかったことも含みます。";
  if (score >= 200) return "たぶん大丈夫でした。たぶんなので。";
  return "早めに対応しました。安全ですが、少し物足りません。";
}

function endGame(delayResult = true) {
  gameOver = true;
  isShowingFailure = true;
  waitButton.disabled = true;
  handleButton.disabled = true;
  catImage.src = failCatImage;
  catImage.alt = "結果を見守る猫";
  resultScore.textContent = `無事度は${score}でした。\nやらかしは${misses}回です。`;
  resultRank.textContent = getRankText();

  if (delayResult) {
    resultTimerId = window.setTimeout(() => {
      resultPanel.classList.remove("hidden");
      resultTimerId = null;
    }, failDelayMs);
    return;
  }

  resultPanel.classList.remove("hidden");
}

function resetGame() {
  if (resultTimerId) {
    window.clearTimeout(resultTimerId);
    resultTimerId = null;
  }

  currentTroubleIndex = 0;
  currentStageIndex = 0;
  misses = 0;
  score = 0;
  gameOver = false;
  isShowingFailure = false;
  pendingNextMessage = null;
  pendingNextDelayResult = false;
  isWaitingForNextTrouble = false;
  isFailureWaitingForNextTrouble = false;
  waitingCatImage = null;
  currentFailCatImage = failCatImage;
  waitButton.textContent = defaultWaitButtonText;
  handleButton.textContent = defaultHandleButtonText;
  message.textContent = "まずは様子を見ますか、対応しますか。";
  resultPanel.classList.add("hidden");
  updateView();
}

waitButton.addEventListener("click", waitAndSee);
handleButton.addEventListener("click", handleTrouble);
restartButton.addEventListener("click", resetGame);

resetGame();
