import * as React from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";
import { NotFoundCard } from "./NotFoundCard";

export const HumidityCard = ({todaysWeather}: any) => {
    return (
        <>
            <div className="flex flex-col justify-center shadow-lg w-full lg:max-w-[304px] xl:max-w-[368px] h-[80px] md:h-[112px] min-w-[171px] bg-gray-200 rounded-lg gap-y-2 p-4">
                {todaysWeather ?
                    <>
                        <div className="flex">
                            <p className="text-textMobile lg:text-[18px] text-gray-700 w-9/12">Humidity</p>
                            <p className="text-textFiguresMobile md:text-textFigures leading-none text-gray-500">{todaysWeather?.humidity}%</p>
                        </div>
                        <div className="flex">
                            <p className="text-textMobile lg:text-[18px] text-gray-700 w-9/12">Pressure</p>
                            <div className="flex items-end">
                                <p className="text-textFiguresMobile lg:text-textFigures leading-none text-gray-500">{todaysWeather?.pressure}&nbsp;</p>
                                <p className="inline-block align-bottom leading-none text-gray-500">hPa</p>
                            </div>
                        </div>
                    </> :
                    <NotFoundCard />
                }
            </div>
        </>
    )
}