import icon1 from "../assets/icons/04.png";
import { iconMapping } from "../utils/iconMapping";
import { NotFoundCard } from "./NotFoundCard";

export const TodayCard = ({todaysWeather}: any) => {
    return (
        <>
            <div className="flex items-center shadow-lg w-full sm:w-1/2 lg:max-w-[304px] xl:max-w-[368px] h-[112px] min-w-[171px] sm:max-w-[242px] md:w-[368px] bg-gray-400 justify-between rounded-lg">
                {!!todaysWeather ?
                    <>
                        <div className="flex w-9/12">
                            <div className="flex justify-between items-center">
                                <img src={iconMapping(todaysWeather?.icon)} />
                                <p className="text-[18px] text-gray-800">{todaysWeather?.description}</p>
                            </div>
                        </div>
                        <div className="flex flex-col divide-y-2 w-3/12">
                            <p className="text-[28px] text-gray-800">{todaysWeather?.temp_min.toFixed()}°C</p>
                            <p className="text-[28px] text-gray-800">{todaysWeather?.temp_max.toFixed()}°C</p>
                        </div>
                    </> :
                    <NotFoundCard />
                }
            </div>
        </>
    )
}

