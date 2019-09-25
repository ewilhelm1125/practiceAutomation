module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
        
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        browser
            .verify.urlContains('google')
            .setValue('input[name="q"]', ['Cats', browser.Keys.ENTER])  
            .waitForElementVisible('#res')
            .verify.valueContains('[name="q"]','Cats')
            .verify.containsText('#res', 'Cats')
            
    }
}