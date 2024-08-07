import React, { useState } from "react";
import { useEffect } from "react";
import { useGetPollenLevelQuery } from "../redux/slices/googleApiSlice";
import GaugeChart from "react-gauge-chart";
import { NotFoundCard } from "./NotFoundCard";
import { LoadingIndicator } from "./LoadingIndicator";

type props = {
    selectedLocation: any;
}

export const PollenCard: React.FC<props> = ({selectedLocation}: props) => {

    const { data, isLoading: pollenLevelIsLoading } = useGetPollenLevelQuery(selectedLocation, { skip: !selectedLocation })

    const [pollenInfo, setPollenInfo] = useState<any>(null)

    useEffect(() => {
        if (!!data) {
            setPollenInfo(data.dailyInfo[0]?.pollenTypeInfo[0])
        }
    }, [data])

    return (
        <>
            <div className="shadow-lg rounded-lg w-full min-w-[171px] lg:max-w-[304px] xl:max-w-[368px] h-[272px] md:h-[368px] w-[292px] bg-gray-200 py-4 md:py-8 gap-y-4 lg:gap-y-8 flex flex-col items-center">                
                    <h2 className="font-serif text-cardHeading leading-7 font-extrabold text-cyan-950">Pollen Level</h2>
                    {!pollenLevelIsLoading ? 
                        !!pollenInfo ? 
                            <>
                                <div className="flex flex-col gap-y-2 text-center">
                                    {/* <h3 className="font-verdana font-black text-[5rem] lg:text-[8rem] leading-none text-cyan-900 drop-shadow-lg align-text-bottom">{pollenInfo?.value}</h3> */}
                                    <div className="w-[200px] md:w-[300px]">
                                        {pollenInfo && 
                                            <GaugeChart 
                                                id="gauge-chart2"
                                                nrOfLevels={10}
                                                arcWidth={0.3}
                                                style={{width: "100%"}}
                                                percent={((pollenInfo?.indexInfo?.value * 2) / 10)}
                                                hideText
                                                animate={false}
                                            />
                                        }
                                    </div>
                                    <p className="font-serif text-[18px] leading-none text-top text-cyan-900 font-bold">{pollenInfo?.indexInfo?.category}</p>
                                </div>
                                <h5 className="font-verdana lg:text-xl lg:leading-7 font-semibold text-cyan-900 px-4 text-center text-sm">{pollenInfo?.indexInfo?.indexDescription}</h5>
                                {/* <h5 className="font-verdana lg:text-xl lg:leading-7 font-semibold text-cyan-900 px-4 text-center text-sm">{pollenInfo?.healthRecommendations}</h5> */}
                            </> :
                        <NotFoundCard /> :
                    <LoadingIndicator />    
                    }
                </div>
        </>
    )
}