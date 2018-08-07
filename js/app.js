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
    this.simulatedAmountsOfCookiesPurchased.push(`${storeHours[hour]}: ${cookiesPurchasedEachHour} cookies`);
  }
  this.simulatedAmountsOfCookiesPurchased.push(`Total: ${this.totalCookiesForTheDay} cookies`);
};

// var averageCookiesPerHour = function () {
//   var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
//   storeHours.forEach(function(store) {
//     var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
//     this.totalCookiesForTheDay += cookiesPurchasedEachHour;
//     this.simulatedAmountsOfCookiesPurchased.push(`${store}: ${cookiesPurchasedEachHour} cookies`);
//   });
  // this.simulatedAmountsOfCookiesPurchased.push(`Total: ${this.totalCookiesForTheDay} cookies`);
// };

var displayTableData = function() {
  var storeInfoElement = document.getElementById(this.name);
  this.simulatedAmountsOfCookiesPurchased.forEach(function(cookieValue){
    var createLiEl = document.createElement('li');
    createLiEl.textContent = cookieValue;
    storeInfoElement.appendChild(createLiEl);
  });
};


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


var firstAndPike = new CreateStore(23, 65, 6.5, 'pike-store-info');
var seaTacAirport = new CreateStore(3, 24, 1.2, 'seatac-store-info');
var seattleCenter = new CreateStore(11, 38, 3.7, 'seattlecenter-store-info');
var capitolHill = new CreateStore(20, 38, 2.3, 'capitolhill-store-info');
var alki = new CreateStore(2, 16, 4.6, 'alki-store-info');


// function invocations
var main = function() {
  var storesArray = [firstAndPike, seaTacAirport, seattleCenter, capitolHill, alki];
  storesArray.forEach(function(store) {
    store.averageCookiesPerHour();
    store.displayTableData();
  });
};


main();
