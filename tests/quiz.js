module.exports = {
    beforeEach: browser => {
        browser.url()
        
    },
    after: browser => {
        browser.end()
    },
// 'Submit an invalid query': browser => {
//     browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
//         .waitForElementPresent('#versionNumber', 5000)
//         .setValue('input[name="namInput"]', 'Waldo Butters')
//         .setValue('input[name="offInput"]', 'Polka')
//         .click('#saveBtn')
//         .expect.element('[name="queryTitle"]').text.to.equal('No results generated due to error.').before(500)
        
//     }

// 'Check for error messages': browser => {
//     browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
//         .waitForElementPresent('#versionNumber', 5000)
//         .setValue('input[name="hdrInput"]', '1234567890')
//         .setValue('input[name="mkeInput"]', 'ABC')
//         .setValue('input[name="oriInput"]', 'OAI123456')
//         .setValue('input[name="namInput"]', 'Harry Dresden')
//         .setValue('input[name="sexInput"]', 'M')
//         .setValue('input[name="racInput"]', 'W')
//         .setValue('input[name="hgtInput"]', '607')
//         .setValue('input[name="wgtInput"]', '225')
//         .setValue('input[name="haiInput"]', 'Brown')
//         .setValue('input[name="offInput"]', 'Arson')
//         .setValue('input[name="dowInput"]', '10312010')
//         .setValue('input[name="olnInput"]', 'ABC123')
//         .click('#saveBtn')
//         .expect.element('#errorList').text.to.equal("If Operator's License Number, DL State, or DL Expiration Year are present, all three must be present.").before(500)
// }
'Submit a valid query': browser => {
    browser.url('https://devmountain-qa.github.io/enter-wanted/1.4_Assignment/index.html')
        .waitForElementPresent('#versionNumber', 5000)
        .setValue('input[name="hdrInput"]', '1234567890')
        .setValue('input[name="mkeInput"]', 'ABC')
        .setValue('input[name="oriInput"]', 'OAI123456')
        .setValue('input[name="namInput"]', 'Harry Dresden')
        .setValue('input[name="sexInput"]', 'M')
        .setValue('input[name="racInput"]', 'W')
        .setValue('input[name="hgtInput"]', '607')
        .setValue('input[name="haiInput"]', 'Brown')
        .setValue('input[name="offInput"]', 'Arson')
        .setValue('input[name="dowInput"]', '10312010')
        .setValue('input[name="wgtInput"]', '225')
        .click('#saveBtn')
        .expect.element('span[name="queryBody"]').text.to.equal('1234567890.ABC.OAI123456.Harry Dresden.M.W.607.225.Brown.Arson.10312010......').before(500)
}
}