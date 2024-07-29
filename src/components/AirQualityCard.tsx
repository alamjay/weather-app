import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useGetAirQualityQuery } from '../redux/slices/googleApiSlice'

type props = {
  selectedLocation: any;
}

export const AirQualityCard: React.FC<props> = ({selectedLocation}: props) => {

  const [aqiData, setAqiData] = useState<any>(null)

  const { data } = useGetAirQualityQuery(selectedLocation, { skip: !selectedLocation });

  useEffect(() => {
    if (!!data) {
      setAqiData(data.indexes[0])
    }
  }, [data])

    return (
      <div className="shadow-lg w-full h-[168px] min-w-[171px] md:w-[368px] bg-gray-200 py-8 gap-y-10 flex flex-col items-center">
          <h2 className="font-serif text-[20px] leading-7 font-extrabold text-cyan-950">Air Quality</h2>
          <div className="flex flex-col gap-2 text-center">
            {/* <h3 className="font-verdana font-black text-[5rem] lg:text-[8rem] leading-none text-cyan-900 drop-shadow-lg align-text-bottom">{aqiData?.aqiDisplay}</h3> */}
            <p className="font-serif text-lg">AQI</p>
          </div>
          {/* <h5 className="font-verdana lg:text-xl lg:leading-7 font-semibold text-cyan-900 px-4 text-center text-sm">{aqiData?.category}</h5> */}
        </div>
    );
};