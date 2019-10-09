// var searchWeather = (pageObject, search, result) => {
//     // steps for your search go here
//  }


var myData = [ 
    {search: '84601', result: 'Provo'}, 
    {search: 'San Francisco', result: 'San Francisco'},
    {search: 'London', result: 'London'} 
 ]



var searchWeather = (pageObjects, data) => {
    pageObjects
        .setValue('@searchBar', data.search)
        .click('@searchButton')
        .waitForElementVisible('@resultCity')
        .verify.containsText('@resultCity',data.result)
        .api.refresh()
}

var weatherPage     

module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },

    'Search for city': browser => {
        myData.forEach(test => {
            searchWeather(weatherPage, test)
        })

        searchWeather(weatherPage, myData[0])

        // searchWeather (weatherPage, myData[0])
        // weatherPage
        //     .setValue('@searchBar', ['San Diego', browser.Keys.ENTER])
        //     .waitForElementPresent('@resultCity')
        //     .expect.element('@resultCity').text.to.equal('San Diego')
    },
    // 'Search for zip': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['95820', browser.Keys.ENTER])
    //         .waitForElementPresent('@resultCity')
    //         .expect.element('@resultCity').text.to.equal('Sacramento')
    // },
    // 'Search for blank': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['', browser.Keys.ENTER])
    //         .waitForElementPresent('@errorMessage')
    //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    // },
    // 'Search for bad zip': browser => {
    //     weatherPage
    //         .setValue('@searchBar', ['123456789', browser.Keys.ENTER])
    //         .waitForElementPresent('@errorMessage')
    //         .expect.element('@errorMessage').text.to.equal('There was a problem fetching the weather!')
    //     weatherPage
    //         .api.pause(1000)
    // },
    //  'Search again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '95820')
    //         .click('@searchButton')
    //         .waitForElementPresent('@resultCity')
    //         .click('@searchAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // },
    // 'Try again': browser => {
    //     weatherPage
    //         .setValue('@searchBar', '')
    //         .click('@searchButton')
    //         .waitForElementPresent('@errorMessage')
    //         .click('@tryAgainButton')
    //         .expect.element('@searchBar').to.be.visible.before(5000)
    // }
}