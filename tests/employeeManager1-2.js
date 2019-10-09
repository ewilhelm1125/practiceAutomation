/**
 * Clicks an element whose text equals the `text` parameter - element must have a unique text value.
 * @param {object} browser - `browser`/`client` in use
 * @param {string} text - the text of the element that should be clicked
 */
var clickByText = (browser, text) => {
    browser
        .useXpath()
        .click(`//*[text()="${text}"]`)
        .useCss()
}

var employeePage
module.exports = {
        beforeEach: browser => {
            employeePage = browser.page.emp1()
            employeePage.navigate()
        },
    after: browser => {
        browser.end()
    },
    // 'Selectors': browser => {
    //     var searchBar = '.enter-location__input'
    //     var submitButton = '.enter-location__submit'
    //     var resultingCity = '.current-weather__location'
    //     browser
    //         .url('https://devmountain-qa.github.io/weatherman/build/index.html')
    //         .setValue(searchBar, 'San Diego')
    //         .click(submitButton)
    //         .waitForElementVisible(resultingCity)
    //         .verify.containsText(resultingCity, 'San Diego')
    // },
    'Test data': browser => {
        var newEmployeeName = 'Joe Blow'
        var newEmployeePhone = '5108675309'
        var newEmployeeTitle = 'Jerk of all things'
        browser
            .url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
            .waitForElementVisible('li[name="addEmployee"]')
            .click('li[name="addEmployee"]')
            .click('li[name="employee11"]')
            .clearValue('input[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', newEmployeeName)
            .clearValue('input[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newEmployeePhone)
            .clearValue('input[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newEmployeeTitle)
            .click('#saveBtn')
            .click('li[name="employee1"]')
            .expect.element('input[name="nameEntry"]').value.not.to.equal(newEmployeeName)
        browser
            .click('li[name="employee11"]')
            .expect.element('input[name="nameEntry"]').value.to.equal(newEmployeeName)
        browser.expect.element('input[name="phoneEntry"]').value.to.equal(newEmployeePhone)
        browser.expect.element('input[name="titleEntry"]').value.to.equal(newEmployeeTitle)
    }
}