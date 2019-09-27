module.exports = {
    beforeEach: browser => {
        browser.url('https://devmountain-qa.github.io/employee-manager/1.2_Version/index.html')
    },
    after: browser => {
        browser.end()
    },
    'Max error message check': browser => {
        var newPerson = {name:'Robert Plant', phone: '5108675309', title:'rockstar'}
        browser
            .click('[name="employee1"]')
            .click('[name="nameEntry"]')
            .clearValue('[name="nameEntry"]')
            .setValue('[name="nameEntry"]', newPerson.name)
            .click('[name="phoneEntry"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', newPerson.phone)
            .click('[name="titleEntry"]')
            .clearValue('[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', newPerson.title)
            .click('[name="save"]')
            .verify.visible('.errorCard')
            .click('[name="cancel"]')
    },
    'No entry error message check': browser => {
        browser
            .click('[name="employee1"]')
            .click('[name="nameEntry"]')
            .clearValue('[name="nameEntry"]')
            .click('[name="phoneEntry"]')
            .clearValue('[name="phoneEntry"]')
            .click('[name="titleEntry"]')
            .clearValue('[name="titleEntry"]')
            .setValue('input[name="phoneEntry"]', ' ')
            .click('[name="save"]')
            .pause(10000)
            .verify.visible('.errorCard') 
    
    },
    'Entry check': browser => {
        browser
            .click('[name="employee3"]')
            .click('[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 's')
            .click('[name="save"]')
            .verify.value('[name="nameEntry"]','Phillip Weavers')
    },
    'Entry check Cancel': browser => {
        browser
            .click('[name="employee4"]')
            .click('[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'zzzzz')
            .click('[name="cancel"]')
            .verify.value('[name="nameEntry"]','Teresa Osborne')
    },
    'Add Employee check' : browser => {
        browser
            .click('[name="addEmployee"]')
            .verify.value('[name="employee11"]','0')
            .click('[name="employee11"]')
            .clearValue('[name="nameEntry"]')
            .setValue('input[name="nameEntry"]', 'Bartholomew Persimmon')
            .click('[name="phoneEntry"]')
            .clearValue('[name="phoneEntry"]')
            .setValue('input[name="phoneEntry"]', '4158675309')
            .click('[name="titleEntry"]')
            .clearValue('[name="titleEntry"]')
            .setValue('input[name="titleEntry"]', 'Supreme Jerk of the Company')
            .click('[name="save"]')
            .verify.value('[name="nameEntry"]','Bartholomew Persimmon')
            .verify.value('[name="phoneEntry"]','4158675309')
            .verify.value('[name="titleEntry"]','Supreme Jerk of the Company')
    }
}