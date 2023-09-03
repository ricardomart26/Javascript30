const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';

const cities = [];

fetch(endpoint)
    .then((blob) => blob.json())
    .then((data) => cities.push(...data));

function findMatches(wordToMatch, cities) {

    const regexExp = new RegExp(wordToMatch, 'gi');
    cities.filter(({ city, state }) => {
        return city.match(regexExp) || state.match(regexExp);
    });
}

function displayMatches() {
    const matchedCities = findMatches(this.value, cities);

    const html = matchedCities.map(({ city, state, population }) => {
        const reg = new RegExp(this.value, 'gi');
        const cityName = city.replace(reg, `<span class="h1">${this.value}</span>`);
        const stateName = state.replace(reg, `<span class="h1">${this.value}</span>`);

        return `
            <li>
                <span class="name">${cityName}, ${stateName}</span>
                <span class="population">${population}</span>
            </li>
        `
    })
    sugestions.innerHTML = html;
    console.log(sugestions.innerHTML);
}

const searchInput = document.querySelector('.search');
const sugestions = searchInput.querySelector('.sugestions');

searchInput.addEventListener('change', displayMatches);
searchInput.addEventListener('keyup', displayMatches);
