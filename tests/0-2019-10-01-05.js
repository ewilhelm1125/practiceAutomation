var changeEmployee = (pageObjects, change) => {
    pageObjects
        .click(`li[name="employee${change.number}"]`)
        .waitForElementVisible('@cardTitle')
        .getText('@cardTitle', function (result) {
            console.log(result.value)
        })
        .clearValue('@nameField')
        .setValue('@nameField', change.name)
        .clearValue('@phoneField')
        .setValue('@phoneField', change.phone)
        .clearValue('@titleField')
        .setValue('@titleField', change.title)
        .click('@saveButton')
        .click(`li[name="employee${change.number2}"]`)
        .expect.element('@cardTitle').text.not.to.equal(change.name)
    pageObjects
        .click(`li[name="employee${change.number}"]`)
        .verify.valueContains('@nameField', change.name)
        .verify.valueContains('@phoneField', change.phone)
        .verify.valueContains('@titleField', change.title)
}
var myData = [
    {
        name: 'Karl Pfister',
        phone: '1234567890',
        title: 'Lord of the Class',
        number: '3',
        number2: '8'
    },
    {
        name: 'Clark Kent',
        phone: '1234567890',
        title: 'SuperMan',
        number: '5',
        number2: '2'
    },
    {
        name: 'Yo Momma Peaman',
        phone: '1234567890',
        title: 'Great British Baker',
        number: '1',
        number2: '9'
    },
    {
        name: 'Billy LastName',
        phone: '1234567890',
        title: 'Generic',
        number: '7',
        number2: '5'
    }
]
var page = {}
module.exports = {
    beforeEach: browser => {
        page = browser.page.emPage()
        page.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Change Employee Test': browser => {
        myData.forEach(test => {
            changeEmployee(page, test)
        })
    }
}