const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");

// localStorage.setItem("highScore", []);
// console.log(localStorage.getItem("highScore"));
const highScores = JSON.parse(localStorage.getItem("highScores")) || [];

const MAX_HIGH_SCORES = 5;

// console.log(highScores);

finalScore.innerText = mostRecentScore;

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();

  const score = {
    // score: mostRecentScore,
    score: Math.floor(Math.random() * 100),
    name: username.value,
  };
  // console.log(score);

  highScores.push(score);
  highScores.sort((a, b) => b.score - a.score);
  // console.log(highScores);
  highScores.splice(5);

  localStorage.setItem("highScores", JSON.stringify(highScores));
  window.location.assign("/");
};
