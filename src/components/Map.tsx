import * as React from 'react';
import {useEffect} from 'react';
import {useGetStaticMapQuery} from "../redux/slices/googleApiSlice";

type props = {
    selectedLocation: any;
}

export const Map = ({selectedLocation}: props) => {


    const [size, setSize] = React.useState("400x400");

    const { data, error, isLoading } = useGetStaticMapQuery({selectedLocation, size}, {skip: !selectedLocation});

    useEffect(() => {
        console.log("data", data);
    }, [data])

    return (
        <img 
            className="rounded-md shadow-lg h-[400px] w-[400px]"
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedLocation.lat},${selectedLocation.lon}&zoom=13&size=400x400&key=AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA`} 
        />
    )
}