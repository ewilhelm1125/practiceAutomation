
module.exports = {
    beforeEach: browser => {
        browser.url('https://www.livepickleball.com/#/')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Checking Text and Flow': browser => {
        browser
            .expect.element('.volunteerText').text.to.equal('"Be a part of the action!"')
        browser
            .click('[href="#/userDashboard"]')
            .setValue('[type="text"]', 'qatest')
            .setValue('[type="password"]', 'testpass')
            .click('[class="btn btn-primary"]')
            .pause(3000)
    }
}