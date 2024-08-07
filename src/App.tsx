import React, {useCallback, useEffect, useMemo, useState} from 'react';
import logo from './assets/images/partly-cloudy-day.svg';
import {SearchInput} from "./components/SearchInput";
import "./output.css"
import "./assets/styles/loading-indicator.css"
import _, {debounce} from "lodash";
import Forecast from "./components/Forecast";
import {AirQualityMap} from "./components/AirQualityMap";
import {AirQualityCard} from "./components/AirQualityCard";
import { MapCard } from './components/MapCard';
import { PollenCard } from './components/PollenCard';
import { TodayCard } from './components/TodayCard';
import { TodayLayout } from './layouts/TodayLayout';
import { HumidityCard } from './components/HumidityCard';
import {useGetWeatherForecastQuery, useGetLocationQuery} from './redux/slices/openWeatherApiSlice';
import { LoadingIndicator } from './components/LoadingIndicator';

function App() {

    const [searchTerm, setSearchTerm] = useState('');
    const [locationParam, setLocationParam] = useState("");
    const [locationSuggestions, setLocationSuggestions] = useState(null);
    const [selectedLocation, setSelectedLocation] = useState<any | null>(null);
    const [locationLoading, setLocationLoading] = useState(false);
    const [weatherLoading, setWeatherLoading] = useState(false);
    const [weatherResult, setWeatherResult] = useState<any | null>(null);
    const [weatherForecast, setWeatherForecast] = useState<any | null>(null);

    const { data: weatherForecastData, isLoading: weatherForecastDataIsLoading } = useGetWeatherForecastQuery(selectedLocation, {skip: !selectedLocation})
    const { data: getLocationData } = useGetLocationQuery({term: locationParam}, {skip: !locationParam})

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
            debouncedSetLocationParam(searchTerm)
        }
    }, [searchTerm])

    const debouncedSetLocationParam = useMemo(() => debounce((term: string) => {
        setLocationParam(term);
    }, 500), []);

    useEffect(() => {
        if (!!weatherForecastData) {
            setWeatherResult(weatherForecastData.list)
        }
    }, [weatherForecastData])

    useEffect(() => {
        if (!!getLocationData) {
            setLocationSuggestions(getLocationData)
            setLocationLoading(false)
        }
    }, [getLocationData])

    return (
        <div className="bg-gray-100">
            <div className="container m-auto flex flex-col justify-center items-center py-2 lg:py-4 gap-y-4 lg:gap-y-4 w-9/12 min-h-screen max-h-max">
                <div className="flex justify-center items-center gap-x-4">
                    <img className="h-12 md:h-20" src={logo}/>
                    <h2 className="text-[18px] md:text-[24px] font-semibold text-blue-900">Weather App</h2>
                </div>

                <SearchInput
                    searchTerm={searchTerm}
                    setSearchTerm={setSearchTerm}
                    options={locationSuggestions}
                    setSelectedLocation={setSelectedLocation}
                />

                {!weatherForecastDataIsLoading ?
                    weatherForecast && 
                    <div className="flex flex-col gap-y-8">
                        <div className="w-full">
                            <div className="flex flex-col md:flex-row justify-center w-full gap-x-4 gap-y-4 md:gap-y-8 md:gap-y">
                                <TodayLayout selectedLocation={selectedLocation} />
                            </div>
                        </div>
                        <Forecast weatherForecast={weatherForecast} />
                    </div> : 
                    <div className="flex w-full justify-center items-center h-full py-16">
                        <LoadingIndicator />
                    </div>
                }
            </div>
        </div>
    );
}

export default App;
