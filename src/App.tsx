import React, {useCallback, useEffect, useMemo, useState} from 'react';
import logo from './assets/images/partly-cloudy-day.svg';
import {SearchInput} from "./components/SearchInput";
import "./output.css"
import _, {debounce} from "lodash";
import WeatherCard from "./components/WeatherCard";

const WeatherContext: any = React.createContext(null);

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [locationSuggestions, setLocationSuggestions] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [weatherResult, setWeatherResult] = useState<any | null>(null);
    const [weatherForecast, setWeatherForecast] = useState<any | null>(null);

    useEffect(() => {

        if (!!weatherResult) {
            let prevDate: any = null;
            let minTempByDay: { [key: string]: number } = {};
            const filteredWeatherForecast = weatherResult.filter((forecast: any) => {
                const utcTimestamp = parseInt(forecast.dt) * 1000;
                const currentDate = new Date(utcTimestamp).toLocaleString("en-GB").split(",")[0]

                if (prevDate !== currentDate) {
                    prevDate = currentDate;
                    return true;
                } else {
                    return false;
                }
            });

            setWeatherForecast(filteredWeatherForecast);
        }
    }, [weatherResult])

    useEffect(() => {
        if (searchTerm?.length > 2) {
            debouncedSearch(searchTerm);
        }
    }, [searchTerm])

    useEffect(() => {
        if (!!selectedLocation) {
            fetchWeather()
        }
    }, [selectedLocation])

    const fetchLocations = useCallback(async (term: string) => {
        setLocationLoading(true)
        try {
            const appID = "603e94367063c5c7949ba98d72dccbc4";
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${term}&limit=5&appid=${appID}`);

            if (!response.ok) {
                throw new Error("Network response error!")
            }

            const result = await response.json();
            setLocationSuggestions(result)
            setLocationLoading(false)

        } catch (error) {

        } finally {

        }
    }, [])

    const fetchWeather = async () => {
        setWeatherLoading(true)
        try {
            const appID = "603e94367063c5c7949ba98d72dccbc4";
            const response = await fetch(`http://api.openweathermap.org/data/2.5/forecast?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${appID}&units=metric`);

            if (!response.ok) {
                throw new Error("Network response error!")
            }

            const result = await response.json();
            setWeatherResult(result?.list)
            setWeatherLoading(false)

        } catch (error) {

        } finally {

        }
    }

    const debouncedSearch = useMemo(() => {
        return debounce(fetchLocations, 500);
    }, [fetchLocations])

    return (
        <WeatherContext.Provider value={"Test"}>
            <div className="container mx-auto flex flex-col items-center py-8 gap-y-16 w-9/12">
                <div className="flex justify-center items-center gap-x-4">
                    <img className="h-20" src={logo}/>
                    <h2 className="text-2xl font-semibold text-blue-900">Weather App</h2>
                </div>

                <SearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    options={locationSuggestions}
                    setSelectedLocation={setSelectedLocation}
                />

                <div className="flex py-4 items-center gap-x-4">
                    {weatherForecast?.map((forecast: any, index: any) => (
                        <WeatherCard key={index} forecast={forecast} index={index} />
                    ))}
                </div>

            </div>
        </WeatherContext.Provider>
    );
}

export default App;
