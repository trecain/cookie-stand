'use strict';

var storeHours = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];

//helper functions to populate the list
var generateRandomNumber = function() {
  return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
};

var averageCookiesPerHour = function() {
  for(var hour in storeHours) {
    var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
    this.totalCookiesForTheDay += cookiesPurchasedEachHour;
    console.log(this.totalCookiesForTheDay);
    this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
  }
  this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
};

var displayTableData = function() {
  var storeInfoElement = document.getElementById(this.name);
  for(var el in this.simulatedAmountsOfCookiesPurchased) {
    var createLiEl = document.createElement('li');
    createLiEl.textContent = this.simulatedAmountsOfCookiesPurchased[el];
    storeInfoElement.appendChild(createLiEl);
  }
};

//object literals for each store
var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  name: 'pike-store-info',
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};


var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  name: 'seatac-store-info',
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};

var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  name: 'seattlecenter-store-info',
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};

var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  name: 'capitolhill-store-info',
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};

var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  name: 'alki-store-info',
  generateRandomNumber: generateRandomNumber,
  averageCookiesPerHour: averageCookiesPerHour,
  displayTableData: displayTableData
};

//function invocations
var main = function() {
  var storesArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
  storesArray.forEach(function(store) {
    store.averageCookiesPerHour();
    store.displayTableData();
  });
};

main();
