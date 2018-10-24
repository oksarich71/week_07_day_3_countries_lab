const PubSub = require('../helpers/pub_sub.js');
const RequestHelper = require('../helpers/request_helper.js')

const Country = function () {
  this.country = null;
}

Country.prototype.bindEvents = function() {
    this.getData();

    PubSub.subscribe('SelectCountry:change', (evt) => {
        const selectedCountry = evt.detail;
        this.publishCountryDetail(selectedCountry);
    });
};

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((countryData) => {

    let countryDetails = [];

    for(i=0; i< countryData.length; i++){
      //name, region, flag
      let country = {name: countryData[i].name, region: countryData[i].region, flag: countryData[i].flag};
      countryDetails.push(country);
    }
    this.country = countryDetails;
    PubSub.publish('Countries:data-ready', this.country);
  })

  };


Country.prototype.publishCountryDetail = function(selectedCountry) {
  const chosenCountry = this.country[selectedCountry];
  PubSub.publish('Countries: selected-country-ready', chosenCountry)
};



module.exports = Country;
