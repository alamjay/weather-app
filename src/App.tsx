import React, {useCallback, useEffect, useMemo, useState} from 'react';
import logo from './assets/images/partly-cloudy-day.svg';
import {SearchInput} from "./components/SearchInput";
import "./output.css"
import _, {debounce} from "lodash";
import Forecast from "./components/Forecast";
import {AirQualityMap} from "./components/AirQualityMap";
import {AirQualityCard} from "./components/AirQualityCard";
import { MapCard } from './components/MapCard';
import { Provider } from 'react-redux';
import { store } from './redux';
import { PollenCard } from './components/PollenCard';

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
        <Provider store={store}>
            <div className="bg-gray-100">
                <div className="container m-auto flex flex-col justify-center items-center py-8 gap-y-8 w-9/12 min-h-screen max-h-max">
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

                    {weatherForecast &&
                        <>
                            <Forecast weatherForecast={weatherForecast} />

                            {/* <AirQualityMap selectedLocation={selectedLocation} />  */}
                            {/* lat: 51.7676194, lon: 0.0974893 */}

                            <div className="flex flex-col md:flex-row justify-center w-full 2xl:px-[143px] gap-x-4 gap-y-8 md:gap-y">
                                <MapCard selectedLocation={selectedLocation} />
                                <div className="flex flex-col sm:flex-row justify-center gap-x-4 gap-y-4 sm:gap-y-0">
                                    <AirQualityCard selectedLocation={selectedLocation} />
                                    <PollenCard selectedLocation={selectedLocation} />
                                </div>
                            </div>
                        </>
                    }
                </div>
            </div>
        </Provider>
    );
}

export default App;
