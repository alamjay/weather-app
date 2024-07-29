import * as React from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";
import windImage from "../assets/icons/wind.png"
import Arrow from "./Arrow";

export const WindCard = ({selectedLocation}: any) => {
    return (
        <>
            <div className="flex shadow-lg w-full sm:w-1/2 lg:max-w-[304px] xl:max-w-[368px] h-[112px] min-w-[171px] sm:max-w-[242px] md:w-[368px] bg-gray-200 rounded-lg gap-y-4 p-4">
                <div className="flex flex-col w-1/2 justify-center">
                    <div className="flex w-full gap-x-2 items-center">
                    <div className="flex items-center h-[40px]">
                        <img className="w-6 h-6" src={windImage} />
                    </div>
                        <div className="flex items-end">
                            <p className="text-[28px] text-grey-800 leading-none text-gray-500">3.9ms</p>
                            {/* <p className="inline-block align-bottom leading-none">ms</p> */}
                        </div>
                    </div>
                    <h5 className="">Wind Speed</h5>
                </div>
                <div className="flex flex-col w-1/2 justify-center">
                    <div className="flex w-full gap-x-2 items-center">
                        <Arrow angle={45} />
                        <div className="flex items-end">
                            <p className="text-[28px] text-grey-800 leading-none text-gray-500">125°</p>
                            <p className="inline-block align-bottom leading-none"></p>
                        </div>
                    </div>
                    <h5 className="">Direction</h5>
                </div>
            </div>
        </>
    )
}