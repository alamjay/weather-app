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
      <div className="rounded-md shadow-lg h-[368px] w-[368px] bg-gray-200 py-8 flex flex-col items-center justify-between">
        <h2 className="font-serif text-3xl font-extrabold text-cyan-950">Air Quality</h2>
        <div className="flex flex-col gap-2 text-center">
          <h3 className="font-verdana font-black text-9xl text-cyan-900">{aqiData?.aqiDisplay}</h3>
          <p className="font-serif text-lg">AQI</p>
        </div>
        <h5 className="font-verdana text-xl font-semibold text-cyan-900">{aqiData?.category}</h5>
      </div>
    );
};