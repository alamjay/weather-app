import * as React from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";
import windImage from "../assets/icons/wind.png"
import Arrow from "./Arrow";
import { NotFoundCard } from "./NotFoundCard";

export const WindCard = ({todaysWeather}: any) => {
    return (
        <>
            <div className="flex shadow-lg w-full lg:max-w-[304px] xl:max-w-[368px] h-[80px] md:h-[112px] min-w-[171px] bg-gray-200 rounded-lg gap-y-4 p-4">
                {todaysWeather ?
                    <div className="flex justify-between w-full">
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex w-full gap-x-2 items-center justify-center">
                                <div className="flex items-center h-[40px]">
                                    <img className="h-5 w-5 md:w-6 md:h-6" src={windImage} />
                                </div>
                                <div className="flex items-end">
                                    <p className="text-textFiguresMobile lg:text-textFigures leading-none text-gray-500">{todaysWeather?.wind_speed}ms</p>
                                    {/* <p className="inline-block align-bottom leading-none">ms</p> */}
                                </div>
                            </div>
                            <h5 className="text-textMobile lg:text-[18px] text-gray-800">Wind Speed</h5>
                        </div>
                        <div className="flex flex-col justify-center items-center">
                            <div className="flex w-full gap-x-2 items-center justify-center">
                                <Arrow angle={Number(todaysWeather?.wind_direction)} />
                                <div className="flex items-end">
                                    <p className="text-textFiguresMobile lg:text-textFigures leading-none text-gray-500">{todaysWeather?.wind_direction}°</p>
                                    <p className="inline-block align-bottom leading-none"></p>
                                </div>
                            </div>
                            <h5 className="text-textMobile lg:text-[18px] text-gray-800">Direction</h5>
                        </div>
                    </div> :
                    <NotFoundCard />
                }
            </div>
        </>
    )
}