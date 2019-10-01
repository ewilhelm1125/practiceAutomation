/**
 * Gets the employee's ID and makes sure it's not less than 1.
 */
var checkID = function (browser) {
    browser
        .getText('#employeeID', function (result) {
            let idNumber = Number(result.value.slice(3))
            browser
                .verify.ok(idNumber > 0, `The ID (${idNumber}) is a positive number.`)
                .verify.ok(idNumber % 1 === 0, `The ID (${idNumber}) is a whole number.`)
        })
}
module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.0_Version/index.html')
    },
    after: browser => browser.end(),
    'Check an employee': browser => {
        browser
            .useXpath()
            .click('//li[text()="Teresa Osborne"]')
            .useCss()
            .expect.element('#employeeTitle').text.to.equal('Teresa Osborne').before(500)
        checkID(browser)
    }
}