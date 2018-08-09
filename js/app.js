'use strict';


var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var stores =[];


//helper functions to populate the list
var generateRandomNumber = function(max, min) {
  return Math.floor((Math.random() * (max - min + 1) + min));
};


//grabs daily totals off the dom and adds them to the table
var dailyTotalsFunction = function (column) {
  var tableBody = document.getElementsByTagName('tbody').item(0);
  var whichColumn = column;
  var total = 0;
  for(var t = 0; t < 5; t++) {
    var thisTrElem = tableBody.rows[t];
    var thisTdElem = thisTrElem.cells[whichColumn];
    total += Number(thisTdElem.textContent);
  }
  var storeInfoElement = document.getElementById('daytotals');
  var createLiEl = document.createElement('td');
  createLiEl.textContent = total;
  storeInfoElement.appendChild(createLiEl);
};


//iteration that populates the table
function names() {
  for (var i = 1; i < 17; i++) {
    dailyTotalsFunction(i);
  }
}


var averageCookiesPerHour = function() {
  for(var hour in storeHours) {
    var cookiesPurchasedEachHour = Math.floor(generateRandomNumber(this.maxHourlyCustomers, this.minHourlyCustomers) * this.avgCookiesPerCustomer);
    this.totalCookiesForTheDay += cookiesPurchasedEachHour;
    this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
  }
  this.simulatedAmountsOfCookiesPurchased.push(this.totalCookiesForTheDay);
};


// displayTableHeaders();
var displayTableData = function() {
  var storeInfoElement = document.getElementById(this.name);
  console.log('sim cook', this.simulatedAmountsOfCookiesPurchased.length);
  this.simulatedAmountsOfCookiesPurchased.forEach(function(cookieValue){
    var createLiEl = document.createElement('td');
    createLiEl.textContent = cookieValue;
    storeInfoElement.appendChild(createLiEl);
  });
};



//object literals for each store
var CreateStore = function(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, name, column) {
  this.minHourlyCustomers = minHourlyCustomers;
  this.maxHourlyCustomers = maxHourlyCustomers;
  this.avgCookiesPerCustomer = avgCookiesPerCustomer;
  this.totalCookiesForTheDay = 0;
  this.simulatedAmountsOfCookiesPurchased = [];
  this.name = name;
};


//added methods on object constructor prototype
CreateStore.prototype = {
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};


//setting instances of CreateStore object constructor
var firstAndPike = new CreateStore(23, 65, 6.5, 'pike-store-info');
var seaTacAirport = new CreateStore(3, 24, 1.2, 'seatac-store-info');
var seattleCenter = new CreateStore(11, 38, 3.7, 'seattlecenter-store-info');
var capitolHill = new CreateStore(20, 38, 2.3, 'capitolhill-store-info');
var alki = new CreateStore(2, 16, 4.6, 'alki-store-info');


//function invocations of averageCookies and displayTable
var storesArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
var main = function() {

  storesArray.forEach(function(store) {
    store.averageCookiesPerHour();
    store.displayTableData();
  });
  names();
  console.log('stores', stores);
};


main();
