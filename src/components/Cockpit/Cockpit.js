import React, { useState, useEffect } from "react";
import Input from "../Input/Input";
import City from "../City/City";
const API_KEY = process.env.REACT_APP_OPENWEATHERMAP_API_KEY;

export default function Cockpit() {
    const [search, setSearch] = useState("");
    const [query, setQuery] = useState("");
    const [result, loading] = useAsyncHook(query);
    return (
        <div>
            <h1>Weather</h1>
            <Input
                submit={(e) => {
                    e.preventDefault();
                    setQuery(search);
                }}
                change={(e) => setSearch(e.target.value)}
            />
            {loading === false ? (
                <h1>Enter a name of city, please!</h1>
            ) : loading === "null" ? (
                <h1>No City Found</h1>
            ) : (
                <City data={result} />
            )}
        </div>
    );
}
function useAsyncHook(searchCity) {
    const [result, setResult] = useState([]);
    const [loading, setLoading] = useState(false);
    useEffect(() => {
        async function fetchCityInfo() {
            try {
                setLoading(true);
                const response = await fetch(
                    `http://api.openweathermap.org/data/2.5/weather?q=${searchCity}&appid=${API_KEY}`
                );
                const json = await response.json();
                setResult({
                    key: json.id,
                    name: json.name,
                    weatherMain: json.weather[0].main,
                    weatherDescription: json.weather[0].description,
                    minTemp: json.main.temp_min,
                    maxTemp: json.main.temp_max,
                    longitude: json.coord.lon,
                    latitude: json.coord.lat,
                });
            } catch (error) {
                setLoading(null);
            }
        }
        if (searchCity !== "") fetchCityInfo();
    }, [searchCity]);

    return [result, loading];
}
