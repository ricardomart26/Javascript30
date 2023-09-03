import { useEffect, useState } from "react";
import "./style.css";

interface cityInfo {
    city: string;
    state: string;
    population: string;
}

const SearchBar = () => {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const [data, setData] = useState<cityInfo[]>([]);
    const [citiesMatched, setCitiesMatched] = useState<cityInfo[]>([]);


    useEffect(() => {
        fetch(endpoint).then(response => response.json()).then(data => setData(data));
    }, []);


    function findMatches(wordToMatch: string, cities: cityInfo[]) {
        const regexExp = new RegExp(wordToMatch, 'gi');
        setCitiesMatched(cities.filter(({ city, state }) => {
            return city.match(regexExp) || state.match(regexExp);
        }));
    }


    const renderSearchResults = (input: string) => {
        const cities = citiesMatched.map(({city, state, population}) => {
            const reg = new RegExp(input, 'gi');
            const cityName = city.replace(reg, `<span class="h1">${input}</span>`);
            const stateName = state.replace(reg, `<span class="h1">${input}</span>`);
            return (`
                <li>
                    <span className="name">${cityName}, ${stateName}</span>
                    <span className="population">${population}</span>
                </li>` 
            );
        })

        const sugestions = document.querySelector('.suggestions');
        if (!sugestions)
            return ;
        sugestions.innerHTML = cities.toString(); 
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        findMatches(e.target.value, data);
        renderSearchResults(e.target.value);
    }

    return (
        <div className="content-searchbar">
            <form className="search-form">
                <input type="text" onChange={handleInput} className="search" placeholder="City or State"/>
                <ul className="suggestions">
                    <li>Filter for a city</li>
                    <li>or a state</li>
                </ul>
            </form>

        </div>
    );
}

export default SearchBar;