module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {     
             searchBar: '.enter-location__input',  //-----------> Example of a JavaScript Object
             resultCity:'.current-weather__location',
             errorMessage: '.error-message__message',
             searchButton:'[class="enter-location__submit"]',
             searchAgain:'[class="current-weather__search-again"]',
             tryAgainButton: '[class="error-message__try-again"]'
    }
    // searchBar: '.enter-location__input',
        // resultCity: '',
        // errorMessage: ''
}