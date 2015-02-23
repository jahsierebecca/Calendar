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
			th.innerHTML = (thisMonth);
			tr.appendChild(th);

			var dayCol = document.createElement('td');
			var dayNum;

			//decides which day of the week
			var dayOfWeek = function() {
				if ((weekDay) % 7 === 0) {
					whichDay = theDays[2];
				} else if ((weekDay - 1) % 7 === 0) {
					whichDay = theDays[3];
				} else if ((weekDay - 2) % 7 === 0) {
					whichDay = theDays[4];
				} else if ((weekDay - 3) % 7 === 0) {
					whichDay = theDays[5];
				} else if ((weekDay - 4) % 7 === 0) {
					whichDay = theDays[6];
				} else if ((weekDay - 5) % 7 === 0) {
					whichDay = theDays[7];
				} else if ((weekDay - 6) % 7 === 0) {
					whichDay = theDays[0];
				} else if ((weekDay - 7) % 7 === 0) {
					whichDay = theDays[1];
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
				// tr.appendChild(dayCol);
					// if (m===1) {
					// 	dayNum = 28;
					// }
					// else for () 


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

	var monthCal = function(monthID) {
		var theMonth = document.getElementById(monthID);
		var monthLength = theMonth.numberOfDays;
		console.log(monthLength);
		var day1 = theMonth.nextSibling.id;
		var zoomMonth = document.createElement('table');
		zoomMonth.setAttribute('class', 'monthTable');
		var numCols = 7;
		var numRows = Math.ceil(monthLength/7);
		// var numRows = 4;

		//sets number of rows
		for (var r = 0; r < numRows; r++) {
			//makes day of week labels
			for (var p = 0; p < numCols; p++) {
				var th = document.createElement('th');
				th.innerHTML = (theDays[p]);
				zoomMonth.appendChild(th);
			}


			//makes rows
			var tr = document.createElement('tr');
			for (var l = 0; l < numCols; l++) {
				// for (var m = 0; m < monthLength; m++) {
					//makes cells
					var td = document.createElement('td'); 
					td.innerHTML = (day1);
					tr.appendChild(td);
					day1++;
					}
				zoomMonth.appendChild(tr);
		 	// }
		 }
		 	container.appendChild(zoomMonth);
		 };
			
	

	var clickMonth = document.getElementsByTagName('th');
		// monthCal()
	

	this.monthCal = monthCal;
}

				// var eX = document.createTextNode('');
				// eX.nodeValue = "X";
				// xCell.appendChild(eX);


var board2;
function doStuff() {
	var board = new Months(document.getElementById('mainDiv'));
	// console.log(board.el() === document.body);

	board2 = new Months("months");
	board2.render();
	// board2.monthCal(31);
	board2.monthCal("June");
	// board2.monthCal("February");
	// board2.populate();
}

window.onload = doStuff;
