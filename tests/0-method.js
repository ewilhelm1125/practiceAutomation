var mathMethods = {
    add: function (num1, num2) {
        return num1 + num2
    },
    subtract: function (num1, num2) {
        return num1 - num2
    },
    divide: function (num1, num2) {
        return num1 / num2
    },
    multiply: function (num1, num2) {
        return num1 * num2
    },
    myMethod: function (browser, name) {
        browser
            .clearValue()
            .setValue('selector', name)
    }
}
var myFunction = (browser, name) => {
    browser
        .clearValue()
        .setValue('selector', name)
}
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
    },
    'check addition': browser => {
        browser
            .setValue('input[type="text"]', ['2+2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.add(2, 2))
    },
    'check subtraction': browser => {
        browser
            .setValue('input[type="text"]', ['32-5', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.subtract(32, 5))
    },
    'check division': browser => {
        browser
            .setValue('input[type="text"]', ['8/2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.divide(8, 2))
    },
    'check multiplication': browser => {
        browser
            .setValue('input[type="text"]', ['2345.3333*2', browser.Keys.ENTER])
            .waitForElementPresent('#cwos', 2000)
            .expect.element('#cwos').text.to.contain(mathMethods.multiply(2345.3333, 2))
    },
    after: browser => browser.end()
}
