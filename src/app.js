const Country = require('./models/country.js')
const SelectCountry = require('./views/select_country.js')
const CountryView = require('./views/country_view.js')


document.addEventListener('DOMContentLoaded', () => {
  console.log('JavaScript Loaded');

  const country = new Country();
  country.bindEvents();


  const selectElement = document.querySelector('select#countries');
  const selectCountry = new SelectCountry(selectElement);
  selectCountry.bindEvents();

  const displayElement = document.querySelector('#country');
  const countryView = new CountryView(displayElement);
  countryView.bindEvents();

});
