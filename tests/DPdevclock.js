module.exports = {
    beforeEach: browser => {
        browser.url('https://cards-beta.devclock.com/login')
            .waitForElementPresent('body', 8000)
    },
    after: browser => {
        browser.end()
    },
    'Can log in with an existing account': browser => {
        browser
            .verify.urlContains('https://cards-beta.devclock.com/login')
            .setValue('input[type="email"]', 'test@devmtnqa.com')
            .verify.value('input[type="email"]', 'test@devmtnqa.com')
            .setValue('input[type="password"]', 'testpass')
            .verify.value('input[type="password"]', 'testpass')
            .useXpath()
            .click('//button[contains(@data-bind, "login")]')
            .expect.element('//label[contains(@data-bind, "logout")]').to.be.visible.before(20000)
    }
}