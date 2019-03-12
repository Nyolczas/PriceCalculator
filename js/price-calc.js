// duration slider

var durSlider = document.getElementById("durationR");
var durOutput = document.getElementById("demoDuration");
durOutput.innerHTML = durSlider.value;

durSlider.oninput = function() {
  durOutput.innerHTML = this.value;
}

// quality slider

var qualSlider = document.getElementById("qualityR");
var qualOutput = document.getElementById("demoQuality");
qualOutput.innerHTML = qualSlider.value;

qualSlider.oninput = function() {
  qualOutput.innerHTML = this.value;
}