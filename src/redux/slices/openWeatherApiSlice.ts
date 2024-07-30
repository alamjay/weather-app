// http://api.openweathermap.org/data/2.5/forecast?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${appID}&units=metric

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openWeatherApi = createApi({
    reducerPath: 'openWeatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.openweathermap.org/data/2.5/" }),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query({
            query: (selectedLocation) => ({
                url: `forecast`,
                method: "GET",
                params: {
                    "lat": selectedLocation.lat,
                    "lon": selectedLocation.lon,
                    "appid": process.env.REACT_APP_OPEN_WEATHER_APP_ID,
                    "units": "metric"
                }
            })
        }),
    }),
})

export const { useGetWeatherForecastQuery } = openWeatherApi;