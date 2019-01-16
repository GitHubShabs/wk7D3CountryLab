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
  const p = document.createElement('p');
  p.textContent = country;
  this.container.appendChild(p);
}

module.exports = CountryView;
