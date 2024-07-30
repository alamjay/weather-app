// http://api.openweathermap.org/data/2.5/forecast?lat=${selectedLocation.lat}&lon=${selectedLocation.lon}&appid=${appID}&units=metric

import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const openWeatherApi = createApi({
    reducerPath: 'openWeatherApi',
    baseQuery: fetchBaseQuery({ baseUrl: "http://api.openweathermap.org/" }),
    endpoints: (builder) => ({
        getWeatherForecast: builder.query({
            query: ({lat, lon}) => ({
                url: `data/2.5/forecast`,
                method: "GET",
                params: {
                    "lat": lat,
                    "lon": lon,
                    "appid": process.env.REACT_APP_OPEN_WEATHER_APP_ID,
                    "units": "metric"
                }
            })
        }),
        getLocation: builder.query({
            query: ({term}) => ({
                url: "geo/1.0/direct",
                method: "GET",
                params: {
                    "q": term,
                    "limit": 5,
                    "appid": process.env.REACT_APP_OPEN_WEATHER_APP_ID
                }
            })
        })
    }),
})

export const { useGetWeatherForecastQuery, useGetLocationQuery } = openWeatherApi;