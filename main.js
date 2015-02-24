function Months(container) {

	var body = document.body;
	if (typeof container === "string") {
		container = document.getElementById(container);
	}
	if (!(container instanceof HTMLElement)) {
		return {};
	}
	this.el = function() {
		//console.log("hi!");
		return container;
	};

	var theMonths = ["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"];
	var theDays = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday'];
	var dayLetters = ['M', 'T', 'W', 'Th', 'F', 'S', 'S'];	

	var monthCal = function(monthID) {

		//sets up DOM elements
		var monthDiv = document.getElementById('monthDiv');
		// var theMonth = document.getElementById(monthID);
		var theMonth = document.getElementById(monthID);
		console.log(theMonth);
		var monthLength = +theMonth.numberOfDays;
		var header = document.createElement('div');
		header.setAttribute("id", "monthLabel");
		// monthDiv.setAttribute('id', 'monthDiv');
		header.innerHTML = monthID;
		monthDiv.appendChild(header);
		var monthTableDiv = document.createElement('div');
		monthTableDiv.setAttribute('id', 'monthTableDiv');
		var zoomMonth = document.createElement('table');
		zoomMonth.setAttribute('class', 'monthTable');
		monthDiv.appendChild(monthTableDiv);

		//sets up numerical variables
		var day1 = +theMonth.nextSibling.id;
		var startDay = theMonth.nextSibling.dayID;
		var end = day1 + monthLength;
		var numCols = 7;
		var numRows = Math.ceil(monthLength/7);
		var monthDay = 1;

		//START OF Calendar generating function

		// makes day of week labels

		for (var p = 0; p < numCols; p++) {
			var th = document.createElement('th');
			th.innerHTML = (dayLetters[p]);
			zoomMonth.appendChild(th);
		}

		//sets empty days for starting on right day of week
		var empty = 0;
		//sets number of rows
		for (var r = 0; r < numRows; r++) {
			//makes rows
			var tr = document.createElement('tr');
			//sets columns
			for (var l = 0; l < numCols; l++) {
				//if current day is less than the end day
				if (day1 < end) {	
					if (empty < startDay) {
					var td = document.createElement('td');
					tr.appendChild(td);
					empty++; 
				} else {
					var td = document.createElement('td'); 
					td.innerHTML = (monthDay);
					tr.appendChild(td);
					day1++;
					monthDay++;
					}
				}
			}
			zoomMonth.appendChild(tr);
		 }
		monthTableDiv.appendChild(zoomMonth);
	 	monthDiv.appendChild(monthDiv);
	};


	this.render = function() {
		var table = document.createElement("table");
		var numRows = 12;
		var dayCount = 0;
		var weekDay = 0;

		//Makes the 12 months
		for (var m = 0; m < numRows; m++) {
			var tr = document.createElement('tr'); 
				// for 
			var thisMonth = theMonths[m];

			var th = document.createElement('th');	
			th.setAttribute('class', m);
			th.classList.add('month');
			th.innerHTML = (thisMonth);
			tr.appendChild(th);

			var dayCol = document.createElement('td');
			var dayNum;

			//decides which day of the week
			var dayOfWeek = function() {
				if ((weekDay) % 7 === 0) {
					whichDay = theDays[2];
					dayCell.dayID = 2;
				} else if ((weekDay - 1) % 7 === 0) {
					whichDay = theDays[3];
					dayCell.dayID = 3;
				} else if ((weekDay - 2) % 7 === 0) {
					whichDay = theDays[4];
					dayCell.dayID = 4;
				} else if ((weekDay - 3) % 7 === 0) {
					whichDay = theDays[5];
					dayCell.dayID = 5;
				} else if ((weekDay - 4) % 7 === 0) {
					whichDay = theDays[6]; 
					dayCell.dayID = 6;
				} else if ((weekDay - 5) % 7 === 0) {
					whichDay = theDays[0];
					dayCell.dayID = 0;
				} else if ((weekDay - 6) % 7 === 0) {
					whichDay = theDays[1];
					dayCell.dayID = 1;
				}
				dayCell.classList.add(whichDay);
			};

			//Decides how many days in month
			if (m === 0) {
				dayNum = "31";
			} 
				else if (m === 1) {
					dayNum = "28";
				}
					else if (m < 7) {
						if (m % 2 === 0) {
							dayNum = "31";
						} 
							else {
								dayNum = "30";
							}
						} 
						else {
							if (m % 2 === 0) {
								dayNum = "30";
							} 
							else {
								dayNum = "31";
							}
						}
				th.numberOfDays = dayNum;
				th.setAttribute('id', thisMonth);
				dayCol.innerHTML = (dayNum);
				dayCol.setAttribute('class', dayNum);
				// var butts = "'" + th.id + "'";
				// console.log(butts);
				clickFunction = function() {
					var thePlace = document.getElementById('monthDiv');
					console.log(thePlace);
					thePlace.innerHTML = '';
					var monthString = this.id;
					monthCal(monthString);
				}
				th.addEventListener('click', clickFunction, false);
		
			for (var numDays= 1; numDays<= dayNum; numDays++) {
				weekDay++;	
				dayCell = document.createElement('td');
				dayCell.innerHTML = (numDays);
				dayCell.setAttribute('class', 'day');
				dayCell.setAttribute('id', weekDay);
				dayOfWeek();
				tr.appendChild(dayCell);
			}		
					
			table.appendChild(tr);
		}
		container.appendChild(table);
	};
	this.monthCal = monthCal;
}

var board2;
function doStuff() {
	var board = new Months(document.getElementById('mainDiv'));
	// console.log(board.el() === document.body);

	board2 = new Months("months");
	board2.render();
	// board2.monthCal(31);
	// board2.monthCal("February");
	// board2.populate();

	$('body').flowtype();
}

window.onload = doStuff;


