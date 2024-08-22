let count = 0;
const counterElement = document.getElementById("decreaseButton");
const increaseButton = document.getElementById("increaseButton");
const counter = document.getElementById("counter");

increaseButton.addEventListener("click", function () {
  count++;
  counter.textContent = count;
});
decreaseButton.addEventListener("click", function () {
  count--;
  counter.textContent = count;
});
let audio = document.getElementById("piano");

function music_event() {
  return audio.paused ? audio.play() : audio.pause();
}
