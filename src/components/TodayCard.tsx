import icon1 from "../assets/icons/04.png";
import { iconMapping } from "../utils/iconMapping";
import { NotFoundCard } from "./NotFoundCard";

export const TodayCard = ({todaysWeather}: any) => {
    return (
        <>
            <div className="flex items-center shadow-lg w-full lg:max-w-[304px] xl:max-w-[368px] h-[80px] md:h-[112px] min-w-[171px] bg-gray-400 justify-between rounded-lg">
                {!!todaysWeather ?
                    <>
                        <div className="flex items-center gap-x-2 w-9/12">
                            <img className="h-[50px] md:h-[100px]" src={iconMapping(todaysWeather?.icon)} />
                            <p className="text-textMobile lg:text-[18px] text-gray-800">{todaysWeather?.description}</p>
                        </div>
                        <div className="flex flex-col divide-y-2 w-3/12">
                            <p className="text-textFiguresMobile lg:text-textFigures text-gray-800">{todaysWeather?.temp_min.toFixed()}°C</p>
                            <p className="text-textFiguresMobile lg:text-textFigures text-gray-800">{todaysWeather?.temp_max.toFixed()}°C</p>
                        </div>
                    </> :
                    <NotFoundCard />
                }
            </div>
        </>
    )
}

