var currentDay = document.getElementById("currentDay")

var displayDate = function() {
currentDay.textContent = moment().format("[Today is ] MMMM Do YYYY")
};

displayDate();