'use strict'

let stop;
let progress;
let addition = 0;
const record = document.querySelector("p.counter");
console.log(record);
// カウンター
function timer() {
  const start = new Date().getTime();
  console.log(start);
  stop = setInterval(
    function() {
      progress = new Date().getTime() - start + addition;
      console.log(progress);
      const noms = progress / 1000;
      console.log(noms)
      const millisecond = progress >100 ? ("0" + String(noms).split(".")[1]).slice(-3,-1) : "00";
      const nos = Math.trunc(noms);
      const second = nos >=60 ? ("0" + (nos % 86400 % 3600 %60)).slice(-2) : "00";
      const minute = nos >= 60 ? ("0" + Math.trunc(nos % 86400 % 3600 / 60)).slice(-2) : "00";
      const hour = nos >= 360 ? ("0" + Math.trunc(nos % 86400 / 3600)).slice(-2) : "00";
    
      if (progress < 86400) {
          record.textContent = hour + ":" + minute + ":" + second + ":" + millisecond;
      } else {
        record.textContent = "00:00:00:00"; clearInterval(stop); 
      }
    },10
    
  );
}
// ボタン部
 const startButton = document.querySelector("button.start");
 const stopButton = document.querySelector("button.stop");
 const resetButton = document.querySelector("button.reset");
 stopButton.disabled = true; resetButton.disabled = true;
// スタート
  startButton.addEventListener("click", function() {
  progress = 0; timer(); 
  startButton.disabled = true; 
  stopButton.disabled = false; 
  resetButton.disabled = false; 
});
// ストップ
  stopButton.addEventListener("click", function() {
  clearInterval(stop); addition = progress; 
  startButton.disabled = false; 
  stopButton.disabled = true; 
  resetButton.disabled = false; 
});
// リセット
  resetButton.addEventListener("click", function() {
  clearInterval(stop); 
  progress = 0; 
  record.textContent = "00:00:00:00"; 
  addition = 0; 
  startButton.disabled = false; 
  stopButton.disabled = true; 
  resetButton.disabled = true; 
});