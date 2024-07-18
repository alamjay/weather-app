import React, { useState } from "react";
import { useEffect } from "react";
import { useGetPollenLevelQuery } from "../redux/slices/googleApiSlice";

type props = {
    selectedLocation: any;
}

export const PollenCard: React.FC<props> = ({selectedLocation}: props) => {

    const { data } = useGetPollenLevelQuery(selectedLocation, { skip: !selectedLocation })

    const [pollenInfo, setPollenInfo] = useState<any>(null)

    useEffect(() => {
        if (!!data) {
            setPollenInfo(data.dailyInfo[0]?.pollenTypeInfo[0]?.indexInfo)
        }
    }, [data])


    return (
        <div className="shadow-lg w-full sm:w-1/2 min-w-[171px] lg:max-w-[304px] xl:max-w-[368px] sm:max-w-[242px] h-[368px] w-[292px] md:w-[368px] bg-gray-200 py-8 gap-y-10 flex flex-col items-center justify-between">
            <h2 className="font-serif text-[20px] leading-7 font-extrabold text-cyan-950">Pollen Level</h2>
            <div className="flex flex-col gap-2 text-center">
                <h3 className="font-verdana font-black text-[5rem] lg:text-[8rem] leading-none text-cyan-900 drop-shadow-lg align-text-bottom">{pollenInfo?.value}</h3>
                <p className="font-serif text-[18px] leading-7 text-top">{pollenInfo?.category}</p>
            </div>
            <h5 className="font-verdana lg:text-xl lg:leading-7 font-semibold text-cyan-900 px-4 text-center text-sm">{pollenInfo?.indexDescription}</h5>
        </div>
    )
}