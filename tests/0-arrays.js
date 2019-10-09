var searchWeather = (pageObjects, data) => {
    pageObjects
        .setValue('@searchBar', data.search)
        .click('@searchButton')
        .waitForElementVisible('@resultCity')
        .verify.containsText('@resultCity', data.result)
        .click('@searchAgainButton')
}
var invalidSearch = (pageObjects, search) => {
    pageObjects
        .setValue('@searchBar', search)
        .click('@searchButton')
        .waitForElementVisible('@errorMessage')
        .click('@searchAgain')
}
var myData = [
    { search: '84601', result: 'Provo' },
    { search: 'San Francisco', result: 'San Francisco' },
    { search: 'London', result: 'London' }
]
var weatherPage = {}
module.exports = {
    beforeEach: browser => {
        weatherPage = browser.page.weatherman()
        weatherPage.navigate()
    },
    after: browser => {
        weatherPage.end()
    },
    'Search Weather Test': browser => {
        searchWeather(weatherPage, myData[1])
    },
    'Search Weather Test2': browser => {
        searchWeather(weatherPage, myData[0])
    },
    'Search Weather Test3': browser => {
            searchWeather(weatherPage, myData[2])
        },
   
}