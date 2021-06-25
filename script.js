var currentDay = document.getElementById("currentDay")
var saveBtn = $(".saveBtn");
var input = $(".input")
var now = Number(moment().format('k'));
var eight = $("#8am")
var nine = $("#9am")
var ten = $("#10am")
var eleven = $("#11am")
var noon = $("#12pm")
var one = $("#1pm")
var two = $("#2pm")
var three = $("#3pm")
var four = $("#4pm")
var five = $("#5pm")
var placeholder = [eight, nine, ten, eleven, noon, one, two, three, four, five]
var taskArray = ["8am", "9am", "10am", "11am", "12pm", "1pm", "2pm", "3pm", "4pm", "5pm"]

// Handles the display of the date in the header
var displayDate = function() {
currentDay.textContent = moment().format("[Today is ] MMMM Do YYYY")
};

displayDate();

// Handles saving the data to local storage on clicking the save button
saveBtn.on("click", function(event) {
	event.preventDefault();
	console.log("Banana")
	for(i=0; i<placeholder.length; i++) {
		localStorage.setItem(taskArray[i], JSON.stringify(placeholder[i].val()));
	}
});

// Retrieves the data from local storage upon page refresh
for (q=0; q<placeholder.length; q++) {
	placeholder[q].val(JSON.parse(localStorage.getItem(taskArray[q])))
}

// Handles the color changes based on current time
for (x=0; x< placeholder.length; x++) {
	if (now === (x + 8)){
		placeholder[x].addClass("present")
	} else if (now > (x + 8)) {
		placeholder[x].addClass("past")
	} else {
		placeholder[x].addClass("future")
	}
};