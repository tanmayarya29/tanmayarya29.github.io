let dino = document.getElementById("dino");
let obs = document.getElementById("obs");
let cs = document.getElementById("cs");
let hs = document.getElementById("hs");
let gameOver = document.getElementById("gameOver");

let counter = 0;
let maxScore = localStorage.getItem("maxScore") ?? 0;

//jump
jump = () => {
  if (dino.classList == "animate") {
    return;
  }
  dino.classList.add("animate");
  setTimeout(() => {
    dino.classList.remove("animate");
  }, 300);
};

//check dead
let checkDead = setInterval(() => {
  cs.innerText = "Score :  " + Math.floor(counter / 100);
  hs.innerText = "High Score : " + maxScore;

  let dinoTop = parseInt(window.getComputedStyle(dino).getPropertyValue("top"));
  let obsLeft = parseInt(window.getComputedStyle(obs).getPropertyValue("left"));

  if (obsLeft - 30 <= 0 && obsLeft - 30 >= -20  && dinoTop >= 430) {
    if (maxScore < Math.floor(counter / 100)) {
      maxScore = Math.floor(counter / 100);
      hs.innerText = "High Score : " + maxScore;
      localStorage.setItem("maxScore", maxScore);
    }

    gameOver.style.display = "inline-block";
    obs.style.animation = "none";
    counter = 0;

    document.addEventListener("click", (e) => {
      gameOver.style.display = "none";
      obs.style.animation = "obs 1s infinite linear";
      cs.innerText = "Score :  " + Math.floor(counter / 100);
      hs.innerText = "High Score : " + maxScore ?? 0;
    });
    document.addEventListener("keydown", (e) => {
      if (e.key == " ") {
        gameOver.style.display = "none";
        obs.style.animation = "obs 1s infinite linear";
        cs.innerText = "Score :  " + Math.floor(counter / 100);
        hs.innerText = "High Score : " + maxScore ?? 0;
      }
    });
  } else {
    if (gameOver.style.display == "none" || !gameOver.style.display) {
      counter++;
    }
  }
}, 1);
