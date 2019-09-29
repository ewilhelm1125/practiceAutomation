
module.exports = {
    beforeEach: browser => {
        browser.url('http://www.google.com')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Google Search': browser => {
        browser
            //this is the original one
            .expect.url().to.contain('www.google.com')
        browser
            // .setValue('input[name="q"]', ['Puppies', browser.Keys.ENTER])
            // .waitForElementVisible('#res', 8000) //#res == result page
            // .verify.visible('#res')
            // .verify.value('input[name="q"]', 'Puppies')
            // .verify.containsText('#res', 'Puppies')
            // .pause(800)
            //This is the click submit
            .setValue('input[name="q"]', 'Dog')
            .pause(1000)
            .useXpath()
            .click('//input[@class="gNO89b"]') //Google Search button
            //.waitForElementVisible('#res')//#res == result
            .pause(1000)
            .useCss()
            .verify.containsText('#res', 'Dog')
            .pause(1000)
            //this is the i'm feeling lucky
            // .setValue('input[name="q"]', 'hungry')
            // .useXpath()
            // .click('//input[@class="RNmpXc"]') //I'm Feeling Lucky button
            // .useCss()
            // .waitForElementVisible('#res', 10000) //#res == result
            // .verify.containsText('#res', 'hungry')
            // .pause(3000)
    }
}
