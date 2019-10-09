var searchWeather = (pageObjects, data) => {
    pageObjects
        .setValue('@searchBar', data.search)
        .click('@searchButton')
        .waitForElementVisible('@resultCity')
        .getText('@resultCity', function(result){
            console.log(result.value)
        })
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
var myData = [ 
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
        myData.forEach(test=>{
            searchWeather(weatherPage, test)
         })
    },
}