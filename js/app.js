'use strict';

var storeHours = ['6am', '8am', '9am', '10am', '11am', '12pm', '1pm', '2pm', '3pm', '4pm', '5pm', '6pm', '7pm', '8pm'];
var firstAndPike = {
  minHourlyCustomers: 23,
  maxHourlyCustomers: 65,
  avgCookiesPerCustomer: 6.3,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  generateRandomNumber: function() {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  },
  averageCookiesPerHour: function() {
    for(var hour in storeHours) {
      var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
      this.totalCookiesForTheDay += cookiesPurchasedEachHour;
      this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
    }
    this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
  }
};


var seaTacAirport = {
  minHourlyCustomers: 3,
  maxHourlyCustomers: 24,
  avgCookiesPerCustomer: 1.2,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  generateRandomNumber: function() {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  },
  averageCookiesPerHour: function() {
    for(var hour in storeHours) {
      var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
      this.totalCookiesForTheDay += cookiesPurchasedEachHour;
      this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
    }
    this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
  }
};

var seattleCenter = {
  minHourlyCustomers: 11,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 3.7,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  generateRandomNumber: function() {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  },
  averageCookiesPerHour: function() {
    for(var hour in storeHours) {
      var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
      this.totalCookiesForTheDay += cookiesPurchasedEachHour;
      this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
    }
    this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
  }
};

var capitolHill = {
  minHourlyCustomers: 20,
  maxHourlyCustomers: 38,
  avgCookiesPerCustomer: 2.3,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  generateRandomNumber: function() {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  },
  averageCookiesPerHour: function() {
    for(var hour in storeHours) {
      var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
      this.totalCookiesForTheDay += cookiesPurchasedEachHour;
      this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
    }
    this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
  }
};

var alki = {
  minHourlyCustomers: 2,
  maxHourlyCustomers: 16,
  avgCookiesPerCustomer: 4.6,
  totalCookiesForTheDay: 0,
  simulatedAmountsOfCookiesPurchased: [],
  generateRandomNumber: function() {
    return Math.floor((Math.random() * (this.maxHourlyCustomers - this.minHourlyCustomers + 1) + this.minHourlyCustomers));
  },
  averageCookiesPerHour: function() {
    for(var hour in storeHours) {
      var cookiesPurchasedEachHour = Math.floor(this.generateRandomNumber() * this.avgCookiesPerCustomer);
      this.totalCookiesForTheDay += cookiesPurchasedEachHour;
      console.log(this.totalCookiesForTheDay);
      this.simulatedAmountsOfCookiesPurchased.push(storeHours[hour] + ': ' + cookiesPurchasedEachHour + ' cookies');
    }
    this.simulatedAmountsOfCookiesPurchased.push('Total: ' + this.totalCookiesForTheDay + ' cookies');
  }
};

//function invocations
var main = function() {
  firstAndPike.averageCookiesPerHour();
  seaTacAirport.averageCookiesPerHour();
  seattleCenter.averageCookiesPerHour();
  capitolHill.averageCookiesPerHour();
  alki.averageCookiesPerHour();
};

main();

//creating li tags for store object properties and appending them.
var storeInfoElement = document.getElementById('pike-store-info');
for(var el in firstAndPike.simulatedAmountsOfCookiesPurchased) {
  var createLiEl = document.createElement('li');
  createLiEl.textContent = firstAndPike.simulatedAmountsOfCookiesPurchased[el];
  storeInfoElement.appendChild(createLiEl);
}

var storeInfoElement = document.getElementById('seatac-store-info');
for(var el in seaTacAirport.simulatedAmountsOfCookiesPurchased) {
  var createLiEl = document.createElement('li');
  createLiEl.textContent = seaTacAirport.simulatedAmountsOfCookiesPurchased[el];
  storeInfoElement.appendChild(createLiEl);
}

var storeInfoElement = document.getElementById('seattlecenter-store-info');
for(var el in seattleCenter.simulatedAmountsOfCookiesPurchased) {
  var createLiEl = document.createElement('li');
  createLiEl.textContent = seattleCenter.simulatedAmountsOfCookiesPurchased[el];
  storeInfoElement.appendChild(createLiEl);
}

var storeInfoElement = document.getElementById('capitolhill-store-info');
for(var el in capitolHill.simulatedAmountsOfCookiesPurchased) {
  var createLiEl = document.createElement('li');
  createLiEl.textContent = capitolHill.simulatedAmountsOfCookiesPurchased[el];
  storeInfoElement.appendChild(createLiEl);
}

var storeInfoElement = document.getElementById('alki-store-info');
for(var el in alki.simulatedAmountsOfCookiesPurchased) {
  var createLiEl = document.createElement('li');
  createLiEl.textContent = alki.simulatedAmountsOfCookiesPurchased[el];
  storeInfoElement.appendChild(createLiEl);
}