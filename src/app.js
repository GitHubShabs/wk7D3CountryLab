const Country = require('./models/country.js');
const CountryView = require('./views/country_view.js');

  document.addEventListener('DOMContentLoaded', () => {
    const country = new Country();
    country.getData();

    const countryContainer = document.querySelector('div#countries-container');
    const countryView = new CountryView(countryContainer);
    countryView.bindEvents();
  });
