const Country = require('./models/country.js');
const CountryView = require('./views/country_view.js');
const SelectView = require('./views/select_view.js');

  document.addEventListener('DOMContentLoaded', () => {


    const countryContainer = document.querySelector('div#countries-container');
    const countryView = new CountryView(countryContainer);
    countryView.bindEvents();

    const countrySelect = document.querySelector('#countries');
    const selectView = new SelectView(countrySelect);
    selectView.bindEvents();


    const country = new Country();
    country.getData();


  });
