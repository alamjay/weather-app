import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

// Define types for the parameters
interface StaticMapQueryArgs {
    selectedLocation: {
        lat: number;
        lon: number;
    };
    size: string;
}

export const googleApi = createApi({
    reducerPath: 'googleApi',
    baseQuery: fetchBaseQuery({ baseUrl: "" }),
    endpoints: (builder) => ({
        getStaticMap: builder.query<any, StaticMapQueryArgs>({
            query: ({selectedLocation, size,}) => `https://maps.googleapis.com/maps/api/staticmap?center=${selectedLocation?.lat},${selectedLocation?.lon}&zoom=13&size=${size}&key=${process.env.REACT_APP_GOOGLE_API_KEY}`
        }),

        getAirQuality: builder.query({
            query: (body) => ({
                url: `https://airquality.googleapis.com/v1/currentConditions:lookup?key=${process.env.REACT_APP_GOOGLE_API_KEY}`,
                method: "POST",
                body: {
                    "location": {
                        "latitude": body.lat,
                        "longitude": body.lon
                    }
                }
            })
        })
    }),
})

export const { useGetStaticMapQuery, useGetAirQualityQuery } = googleApi;