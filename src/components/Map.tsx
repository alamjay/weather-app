import * as React from 'react';
import {useEffect} from 'react';
import {useGetStaticMapQuery} from "../redux/slices/googleApiSlice";

type props = {
    selectedLocation: any;
}

export const Map = ({selectedLocation}: props) => {


    const [size, setSize] = React.useState("360x360");

    const { data, error, isLoading } = useGetStaticMapQuery({selectedLocation, size}, {skip: !selectedLocation});

    useEffect(() => {
        console.log("data", data);
    }, [data])

    return (
        <img 
            className="rounded-md shadow-lg h-[368px] w-[368px]"
            src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedLocation.lat},${selectedLocation.lon}&zoom=13&size=368x368&key=AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA`} 
        />
    )
}