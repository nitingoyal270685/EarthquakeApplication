const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');

Given(/^I open Earthquake site`s home page$/, () => {
  return client
    .url('http://localhost:4200');
});

Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text);
});

Then(/^the Home page exists$/, () => {
  return client
  .waitForElementVisible('td[class="featureSet"]',20000)
  .assert.visible('td[class="featureSet"]')
  .click('td[class="featureSet"]')
  .waitForElementVisible('img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"]',20000)
  .assert.visible('img[src="https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png"]');
});

