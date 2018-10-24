const PubSub = require('../helpers/pub_sub.js');

const SelectCountry = function (element) {
  this.element = element;
};

SelectCountry.prototype.bindEvents = function() {
  PubSub.subscribe('Countries:data-ready', (evt) => {
    const allCountries = evt.detail;
    this.populate(allCountries);
  });

  this.element.addEventListener('change', (evt) => {
    const selectedCountry = evt.target.value;
    PubSub.publish('SelectCountry:change', selectedCountry);
  });
};

SelectCountry.prototype.populate = function (countryData) {
  countryData.forEach((country, index) => {
    const option = document.createElement('option');
    option.textContent = country.name;
    option.value = index;
    this.element.appendChild(option);
  });
};

module.exports = SelectCountry;
