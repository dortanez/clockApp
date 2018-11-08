function selectTime() {

	//SELECTING HOURS/////////////////////////////////////
	var hrSelect = document.getElementById("alarmHrs");
	var hrs = 12;
	for(i = 1; i <= hrs; i++) {
		var hrOption = document.createElement("option");
		hrOption.innerText = (i < 10) ? "0" + i : i;
		hrSelect.appendChild(hrOption);
	}

	//SELECTING MINUTES//////////////////////////////////
	var minSelect = document.getElementById("alarmMins");
	var mins = 59;
	for(i = 0; i <= mins; i++) {
		var minOption = document.createElement("option");
		minOption.innerText = (i < 10) ? "0" + i : i;
		minSelect.appendChild(minOption);
	}
}
selectTime();

function setAlarm() {










	

	var now = new Date();
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var period = "AM";


}
