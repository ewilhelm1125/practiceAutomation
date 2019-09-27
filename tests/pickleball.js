module.exports = {
    beforeEach: browser => {
        browser.url('https://livepickleball.com')
        
    },
    after: browser => {
        browser.end()
    },
    'banner check': browser =>{
        .waitForElementVisible('h5')
        .verify.containsText('[name="volunteerText"]', 'Be a part of the action!')

    },

}