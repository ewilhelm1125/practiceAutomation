var searchWeather = (pageObjects, data) => {
    pageObjects
        .setValue('@searchBar', data.search)
        .click('@searchButton')
        .waitForElementVisible('@resultCity')
        .verify.containsText('@resultCity', data.result)
        .click('@searchAgain')
}
var invalidSearch = (pageObjects, search) => {
    pageObjects
        .setValue('@searchBar', search)
        .click('@searchButton')
        .waitForElementVisible('@errorMessage')
        .click('@searchAgain')
}
var myData = [                                              //---->Example of an array
    {search: '84601', result: 'Provo'}, 
    {search: 'San Francisco', result: 'San Francisco'},
    {search: 'London', result: 'London'} 
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
         searchWeather(weatherPage, myData[1])          //----->Example of an array being called
         searchWeather(weatherPage, myData[2])
         searchWeather(weatherPage, myData[0])
         


    },
}
