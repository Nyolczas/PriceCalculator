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