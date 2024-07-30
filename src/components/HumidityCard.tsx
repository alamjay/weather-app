import * as React from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";

export const HumidityCard = ({selectedLocation}: any) => {
    return (
        <>
            <div className="flex flex-col justify-center shadow-lg w-full sm:w-1/2 lg:max-w-[304px] xl:max-w-[368px] h-[112px] min-w-[171px] sm:max-w-[242px] md:w-[368px] bg-gray-200 rounded-lg gap-y-2 p-4">
                <div className="flex">
                    <p className="w-9/12">Humidity</p>
                    <p className="text-[28px] text-grey-800 leading-none text-gray-500">90%</p>
                </div>
                <div className="flex">
                    <p className="w-9/12">Pressure</p>
                    <div className="flex items-end">
                        <p className="text-[28px] text-grey-800 leading-none text-gray-500">1001</p>
                        <p className="inline-block align-bottom leading-none text-gray-500">hPa</p>
                    </div>
                </div>
            </div>
        </>
    )
}