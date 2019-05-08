const { client } = require('nightwatch-cucumber');
const { Given, Then, When } = require('cucumber');
const baseUrl = "http://localhost:4200";
const markerImgUrl = "https://maps.gstatic.com/mapfiles/api-3/images/spotlight-poi2.png";

// Opening home page first time
Given(/^I open Earthquake site`s home page$/, () => {
  return client
    .url(baseUrl);
});

// Checking for title of website
Then(/^the title is "(.*?)"$/, (text) => {
  return client.assert.title(text);
});

// Checking click event should occur
Then(/^the Home page exists$/, () => {
  return client
  .waitForElementVisible('td[class="featureSet"]',20000)
  .assert.visible('td[class="featureSet"]')
  .click('td[class="featureSet"]')
  .waitForElementVisible('img[src="'+markerImgUrl+'"]',20000)
  .assert.visible('img[src="'+markerImgUrl+'"]');
});

