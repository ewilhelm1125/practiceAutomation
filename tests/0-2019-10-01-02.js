var myData = [ //object in array //this will be used for your forEach loop at the bottom
    { // individual objects
        name: 'Karl Pfister',
        phone: '1234567890',
        title: 'Lord of the Class',
        number: '3',
        number2: '8'
    },
    { //another object
        name: 'Clark Kent',
        phone: '1234567890',
        title: 'SuperMan',
        number: '5',
        number2: '2'
    },
    { //another object
        name: 'Yo Momma Peaman',
        phone: '1234567890',
        title: 'Great British Baker',
        number: '1',
        number2: '9'
    },
    { //another object
        name: 'Billy LastName',
        phone: '1234567890',
        title: 'Generic',
        number: '7',
        number2: '5'
    }
]

var changeEmployee = (pageObjects, change) => { // this is a function // make sure you have page object in the first parameter
    pageObjects
        .click(`li[name="employee${change.number}"]`)
        .waitForElementVisible('@cardTitle')
        .getText('@cardTitle', function (result) {
            console.log(result.value) //logging stuff into the console
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

var page = {} 
module.exports = {
    beforeEach: browser => {
        page = browser.page.employeeManagerPage() //this is where you point your page object to
        page.navigate()
    },
    after: browser => {
        browser.end()
    },
    'Change Employee Test': browser => {
        myData.forEach(test => { //this is a forEach "function" it loops your (objects in array) located up top.
            changeEmployee(page, test) //first parameter will always be the page object, the second parameter is test
        })
    }
}