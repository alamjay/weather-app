import * as React from "react";
import {AirQualityCard} from "../components/AirQualityCard";
import { MapCard } from '../components/MapCard';
import { PollenCard } from '../components/PollenCard';
import { TodayCard } from "../components/TodayCard";
import { HumidityCard } from "../components/HumidityCard";
import { WindCard } from "../components/WindCard";

export const TodayLayout = ({selectedLocation}: any) => {
    return (
        <>
            <div className="flex flex-col gap-y-4">
                <TodayCard />
                <HumidityCard />
                <WindCard />
            </div>
            <PollenCard selectedLocation={selectedLocation} />
            <div className="flex flex-col gap-y-8">
                <AirQualityCard selectedLocation={selectedLocation} />
                <MapCard selectedLocation={selectedLocation} />
            </div>
        </>
    )
}