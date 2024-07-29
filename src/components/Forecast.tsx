import {FC, useEffect, useState} from "react";
import { iconMapping } from "../utils/iconMapping";

import {printDay} from "../utils/printDay";

type props = {
    weatherForecast: any;
}

const WeatherCard: FC<any> = ({forecast, index}: any) => {

    const [day, setDay] = useState<string | null>(null);
    const [icon, setIcon] = useState<any | null>(null)

    useEffect(() => {
        setDay(printDay(index, forecast))
        setIcon(iconMapping(forecast))
    }, [index, forecast])

    return (
        <div className="rounded-md shadow-lg bg-gray-200 p-2 lg:p-3 w-28 lg:w-36 xl:w-44">
            <div className="flex flex-col gap-y-4">
                <h3 className="flex justify-center text-center text-lg font-semibold text-blue-950">{day}</h3>

                <div className="flex flex-col gap-y items-center">
                    <p className="flex text-center">{forecast.weather[0].main}</p>
                    {/* <p className="hidden xl:flex text-center">{forecast.weather[0].description}</p> */}
                    <img className="w-14 lg:w-20 bg-gray-400 rounded-lg shadow-2xl my-2 lg:my-4" src={icon} alt={forecast.weather[0].icon} />

                    <div className="flex w-full justify-center pb-4">
                        <div className="px-4 bg-gray-600 rounded-lg">
                            <p className="text-sm lg:text-base text-white">{forecast?.main?.temp.toFixed()}&deg;C</p>
                        </div>
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
        setDay(printDay(index, forecast))
        setIcon(iconMapping(forecast))
    }, [index, forecast])

    return (
        <div className="flex w-full items-center justify-between gap-x-4 px-3 py-2">
            <h4 className=" w-3/12">{day}</h4>
            <div className="p bg-gray-400 rounded-md">
                <img className="w-12" src={icon} />
            </div>
            <p className=" w-1/12">{forecast?.main?.temp.toFixed()}&deg;C</p>
            <p className=" w-2/12">{forecast.weather[0].main}</p>
        </div>
    )
}

const Forecast: FC<props> = ({weatherForecast}: props) => {
    return (
        <>
        <div className="hidden md:flex py-4 items-center gap-x-4">
            {weatherForecast?.map((forecast: any, index: any) => (
                <WeatherCard key={index} index={index} forecast={forecast} />
            ))}
        </div>

        <div className="grid md:hidden sm:w-[500px] w-[300px] items-center bg-gray-100 shadow-lg w-full divide-y-2 divide-blue-400">
            {weatherForecast?.map((forecast: any, index: any) => (
                <ForecastRowMobile 
                    key={index}
                    index={index}
                    forecast={forecast} 
                />
            ))}
        </div>

        </>
    );
}

export default Forecast;