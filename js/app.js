'use strict';


//helper functions to populate the list
var generateRandomNumber = function(max, min) {
  return Math.floor((Math.random() * (max - min + 1) + min));
};


var averageCookiesPerStoreHours = function(max, min, avg) {
  var storeHoursOfOperation = ['6am', '7am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
  for(var i = 0; i < storeHoursOfOperation.length; i++) {
    var cookiesPurchasedEachHour = Math.floor(generateRandomNumber(max, min) * avg);
    this.totalCookiesForTheDay += cookiesPurchasedEachHour;
    this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
  }
  this.simulatedAmountsOfCookiesPurchased.push(this.totalCookiesForTheDay);
};


// displayTableHeaders();
var displayTableData = function() {
  var storeInfoElement = document.getElementById('tbodyTable');
  var createTrElement = document.createElement('tr');
  createTrElement.textContent = this.name;
  storeInfoElement.appendChild(createTrElement);
  this.simulatedAmountsOfCookiesPurchased.forEach(function(valueOfCookie){
    var createLiElement = document.createElement('td');
    createLiElement.textContent = valueOfCookie;
    createTrElement.appendChild(createLiElement);
  });
};


//add store to table list
var createAndAddNewUserToTable = document.getElementById('storeForm');
createAndAddNewUserToTable.addEventListener('submit', function(el) {
  el.preventDefault();
  // document.getElementById('deleteTable').deleteTFoot();
  var storeCreatedFromForm = new CreateStore( Number(el.target.minHourly.value), Number(el.target.maxHourly.value), Number(el.target.avgHourly.value), el.target.storeName.value);
  individualStoresArray.push(storeCreatedFromForm);
  storeCreatedFromForm.averageCookiesPerStoreHours(storeCreatedFromForm.maxHourlyCustomers, storeCreatedFromForm.minHourlyCustomers, storeCreatedFromForm.avgCookiesPerCustomer);
  storeCreatedFromForm.displayTableData();
  populateTheTfooterWithDailyTotals();
  createAndAddNewUserToTable.reset();
});


//grabs daily totals off the dom and adds them to the table
var calculateAndCreateDailyTotals = function (column) {
  var tableBody = document.getElementsByTagName('tbody').item(0);
  var specificColumnOnTable = column;
  var calculatedColumnTotal = 0;
  for(var t = 0; t < individualStoresArray.length; t++) {
    var thisTrElem = tableBody.rows[t];
    var thisTdElem = thisTrElem.cells[specificColumnOnTable];
    calculatedColumnTotal += Number(thisTdElem.textContent);
  }
  var createLiElement = document.createElement('td');
  createLiElement.textContent = calculatedColumnTotal;
  return createLiElement;
};


//iteration that populates the footer
function populateTheTfooterWithDailyTotals() {
  var createTotalElement = document.createElement('tr');
  var storeInfoElementForTfoot = document.getElementById('tfootTable');
  if(storeInfoElementForTfoot.firstChild !== null) {
    storeInfoElementForTfoot.removeChild(storeInfoElementForTfoot.firstChild);
  }
  createTotalElement.textContent = 'Total:';
  storeInfoElementForTfoot.appendChild(createTotalElement);
  for (var i = 0; i < 16; i++) {
    createTotalElement.appendChild(calculateAndCreateDailyTotals(i));
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
  averageCookiesPerStoreHours: averageCookiesPerStoreHours,
  displayTableData: displayTableData
};


//setting instances of CreateStore object constructor
var firstAndPike = new CreateStore(23, 65, 6.5, '1st and Pike');
var seaTacAirport = new CreateStore(3, 24, 1.2, 'SeaTac Center');
var seattleCenter = new CreateStore(11, 38, 3.7, 'Seattle Center');
var capitolHill = new CreateStore(20, 38, 2.3, 'Capitol Hill');
var alki = new CreateStore(2, 16, 4.6, 'Alki');


//function invocations of averageCookies and displayTable
var individualStoresArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
var main = function() {
  individualStoresArray.forEach(function(store) {
    store.averageCookiesPerStoreHours(store.maxHourlyCustomers, store.minHourlyCustomers, store.avgCookiesPerCustomer);
    store.displayTableData();
  });
  populateTheTfooterWithDailyTotals();
};


main();
