inactivateMediumCards();
inactivateAnimStyleCards();
hideAnimStyleBlocks();

// medium kiválasztása
function chooseMedium(medium,style) {
  inactivateMediumCards();
  document.getElementById(medium).style.filter = "grayscale(0%)";
  hideAnimStyleBlocks();
  document.getElementById(style).style.display = "block";
}

// animStyle blokkok eltüntetése
function hideAnimStyleBlocks() {
  var styleBlocks = document.getElementsByClassName('animStyles');

  for (i = 0; i < styleBlocks.length; i++) {
    styleBlocks[i].style.display = "none";
  }
} 

// medium card-ok szürkítése
function inactivateMediumCards() {
  var cards = document.getElementsByClassName('cardMedium');

  for (i = 0; i < cards.length; i++) {
    cards[i].style.filter = "grayscale(100%)";
  }
}

// animStyle card-ok szürkítése
function inactivateAnimStyleCards() {
  var cards = document.getElementsByClassName('cardAnimStyle');

  for (i = 0; i < cards.length; i++) {
    cards[i].style.filter = "grayscale(100%)";
  }
}
// ================================ sliderek ================================
// duration slider
var formaTime = new Date;
var durSlider = document.getElementById("durationR");
var durOutput = document.getElementById("demoDuration");
durOutput.innerHTML = formaTime.clearTime().addSeconds(durSlider.value).toString('H:mm:ss');

durSlider.oninput = function() {
  durOutput.innerHTML = formaTime.clearTime().addSeconds(this.value).toString('H:mm:ss');
}

// quality slider
var qualSlider = document.getElementById("qualityR");
var qualOutput = document.getElementById("demoQuality");
qualOutput.innerHTML = qualSlider.value;

qualSlider.oninput = function() { 
  qualOutput.innerHTML = this.value;
}