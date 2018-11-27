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
	hoursMinutesDisplay.textContent = hours + ":" + minutes;
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

digitalClock()


function analogClock() {

	var ctx = document.getElementsByClassName("analogClock");
	var radius = ctx.height / 2;

	var now = new Date();

	var hours = now.getHours();
	var minutes = now.getMinutes();
	var seconds = now.getSeconds();
	var period = "AM";

	var secPosition = seconds * 6;
	var minPosition = minutes * 6;
	var hrPosition = hours * 30;

	document.getElementsByClassName("secondHand")[0].style.transform = "rotate(" + secPosition + "deg)";

	document.getElementsByClassName("minuteHand")[0].style.transform = "rotate(" + minPosition + "deg)";

	document.getElementsByClassName("hourHand")[0].style.transform = "rotate(" + hrPosition + "deg)";


	setTimeout(analogClock, 1000);

}

analogClock();

function showDigital() {
	document.getElementsByClassName("digitalClock")[0].className = "digitalClock";
	document.getElementsByClassName("analogClock")[0].className = "analogClock hide";
	document.getElementsByClassName("alarm")[0].className = "alarm";
}

function showAnalog() {
	document.getElementsByClassName("digitalClock")[0].className = "digitalClock hide";
	document.getElementsByClassName("analogClock")[0].className = "analogClock";
	document.getElementsByClassName("alarm")[0].className = "alarm";
}