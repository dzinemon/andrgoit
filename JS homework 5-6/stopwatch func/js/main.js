var timer = document.getElementById('timer');
var toggleBtn = document.getElementById('toggle');
var resetBtn = document.getElementById('reset');


var watch = new stopwatch(timer);
 toggleBtn.addEventListener('click', function() {
	 if (watch.isOn) {
		 watch.stop();
		 toggleBtn.textContent = "Start";
	 } else {
		 watch.start();
		 toggleBtn.textContent = "Pause";
	 }
 });

resetBtn.addEventListener('click', function() {
	watch.reset();
	
});