function digitalClock() {

	var now = new Date();

	// CURRENT TIME //////////////////////////////////////////////
	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var period = "AM";

	if(hours == 0) {

		hours = 12;
	}

	if(hours > 12) {

		hours = hours - 12;
		period = "PM";
	}

	hours = (hours < 10) ? "0" + hours : hours;
	minutes = (minutes < 10) ? "0" + minutes : minutes;
	seconds = (seconds < 10) ? "0" + seconds : seconds;

	var periodDisplay = document.getElementById("periodDisplay");
	periodDisplay.innerText = period;
	var hoursMinutesDisplay = document.getElementById("hoursMinutesDisplay");
	hoursMinutesDisplay.innerText = hours + ":" + minutes;
	var secondsDisplay = document.getElementById("secondsDisplay");
	secondsDisplay.innerText = seconds;

	// CURRENT DATE //////////////////////////////////////////////
	var days = ["Sunday","Monday","Tuesday","Wednesday","Thursday","Friday","Saturday"];
	var months = ["January","February","March","April","May","June","July","August","September","October","November","December"];

	var currentWeekDay = days[now.getDay()];
	var day = now.getDate();
	var month = months[now.getMonth()];
	var year = now.getFullYear();

	var currentDate = day + " " + month + " " + year;

	var weekDayDisplay = document.getElementById("weekDayDisplay");
	weekDayDisplay.innerText = currentWeekDay;
	var dateDisplay = document.getElementById("dateDisplay");
	dateDisplay.innerText = currentDate;

	setTimeout(digitalClock, 1000);

}

digitalClock();