var cSound = document.querySelector("#cAudio");
var cNote = document.querySelector("#c");

cNote.addEventListener("mousedown", function(){
  cSound.currentTime = 0;
  cSound.play();

  if (this.className === "active"){
    this.classList.remove("active");
  } else {
    this.classList.add("active");
  }
});
