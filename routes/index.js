var express = require('express');
var router = express.Router();

const {Builder, By, Key, until} = require('selenium-webdriver');

(async function randomTest() {
    console.log('function exectued..');
    let driver = await new Builder().forBrowser('chrome').build();
    console.log('Built driver..');
    try {
        await driver.get('http://www.google.com');
        await driver.findElement(By.name('q')).sendKeys('webdriver', Key.RETURN);
        await driver.wait(until.titleIs('webdriver - Google Search'), 1000);
    } catch(e){
        console.log('Some error in the code..',e);
    } finally {
        await driver.quit();
    }
})();

module.exports = router;
