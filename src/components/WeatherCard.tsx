import {FC, useEffect, useState} from "react";

import icon1 from "../assets/icons/01.png";
import icon2 from "../assets/icons/02.png";
import icon3 from "../assets/icons/03.png";
import icon4 from "../assets/icons/04.png";
import icon9 from "../assets/icons/09.png";
import icon10 from "../assets/icons/10.png";
import icon11 from "../assets/icons/11.png";
import icon13 from "../assets/icons/13.png";
import icon50 from "../assets/icons/50.png";
import {printDay} from "../hooks/printDay";

type props = {
    forecast: any;
    index: any;
}

const WeatherCard: FC<props> = ({forecast, index}: props) => {

    const days = ['Sunday', 'Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday'];
    const [day, setDay] = useState<string | null>(null);
    const [icon, setIcon] = useState<any | null>(null)

    useEffect(() => {
        if (!!forecast) {
            switch (forecast?.weather[0]?.icon) {
                case "02d" :
                case "02n":
                    return setIcon(icon2);
                case "03d":
                case "03n":
                    return setIcon(icon3);
                case "04d":
                case "04n":
                    return setIcon(icon4);
                case "09d":
                case "09n":
                    return setIcon(icon9);
                case "10d":
                case "10n":
                    return setIcon(icon10);
                case "11d":
                case "11n":
                    return setIcon(icon11);
                case "13d":
                case "13n":
                    return setIcon(icon13);
                case "50d":
                case "50n":
                    return setIcon(icon50);
                default:
                    setIcon(icon1);
            }
        }
    }, [forecast])

    useEffect(() => {

        setDay(printDay(index, forecast))

    }, [forecast])

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

                        {/*<div className="flex flex-col items-center">*/}
                        {/*    <p className="bg-gray-600 text-white px-4 rounded-lg">Max</p>*/}
                        {/*    <p className="">{parseFloat(forecast?.main?.temp_max.toFixed())}&deg;C</p>*/}
                        {/*</div>*/}
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

            {/*<div className="forecast-day p-3">*/}
            {/*    /!* <i className="bi bi-cloud-fill" style={{fontSize: 50}}></i> *!/*/}
            {/*    <img className="weather-icon" src={`../assets/icons/c.svg`} />*/}
            {/*    <h3>{ day }</h3>*/}
            {/*    <p>min: {Math.round(282.78)} &deg;C</p>*/}
            {/*    <p>max: {Math.round(283.78)} &deg;C</p>*/}
            {/*    <p>humidity: {Math.round(30)}%</p>*/}
            {/*</div>*/}
        </div>
        
    );
}

export default WeatherCard;