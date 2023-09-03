import { useEffect, useState } from "react";
import "./style.css";

const SearchBar = () => {

    const endpoint = 'https://gist.githubusercontent.com/Miserlou/c5cd8364bf9b2420bb29/raw/2bf258763cdddd704f8ffd3ea9a3e81d25e2c6f6/cities.json';
    const [data, setData] = useState<{city: string, state: string, population: string}[]>([]);
    const [input, setInput] = useState("");
    const [citiesMatched, setCitiesMatched] = useState<{city: string, state: string, population: string}[]>([]);

    useEffect(() => {
        fetch(endpoint).then(response => response.json()).then(data => setData(data));
    }, []);


    function findMatches(wordToMatch: string, cities: {city: string, state: string, population: string}[]) {
        const regexExp = new RegExp(wordToMatch, 'gi');
        cities.filter(({ city, state }) => {
            return city.match(regexExp) || state.match(regexExp);
        });
        setCitiesMatched(cities);
    }


    const renderSearchResults = () => {
        return citiesMatched.map(({city, state, population}) => {
            const reg = new RegExp(input, 'gi');
            const cityName = city.replace(reg, `<span class="h1">${input}</span>`);
            const stateName = state.replace(reg, `<span class="h1">${input}</span>`);
            return (<>
                <li>
                    <span className="name">${cityName}, ${stateName}</span>
                    <span className="population">${population}</span>
                </li> 
            </>);
        })
    }

    const handleInput = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value);
        findMatches(e.target.value, data);
    }

    return (
        <form className="search-form">
            <input type="text" onChange={handleInput} className="search" placeholder="City or State"/>
            <ul className="suggestions">
                {data ? renderSearchResults(): (
                    <>
                        <li>Filter for a city</li>
                        <li>or a state</li>
                    </>
                )}
            </ul>
        </form>
    );
}

export default SearchBar;