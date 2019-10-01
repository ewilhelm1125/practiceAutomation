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



var errorChecker = function(pageObject, warrantInfo, expectedErrors){
    pageObject
        .click('.bm-burger-button')
        .waitForElementVisible('[name="enterOption"]')
        .click('[name="enterOption"]')
        .useXpath()
        .click('//button[@tabindex="0"]')
        .useCss()
        .waitForElementVisible('[name="hdrInput"]')
        .setValue('[name="hdrInput"]', warrantInfo.hdr)
        .setValue('[name="mkeInput"]', warrantInfo.mke)
        .setValue('[name="oriInput"]', warrantInfo.ori)
        .setValue('[name="namInput"]', warrantInfo.nam)
        .setValue('[name="sexInput"]', warrantInfo.sex)
        .setValue('[name="racInput"]', warrantInfo.rac)
        .setValue('[name="hgtInput"]', warrantInfo.hgt)
        .setValue('[name="wgtInput"]', warrantInfo.wgt)
        .setValue('[name="haiInput"]', warrantInfo.hair)
        .setValue('[name="offInput"]', warrantInfo.off)
        .setValue('[name="dowInput"]', warrantInfo.dow)
        .click('[id="saveBtn"]')  //how to write a selector
        .verify.containsText('[class="results"]', expectedErrors)     
}        
module.exports = {
    beforeEach: browser => {
        wantedQueries = browser.page.wantedQueries()
        wantedQueries.navigate()
    },
    after: browser => {
        wantedQueries.end()
    },
       'test': browser => {
        errorChecker(wantedQueries, {
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
        
        }, 'Submit Clear' )
        

    }
}