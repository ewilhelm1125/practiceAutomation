module.exports = {
    beforeEach: browser => {
        browser.url('{yourURLHere}')
    },
    after: browser => {
        browser.end()
    },
    'Your test here': browser => {
        .pause(30000)

    }
}