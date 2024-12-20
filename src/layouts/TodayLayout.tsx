import { useEffect, useState } from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";
import { HumidityCard } from "../components/HumidityCard";
import { WindCard } from "../components/WindCard";
import {useGetWeatherForecastQuery} from "../redux/slices/openWeatherApiSlice"

export const TodayLayout = ({selectedLocation}: any) => {

    const [todaysWeather, setTodaysWeather] = useState<any>(null)

    const { data: weatherForecastData } = useGetWeatherForecastQuery(selectedLocation, {skip: !selectedLocation})

    useEffect(() => {
        if (!!weatherForecastData) {
            // get min and max
            const currentDate = weatherForecastData.list[0].dt_txt.split(" ")[0];
            const initial = {
                min: Number.POSITIVE_INFINITY,
                max: Number.NEGATIVE_INFINITY,
            };

            const todaysForecastList = weatherForecastData.list
                .filter((forecast: any) => currentDate === forecast.dt_txt.split(" ")[0])
            
            const temp = todaysForecastList.reduce((accumulator: any, current: any) => {
                return {
                    min: Math.min(accumulator.min, current.main.temp_min),
                    max: Math.max(accumulator.max, current.main.temp_max)
                }
            }, initial);
            
            setTodaysWeather({
                "temp_min": temp.min,
                "temp_max": temp.max,
                "description": todaysForecastList[0].weather[0].description,
                "icon": todaysForecastList[0].weather[0].icon,
                "humidity": todaysForecastList[0].main.humidity,
                "pressure": todaysForecastList[0].main.pressure,
                "wind_speed": todaysForecastList[0].wind.speed,
                "wind_direction": todaysForecastList[0].wind.deg
            })
        }
    }, [weatherForecastData])

    return (
        <div className="">
            <h2 className="flex text-start justify-start text-cyan-800 text-heading2Mobile lg:text-heading2 font-serif w-full pb-2">Today</h2>     
            <div className="flex flex-col lg:flex-row gap-y-4 lg:gap-x-4">     
                <div className="flex flex-col sm:flex-row gap-x-4 gap-y-4">
                    <div className="flex flex-col gap-y-4 w-full">
                        <TodayCard todaysWeather={todaysWeather} />
                        <HumidityCard todaysWeather={todaysWeather} />
                        <WindCard todaysWeather={todaysWeather} />
                    </div>
                    <PollenCard selectedLocation={selectedLocation} />
                </div>
                <div className="flex flex-col sm:flex-row lg:flex-col gap-y-4 sm:gap-x-4">
                    <AirQualityCard selectedLocation={selectedLocation} />
                    <MapCard selectedLocation={selectedLocation} />
                </div>
            </div>
        </div>
    )
}