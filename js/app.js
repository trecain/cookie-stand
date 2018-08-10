'use strict';


var storeHours = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];


//helper functions to populate the list
var generateRandomNumber = function(max, min) {
  return Math.floor((Math.random() * (max - min + 1) + min));
};


var averageCookiesPerHour = function(max, min, avg) {
  for(var hour in storeHours) {  
    var cookiesPurchasedEachHour = Math.floor(generateRandomNumber(max, min) * avg);
    this.totalCookiesForTheDay += cookiesPurchasedEachHour;
    this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
  }
  this.simulatedAmountsOfCookiesPurchased.push(this.totalCookiesForTheDay);
};


// displayTableHeaders();
var displayTableData = function() {
  var storeInfoElement = document.getElementById('tbodyTable');
  var createTrEl = document.createElement('tr');
  createTrEl.textContent = this.name;
  storeInfoElement.appendChild(createTrEl);
  this.simulatedAmountsOfCookiesPurchased.forEach(function(cookieValue){
    var createLiEl = document.createElement('td');
    createLiEl.textContent = cookieValue;
    createTrEl.appendChild(createLiEl);
  });
};


//grabs daily totals off the dom and adds them to the table
var dailyTotalsFunction = function (column) {
  var tableBody = document.getElementsByTagName('tbody').item(0);
  var whichColumn = column;
  var total = 0;
  for(var t = 0; t < storesArray.length; t++) {
    var thisTrElem = tableBody.rows[t];
    var thisTdElem = thisTrElem.cells[whichColumn];
    total += Number(thisTdElem.textContent);
  }
  var createLiEl = document.createElement('td');
  createLiEl.textContent = total;
  return createLiEl;
};


//iteration that populates the footer
function populateTheTfooterWithDailyTotals() {
  var createTotEl = document.createElement('tr');
  var storeInfoElementTfoot = document.getElementById('tfootTable');
  if(storeInfoElementTfoot.firstChild !== null) {
    storeInfoElementTfoot.removeChild(storeInfoElementTfoot.firstChild);
  }
  createTotEl.textContent = 'Total:';
  storeInfoElementTfoot.appendChild(createTotEl);
  for (var i = 0; i < 16; i++) {
    createTotEl.appendChild(dailyTotalsFunction(i));
  }
}


//object literals for each store
var CreateStore = function(minHourlyCustomers, maxHourlyCustomers, avgCookiesPerCustomer, name) {
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
var firstAndPike = new CreateStore(23, 65, 6.5, '1st and Pike');
var seaTacAirport = new CreateStore(3, 24, 1.2, 'SeaTac Center');
var seattleCenter = new CreateStore(11, 38, 3.7, 'Seattle Center');
var capitolHill = new CreateStore(20, 38, 2.3, 'Capitol Hill');
var alki = new CreateStore(2, 16, 4.6, 'Alki');


//add store to table list
var formEl = document.getElementById('storeForm');
formEl.addEventListener('submit', function(el) {
  el.preventDefault();
  // document.getElementById('deleteTable').deleteTFoot();
  var storeCreatedFromForm = new CreateStore( Number(el.target.minHourly.value), Number(el.target.maxHourly.value), Number(el.target.avgHourly.value), el.target.storeName.value);
  storesArray.push(storeCreatedFromForm);
  storeCreatedFromForm.averageCookiesPerHour(storeCreatedFromForm.maxHourlyCustomers, storeCreatedFromForm.minHourlyCustomers, storeCreatedFromForm.avgCookiesPerCustomer);
  storeCreatedFromForm.displayTableData();
  populateTheTfooterWithDailyTotals();
  formEl.reset();
});


//function invocations of averageCookies and displayTable
var storesArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
var main = function() {
  storesArray.forEach(function(store) {
    store.averageCookiesPerHour(store.maxHourlyCustomers, store.minHourlyCustomers, store.avgCookiesPerCustomer);
    store.displayTableData();
  });
  populateTheTfooterWithDailyTotals();
};


main();
