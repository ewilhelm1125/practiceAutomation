//Example
// module.exports = {
//     beforeEach: browser => {
//         browser.url('http://localhost:3000')
//     },
//     'Check the entered name': browser => {
//         browser
//         .setAlertText('Eric')
//         .acceptAlert()
//         .waitForElementVisible('(//h2)[1]1')
//         .verify.containsText('(//h2)[1]', 'Eric')
//     },
//     'Cancel works right': browser => {
//         browser
//         .dismissAlert()
//     },
//     'Does not acceept blank entries': browser => {
//         browser
//         .acceptAlert
//     }
// }
//second example
// module.exports = {
//     'Get into the frame, check for the uneditable body':browser=>{
//         browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_iframe')
//             .waitForElementVisible('#tryhome')
//             .expect.element('body[contenteditable="false"]').not.to.be.present
//         browser
//         .frame('iframeResult')
//             // swap your context here!

//         browser
//             .expect.element('body[contenteditable="false"]').to.be.present.before(5000)
//     }
// }
//3rd example
module.exports = {
    'Open in a new window': browser => {
        browser.url('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target')
            .waitForElementPresent('#tryhome')
            .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'On original window')
            .frame('iframeResult')
            .click('a')
            .windowHandles(results => {
                var originalWindow = results.value[0]
            browser
                .switchWindow(results.value[1])
                //...
                //...
                    .verify.urlEquals('https://www.w3schools.com/', 'In new one')
                    .switchWindow(originalWindow)
                    .verify.urlEquals('https://www.w3schools.com/tags/tryit.asp?filename=tryhtml_link_target', 'Back to old')
                    .closeWindow
                    .windowHandles(results => {
                        var handles = results.value
                        browser.verify.ok(handles.length === 1, "there is only one window open.")
                        .switchWindow(results.value[0])
                        .verify.urlEquals('https://www.w3schools.com/', 'And it is the new one')
                    })
                    .end()
            })
    }
}