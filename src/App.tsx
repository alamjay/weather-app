import React, {useCallback, useEffect, useMemo, useState} from 'react';
import logo from './assets/images/partly-cloudy-day.svg';
import {SearchInput} from "./components/SearchInput";
import "./output.css"
import _, {debounce} from "lodash";

const WeatherContext: any = React.createContext(null);

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [locationSuggestions, setLocationSuggestions] = useState(null);

    useEffect(() => {
        console.log("locationSuggestions", locationSuggestions)
    }, [locationSuggestions])

    useEffect(() => {
        if (searchTerm?.length > 2) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm])

    const fetchData = useCallback(async (term: string) => {
        console.log("sending request..")
        try {
            const appID = "603e94367063c5c7949ba98d72dccbc4";
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${appID}`);

            if (!response.ok) {
                throw new Error("Network response error!")
            }

            const result = await response.json();
            setLocationSuggestions(result)

        } catch (error) {

        } finally {

        }
    }, [])

    const debouncedSearch = useMemo(() => {
        return debounce(fetchData, 500);
    }, [fetchData])

    return (
        <WeatherContext.Provider value={"Test"}>
            <div className="container mx-auto flex flex-col items-center py-8 gap-y-16 w-8/12">
                <div className="flex justify-center items-center gap-x-4">
                    <img className="h-20" src={logo}/>
                    <h2 className="text-2xl font-semibold text-blue-900">Weather App</h2>
                </div>

                <SearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    options={locationSuggestions}
                />

            </div>
        </WeatherContext.Provider>
    );
}

export default App;
