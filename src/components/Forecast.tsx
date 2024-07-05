import {FC, useEffect, useState} from "react";
import { iconMapping } from "../utils/iconMapping";

import {printDay} from "../utils/printDay";

type props = {
    weatherForecast: any;
}

const WeatherCard: FC<props> = ({forecast, index}: any) => {

    const [day, setDay] = useState<string | null>(null);
    const [icon, setIcon] = useState<any | null>(null)


    useEffect(() => {
        setIcon(iconMapping(forecast));
        setDay(printDay(index, forecast))
    }, [index, forecast])

    return (
        <div className="rounded-md bg-gray-200 p-3 w-44">
            <div className="flex flex-col gap-y-4">
                <h3 className="flex justify-center text-center text-lg font-semibold text-blue-950">{day}</h3>

                <div className="flex flex-col gap-y items-center">
                    <p className="flex text-center">{forecast.weather[0].main}</p>
                    <p className="flex text-center">{forecast.weather[0].description}</p>
                    <img className="w-20 bg-gray-400 rounded-lg shadow-2xl my-4" src={icon} alt={forecast.weather[0].icon} />

                    <div className="flex w-full justify-center border-b-2 border-gray-400 pb-4">
                        <div className="px-4 bg-gray-600 rounded-lg">
                            <p className="text-white">{forecast?.main?.temp.toFixed()}&deg;C</p>
                        </div>
                    </div>
                </div>

                <div className="flex flex-col">
                    <div className="flex justify-between">
                        <p>Humidity</p>
                        <p>{forecast?.main?.humidity}%</p>
                    </div>
                    <div className="flex justify-between border-b-2 border-gray-400 pb-4">
                        <p>Pressure</p>
                        <p>{forecast?.main?.pressure} hPa</p>
                    </div>
                    <h5 className="pt-4">Wind</h5>
                    <div className="flex justify-between">
                        <p>Speed</p>
                        <p>{forecast?.wind?.speed}ms</p>
                    </div>
                    <div className="flex justify-between">
                        <p>Direction</p>
                        <p>{forecast?.wind?.deg}&deg;</p>
                    </div>
                </div>
            </div>
        </div>        
    );
}

const ForecastRowMobile = ({forecast, index}: any) => {

    const [day, setDay] = useState<string | null>(null);
    const [icon, setIcon] = useState<any | null>(null)


    useEffect(() => {
        setIcon(iconMapping(forecast));
        setDay(printDay(index, forecast))
    }, [index, forecast])

    return (
        <div className="flex w-full items-center justify-between gap-x-4 px-3">
            <h4 className=" w-3/12">{day}</h4>
            <img className="w-12" src={icon} />
            <p className=" w-1/12">{forecast?.main?.temp.toFixed()}&deg;C</p>
            <p className=" w-2/12">{forecast.weather[0].main}</p>
        </div>
    )
}

const Forecast: FC<props> = ({weatherForecast}: props) => {
    return (
        <>
        <div className="hidden md:flex py-4 items-center gap-x-4">
            {weatherForecast?.map((forecast: any, index: number) => (
                <WeatherCard key={index} forecast={forecast} />
            ))}
        </div>

        {weatherForecast && 
            <div className="grid md:hidden sm:w-[500px] w-[300px] items-center gap-x-4 bg-gray-100 shadow-lg w-full divide-y divide-y-2 divide-blue-400">
                {weatherForecast?.map((forecast: any, index: any) => (
                    <ForecastRowMobile 
                        key={index} 
                        forecast={forecast} 
                    />
                ))}
            </div>
        }

        </>
    );
}

export default Forecast;