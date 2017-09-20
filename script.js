var cSound = document.querySelector("#cAudio");
var cNote = document.querySelector("#c");

var dSound = document.querySelector("#dAudio");
var dNote = document.querySelector("#d");

var eSound = document.querySelector("#eAudio");
var eNote = document.querySelector("#e");

var fSound = document.querySelector("#fAudio");
var fNote = document.querySelector("#f");

var gSound = document.querySelector("#gAudio");
var gNote = document.querySelector("#g");

var aSound = document.querySelector("#aAudio");
var aNote = document.querySelector("#a");

var bSound = document.querySelector("#bAudio");
var bNote = document.querySelector("#b");


document.addEventListener('DOMContentLoaded', () => {
  var boxes = document.getElementsByClassName("box");

  var attachEventListenersToMusicBoxes = function(){
    Array.from(boxes).forEach(function(musicBox) {
      musicBox.addEventListener("click", function() {
        if (musicBox.classList.contains("active")) {
          musicBox.classList.remove("active");
        } else {
          musicBox.classList.add("active");
        }
      });
    });
  };

  attachEventListenersToMusicBoxes();

});

cNote.addEventListener("click", function(){

  cSound.currentTime = 0;
  cSound.play();
});

dNote.addEventListener("click", function(){
  dSound.currentTime = 0;
  dSound.play();
});

eNote.addEventListener("click", function(){
  eSound.currentTime = 0;
  eSound.play();
});

fNote.addEventListener("click", function(){
  fSound.currentTime = 0;
  fSound.play();
});

gNote.addEventListener("click", function(){
  gSound.currentTime = 0;
  gSound.play();
});

aNote.addEventListener("click", function(){
  aSound.currentTime = 0;
  aSound.play();
});

bNote.addEventListener("click", function(){
  bSound.currentTime = 0;
  bSound.play();
});
