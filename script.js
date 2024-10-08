function handleCount() {
  let count = document.getElementById("count");
  let countNumber = Number(count.innerHTML);
  countNumber++;
  count.innerHTML = countNumber;
  if (count.innerHTML === "5") {
    alert("Biraz ara vermeslisin.");
  }
}
const sominePlayAudio = document.getElementById("sominePlayAudio");
const sominePlay = document.getElementById("sominePlay");

sominePlay.addEventListener("click", function () {
  if (sominePlayAudio.paused) {
    sominePlayAudio.play();
    sominePlay.className = "bi bi-boombox-fill";
  } else {
    sominePlayAudio.pause();
    sominePlay.className = "bi bi-music-player-fill";
  }
});

const pianoPlayAudio = document.getElementById("pianoPlayAudio");
const pianoPlay = document.getElementById("pianoPlay");

pianoPlay.addEventListener("click", function () {
  if (pianoPlayAudio.paused) {
    pianoPlayAudio.play();
    pianoPlay.className = "bi bi-boombox-fill";
  } else {
    pianoPlayAudio.pause();
    pianoPlay.className = "bi bi-music-player-fill";
  }
});

const rainPlayAudio = document.getElementById("rainPlayAudio");
const rainPlay = document.getElementById("rainPlay");

rainPlay.addEventListener("click", function () {
  if (rainPlayAudio.paused) {
    rainPlayAudio.play();
    rainPlay.className = "bi bi-boombox-fill";
  } else {
    rainPlayAudio.pause();
    rainPlay.className = "bi bi-music-player-fill";
  }
});

const volumeRange = document.getElementById("volume-input");
volumeRange.addEventListener("input", function () {
  sominePlayAudio.volume = volumeRange.value / 100;
  pianoPlayAudio.volume = volumeRange.value / 100;
  rainPlayAudio.volume = volumeRange.value / 100;
});
