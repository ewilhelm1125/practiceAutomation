var addFromEditTest = require('../testAssets/editTest')

let manager = {}

module.exports = {
    beforeEach: browser => {
        manager = browser.page.employeeManagerPage()
        manager.navigate()
            .expect.element('@versionNumber').text.to.equal('Version 1.2')
    },
    after: browser => {
        browser.end()
    },
    'It can add an employee': browser => {
        addFromEditTest(manager, 'Bernice Ortiz', {name: 'Karl Pfister', phone: '1234567890', title:'Good Person'}, 'Lou White')
    }
        //     manager
    //         .click('@addButton')
    //         .clickEmployee('New Employee')
    //         .expect.element('@cardTitle').text.to.equal('New Employee')
    // },
    // 'It can edit a new employee': browser => {
    //     manager
    //         .click('@addButton')
    //         .clickEmployee('New Employee')
    //         .editEmployee({ name: 'Hank Hill', phone: '0000000000' })
    //         .click('@saveButton')
    //         .expect.element('@cardTitle').text.to.equal('Hank Hill')
    //     manager
    //         .clickEmployee('Dollie Berry')
    //         .expect.element('@cardTitle').text.to.equal('Dollie Berry')
    //     manager
    //         .clickEmployee('Hank Hill')
    //         .expect.element('@cardTitle').text.to.equal('Hank Hill')
    // },
    // 'It can edit an existing employee': browser => {
    //     manager
    //         .clickEmployee('Dollie Berry')
    //         .editEmployee({ title: 'Master and Commander' })
    //         .click('@saveButton')
    //         .clickEmployee('Bernice Ortiz')
    //         .expect.element('@cardTitle').text.to.equal('Bernice Ortiz')
    //     manager
    //         .clickEmployee('Dollie Berry')
    //         .expect.element('@titleField').value.to.equal('Master and Commander')
    // }

}