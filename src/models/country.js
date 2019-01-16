const RequestHelper = require('../helpers/request_helper.js');
const PubSub = require('../helpers/pub_sub.js');

const Country = function () {
  this.text = null;

}

Country.prototype.getData = function () {
  const request = new RequestHelper('https://restcountries.eu/rest/v2/all');
  request.get((data) =>
{
debugger
  this.text = data;
  PubSub.publish('Country:all-countries-ready', this.text);
});
}

module.exports = Country;
