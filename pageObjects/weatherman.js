module.exports = {
    url: 'https://devmountain-qa.github.io/weatherman/build/index.html',
    elements: {
        // searchBar: '.enter-location__input',
        // resultCity: '',
        // errorMessage: ''
        
             searchBar: '.enter-location__input',
             resultCity:'.current-weather__location',
             errorMessage: '.error-message__message',
             searchButton:'[class="enter-location__submit"]',
             searchAgainButton:'[class="current-weather__search-again"]',
             tryAgainButton: '[class="error-message__try-again"]'
    }
}