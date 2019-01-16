const PubSub = require('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
}

CountryView.prototype.bindEvents = function () {
  PubSub.subscribe('Country:country-loaded', (evt) => {
    this.render(evt.detail);
  });
}

CountryView.prototype.render = function (country) {

 this.container.innerHTML = '';

 const countryName = this.createElement('h2', country.name);
 this.container.appendChild(countryName);

 const countryTopLevelDomain = this.createElement('p', country.TopLevelDomain);
 this.container.appendChild(countryTopLevelDomain);

 const countryCapital = this.createElement('p', country.Capital);
 this.container.appendChild(countryCapital);

 const countryTimezones = this.createElement('p', country.Timezones);
 this.container.appendChild(countryTimezones);


 const countryList = this.createInstrumentList(country.name);
 this.container.appendChild(countryList);
};

module.exports = CountryView;
