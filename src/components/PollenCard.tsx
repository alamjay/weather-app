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
        <div className="rounded-md shadow-lg h-[368px] w-[368px] bg-gray-200 py-8 flex flex-col items-center justify-between">
        <h2 className="font-serif text-3xl font-extrabold text-cyan-950">Pollen Level</h2>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-verdana font-black text-9xl text-cyan-900">{pollenInfo?.value}</h3>
          <p className="font-serif text-lg">{pollenInfo?.category}</p>
        </div>
        <h5 className="font-verdana text-xl font-semibold text-cyan-900 px-4 text-center">{pollenInfo?.indexDescription}</h5>
      </div>
    )
}