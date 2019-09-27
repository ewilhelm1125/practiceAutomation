module.exports = {
    beforeEach: browser => {
        browser.url('http://alpha.yoodlize.com')
    },
    after: browser => {
        browser.end()
    },
    'See all check': browser => {
        browser
            .useXpath()
            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')   
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[1]')
    },
    'See all check2': browser => {
        browser
            .useXpath()
            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')   
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[2]')
    },
    'See all check3': browser => {
        browser
            .useXpath()
            .waitForElementPresent('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')   
            .click('(//div[@class="sc-jqCOkK djSgtl sc-gqjmRU fmVgeN"])[3]')

    },
}