// ================================ sliderek ================================
// duration slider
var formaTime = new Date;
var durSlider = document.getElementById("durationR");
var durOutput = document.getElementById("demoDuration");
durOutput.innerHTML = formaTime.clearTime().addSeconds(durSlider.value).toString('H:mm:ss');

durSlider.oninput = function() {
  durOutput.innerHTML = formaTime.clearTime().addSeconds(this.value).toString('H:mm:ss'); 
  calculatePrice();
}


// quality slider
var qualSlider = document.getElementById("qualityR");
var qualOutput = document.getElementById("demoQuality");
// qualOutput.innerHTML = qualSlider.value;

qualSlider.oninput = function() { 
  // qualOutput.innerHTML = this.value;
  calculatePrice();
}

// ================================ logics ================================
var calculatedPrices = {
  init    : 0,
  seconds : 0
}


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
  cutOut        : 25,
  vector2D      : 35,
  traditional2D : 210,

  // Motion Graphics
  abstractMotion    : 32,
  complex3DMotion   : 55,
  realistic3DMotion : 80,

  // 3D Aniamtion
  visualisation3D       : 20,
  cartoon3D             : 170,
  realistic3dCharacter  : 250
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

  document.getElementById("finalPrice").innerHTML = '$XX,XXX';
}

// stílus kiválasztása / ár meghatározás

function chooseAnimStyle(style) {
    inactivateAnimStyleCards();
    document.getElementById(style).style.filter = "grayscale(0%)";

    calculatedPrices.init = initPrice[style];
    calculatedPrices.seconds = pricePerSec[style];
    calculatePrice();
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

// =============================  ár kalkuláció
function calculatePrice() {
  var finalPrice = (calculatedPrices.seconds * durSlider.value / 100 * qualSlider.value) + calculatedPrices.init;
  // console.log('$' + formatMoney(finalPrice));
  document.getElementById("finalPrice").innerHTML = '$' + formatMoney(finalPrice);
}

//  format Dollar
function formatMoney(amount, decimalCount = 0, decimal = ".", thousands = ",") {
  try {
    decimalCount = Math.abs(decimalCount);
    decimalCount = isNaN(decimalCount) ? 2 : decimalCount;

    const negativeSign = amount < 0 ? "-" : "";

    let i = parseInt(amount = Math.abs(Number(amount) || 0).toFixed(decimalCount)).toString();
    let j = (i.length > 3) ? i.length % 3 : 0;

    return negativeSign + (j ? i.substr(0, j) + thousands : '') + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + thousands) + (decimalCount ? decimal + Math.abs(amount - i).toFixed(decimalCount).slice(2) : "");
  } catch (e) {
    //console.log(e)
  }
};
