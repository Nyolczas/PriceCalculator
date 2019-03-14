// initPrice - alapdíj: tervezés, riggelés, setup, üzletkötés, működési költségek ($-ban)
var initPrice = {
  // 2D Animation
  cutOut        : 500,
  vector2D      : 800,
  traditional2D : 300,

  // Motion Graphics
  abstractMotion    : 1000,
  complex3DMotion   : 1500,
  realistic3DMotion : 2000,

  // 3D Aniamtion
  visualisation3D       : 1300,
  cartoon3D             : 2500,
  realistic3dCharacter  : 3500
}

// pricePerSec: animációs költségek + render + composit ($-ban)
var pricePerSec = {
  // 2D Animation
  cutOut        : 2.5,
  vector2D      : 3.5,
  traditional2D : 20.0,

  // Motion Graphics
  abstractMotion    : 3.2,
  complex3DMotion   : 5.5,
  realistic3DMotion : 8.0,

  // 3D Aniamtion
  visualisation3D       : 2,
  cartoon3D             : 7.2,
  realistic3dCharacter  : 10
}

// init
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

// stílus kiválasztása
function chooseAnimStyle(style) {
  inactivateAnimStyleCards();
  document.getElementById(style).style.filter = "grayscale(0%)";
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