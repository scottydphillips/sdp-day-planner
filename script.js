var currentDay = document.getElementById("currentDay")
var saveBtn = $(".saveBtn");
var input = $(".input");
var now = Number(moment().format('k'));
var eight = $("8am");
var nine = $("9am");
var ten = $('10am');
var eleven = $('11am');
var noon = $('12pm');
var one = $("1pm");
var two = $("2pm");
var three = $("3pm");
var four = $("4pm");
var five = $("5pm");

var displayDate = function() {
currentDay.textContent = moment().format("[Today is ] MMMM Do YYYY")
};

displayDate();

saveBtn.on("submit", function(event) {
	event.preventDefault();
	localStorage.setItem("task", input.innerHTML);
});

var sameTime = function() {
	if(moment().isSame("11", "hour")) {
		console.log("yes it's the same")
	} else {
		console.log("no it's not the same")
	}
}

sameTime()

var eightColors = function() {
	if(moment().isSame("8", "hour")) {
		eight.addClass(".present");
	} else if (moment().isAfter("8", "hour")) {
		eight.addClass(".past");
	} else {
		eight.addClass(".future");
	};
};

var nineColors = function() {
	if(moment().isSame("9", "hour")) {
		nine.addClass(".present");
	} else if (moment().isAfter("9", "hour")) {
		nine.addClass(".past");
	} else {
		nine.addClass(".future");
	};
};

var tenColors = function() {
	if(moment().isSame("10", "hour")) {
		ten.addClass(".present");
	} else if (moment().isAfter("10", "hour")) {
		ten.addClass(".past");
	} else {
		ten.addClass(".future");
	};
};

var elevenColors = function() {
	if(moment().isSame("11", "hour")) {
		eleven.addClass(".present");
	} else if (moment().isAfter("11", "hour")) {
		eleven.addClass(".past");
	} else {
		eleven.addClass(".future");
	};
};

var noonColors = function() {
	if(moment().isSame("12", "hour")) {
		noon.addClass(".present");
	} else if (moment().isAfter("12", "hour")) {
		noon.addClass(".past");
	} else {
		noon.addClass(".future");
	};
};

var oneColors = function() {
	if(moment().isSame("1", "hour")) {
		one.addClass(".present");
	} else if (moment().isAfter("1", "hour")) {
		one.addClass(".past");
	} else {
		one.addClass(".future");
	};
};

var twoColors = function() {
	if(moment().isSame("2", "hour")) {
		two.addClass(".present");
	} else if (moment().isAfter("2", "hour")) {
		two.addClass(".past");
	} else {
		two.addClass(".future");
	};
};

var threeColors = function() {
	if(moment().isSame("3", "hour")) {
		three.addClass(".present");
	} else if (moment().isAfter("3", "hour")) {
		three.addClass(".past");
	} else {
		three.addClass(".future");
	};
};

var fourColors = function() {
	if(moment().isSame("4", "hour")) {
		four.addClass(".present");
	} else if (moment().isAfter("4", "hour")) {
		four.addClass(".past");
	} else {
		four.addClass(".future");
	};
};

var fiveColors = function() {
	if(moment().isSame("5", "hour")) {
		five.addClass(".present");
	} else if (moment().isAfter("5", "hour")) {
		five.addClass(".past");
	} else {
		five.addClass(".future");
	};
};

eightColors();
nineColors();
tenColors();
elevenColors();
noonColors();
oneColors();
twoColors();
threeColors();
fourColors();
fiveColors();