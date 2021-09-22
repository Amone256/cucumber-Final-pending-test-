const assert = require('assert');
const { Given, When, Then } = require('@cucumber/cucumber');
let app = require('../../../src/app');

Given('today is wednesday', function () {
    this.today = 'Wednesday';
  });

Given('today is Friday', function () {
    this.today = 'Friday';
});

When('I ask wether its Friday yet', function () {
    this.actualAnswer = app.isItFriday(this.today);
  });

Then('I should be told {string}', function (expectedAnswer) {
    assert.equal(this.actualAnswer, expectedAnswer)
  });