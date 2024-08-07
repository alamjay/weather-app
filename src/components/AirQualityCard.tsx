import * as React from 'react';
import { FC, useEffect, useState } from 'react';
import { useGetAirQualityQuery } from '../redux/slices/googleApiSlice'
import { NotFoundCard } from './NotFoundCard';
import { LoadingIndicator } from './LoadingIndicator';

type props = {
  selectedLocation: any;
}

export const AirQualityCard: React.FC<props> = ({selectedLocation}: props) => {

  const [aqiData, setAqiData] = useState<any>(null)

  const { data, isLoading: airQualityIsLoading } = useGetAirQualityQuery(selectedLocation, { skip: !selectedLocation });

  useEffect(() => {
    if (!!data) {
      setAqiData(data.indexes[0])
    }
  }, [data])

    return (
      <div className="flex flex-col items-center w-full h-[176px] min-w-[171px] bg-gray-200 py-4 md:py-8 gap-y-4 shadow-lg rounded-lg">
          <h2 className="font-serif text-cardHeading leading-7 font-extrabold text-cyan-950">Air Quality</h2>
          {!airQualityIsLoading ? 
            !!aqiData ?
              <>
                <div className="flex gap-2 text-center text-end">
                  <h3 className="font-verdana font-black text-[3rem] lg:text-[3rem] leading-none text-cyan-900 drop-shadow-lg align-text-bottom">{aqiData?.aqiDisplay}</h3>
                  <p className="flex items-end font-serif text-lg align-bottom">AQI</p>
                </div>
                <h5 className="font-verdana lg:text-xl lg:leading-7 font-semibold text-cyan-900 px-4 text-center text-sm">{aqiData?.category}</h5>
              </>  :
              <NotFoundCard /> :
              <LoadingIndicator />
          }
        </div>
    );
};