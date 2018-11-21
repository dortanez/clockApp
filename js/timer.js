	var hrSelect = document.getElementById("timerHrs");
	var minSelect = document.getElementById("timerMins");
	var secSelect = document.getElementById("timerSeconds");

	function addZero(i) {
		if(i < 10) {
			return "0" + i;
		} else {
			return i;
		}
	}

	function addOptions() {

		//ADDING HOURS/////////////////////////////////////
		var hrs = 24;
		for(i = 0; i <= hrs; i++) {
			var hrOption = document.createElement("option");
			hrOption.innerText = (i < 10) ? "0" + i : i;
			hrSelect.appendChild(hrOption);
		}

		//ADDING MINUTES//////////////////////////////////
		var mins = 59;
		for(i = 0; i <= mins; i++) {
			var minOption = document.createElement("option");
			minOption.innerText = (i < 10) ? "0" + i : i;
			minSelect.appendChild(minOption);
		}

		//ADDING SECONDS//////////////////////////////////
		var secs = 59;
		for(i = 0; i <= secs; i++) {
			var secOption = document.createElement("option");
			secOption.innerText = (i < 10) ? "0" + i : i;
			secSelect.appendChild(secOption);
		}
	}
	addOptions();

	function setTimer() {

		var x = setInterval(function() {

		var selectedHr = hrSelect.options[hrSelect.selectedIndex].value;
		var selectedMin = minSelect.options[minSelect.selectedIndex].value;
		var selectedSec = secSelect.options[secSelect.selectedIndex].value;

		

		var hours = Math.floor((selectedHr % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
		var minutes = Math.floor((selectedMin % (1000 * 60 * 60)) / (1000 * 60));
		var seconds = Math.floor((selectedSec % (1000 * 60)) / 1000);


		//SELECTED TIMER SET////////////////////////////////
		var timerTime = hours + "h" + minutes + "m" + seconds + "s";

		var timerSet = document.getElementById("timerSet");
		timerSet.innerText = timerTime;

	 }, 1000);
	}







function showTimer() {
	document.getElementsByClassName("digitalClock")[0].className = "digitalClock hide";
	document.getElementsByClassName("analogClock")[0].className = "analogClock hide";
	document.getElementsByClassName("alarm")[0].className = "alarm hide";
	document.getElementsByClassName("timer")[0].className = "timer";
}