var wantedQueries
// var searchWeather = (pageObjects, search, result) => {
//     pageObjects
//         .setValue('@searchBar', search)
//         .click('@searchButton')
//         .waitForElementVisible('@resultCity')
//         .verify.containsText('@resultCity',result)

var warrantInfo = {
    hdr:"0123456789",
    mke:"AAAA",
    ori:"eeeeeeeee",
    nam:"some name",
    sex:"F",
    rac:"A",
    hgt:"RRR",
    wgt:"123",
    hair:"Brown",
    off:"flashing",
    dow:"11/01/1990"

}

var errorChecker = function(wantedPage, warrantInfo, expectedErrors){
    wantedPage
        .click('.bm-burger-button')
        .click('p[name="enterOption"]')
        .click('#pageWrap')


    
}        

module.exports = {
    beforeEach: browser => {
        wantedQueries = browser.page.wantedQueries()
        wantedQueries.navigate()

    },
    // 'Search for city': browser => {
    //     searchWeather (weatherPage, '72761', 'Siloam Springs')

    'test': browser => {
        
    }
}