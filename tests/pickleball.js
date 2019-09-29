module.exports = {
    beforeEach: browser => {
        browser.url('https://livepickleball.com')
        
    },
    after: browser => {
        browser.end()
    },
    'banner check': browser =>{
        
        browser
            .waitForElementVisible('.volunteerText')
            .verify.containsText('[class="volunteerText"]', 'Be a part of the action!')
            .click('[href="#/userDashboard"]')
            .setValue('[type="text"]', 'qatest')
            .setValue('[type="password"]', 'testpass')
            .click('[class="btn btn-primary"]')
            .pause(3000)

    },

}