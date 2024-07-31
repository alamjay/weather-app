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
        }),

        getPollenLevel: builder.query({
            query: (selectedLocation) => ({
                url: `https://pollen.googleapis.com/v1/forecast:lookup?key=${process.env.REACT_APP_GOOGLE_API_KEY}&location.latitude=${selectedLocation.lat}&location.longitude=${selectedLocation.lon}&days=1`
            })
        })
    }),
})

export const { useGetStaticMapQuery, useGetAirQualityQuery, useGetPollenLevelQuery } = googleApi;