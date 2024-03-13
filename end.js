const username = document.getElementById("username");
const saveScoreBtn = document.getElementById("saveScoreBtn");
const finalScore = document.getElementById("finalScore");
const mostRecentScore = localStorage.getItem("mostRecentScore");
finalScore.innerText = mostRecentScore;
// finalScore.innerText = 123;

// localStorage.setItem("mostRecentScore", 159);

// if (mostRecentScore != null) {
//   console.log(mostRecentScore);
// } else {
//   console.log("empty");
// }

username.addEventListener("keyup", () => {
  saveScoreBtn.disabled = !username.value;
});

saveHighScore = (e) => {
  e.preventDefault();
};
