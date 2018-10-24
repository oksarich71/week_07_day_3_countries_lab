const PubSub = require ('../helpers/pub_sub.js');

const CountryView = function (container) {
  this.container = container;
};

CountryView.prototype.bindEvents = function () {
    PubSub.subscribe('Countries: selected-country-ready', (evt) => {
      const individualCountry = evt.detail;
      this.render(individualCountry);
    });
};

CountryView.prototype.render = function (country) {
  this.container.innerHTML = '';

  const countryName = this.createTextElement('h2', country.name);
  this.container.appendChild(countryName);

  const countryRegion = this.createTextElement('p', country.region);
  this.container.appendChild(countryRegion);

  const countryFlag = this.createImage(country.flag);
  this.container.appendChild(countryFlag);

};

CountryView.prototype.createTextElement = function (elementType, data) {
  const element = document.createElement(elementType);
  element.textContent = data;
  return element;
};


CountryView.prototype.createImage = function (countryFlagUrl) {
  const img = document.createElement('img');
  img.classList.add('medium-image');
  img.src = countryFlagUrl;
  return img;
};

module.exports = CountryView;
