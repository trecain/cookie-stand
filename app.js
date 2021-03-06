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
      this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
    }
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
      this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
    }
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
      this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
    }
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
      this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
    }
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
      this.simulatedAmountsOfCookiesPurchased.push(cookiesPurchasedEachHour);
    }
  }
};

for(var el in firstAndPike.simulatedAmountsOfCookiesPurchased) {
  console.log(firstAndPike.simulatedAmountsOfCookiesPurchased[el]);
}

//function invocations
var main = function() {
  firstAndPike.averageCookiesPerHour();
  seaTacAirport.averageCookiesPerHour();
  seattleCenter.averageCookiesPerHour();
  capitolHill.averageCookiesPerHour();
  alki.averageCookiesPerHour();
};

main();