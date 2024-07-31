import * as React from 'react';
import {useEffect} from 'react';
import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

type props = {
    selectedLocation: any;
}

export const MapCard = ({selectedLocation}: props) => {


    const [size, setSize] = React.useState("360x360");

    // const { data, error, isLoading } = useGetStaticMapQuery({selectedLocation, size}, {skip: !selectedLocation});

    return (
        <div className="flex justify-center">
            <APIProvider apiKey={process.env.REACT_APP_GOOGLE_API_KEY || ""}>
                <div className="overflow-hidden shadow-lg rounded-lg">
                    <Map
                        className="w-full h-[176px] md:w-[242px] lg:w-[304px] xl:w-[368px] sm:max-w-[500px] sm:w-[500px] gap-x-4"
                        // style={{width: '100vw', height: '100vh'}}
                        defaultCenter={{lat: selectedLocation.lat, lng: selectedLocation.lon}}
                        center={{lat: selectedLocation.lat, lng: selectedLocation.lon}}
                        defaultZoom={13}
                        gestureHandling={'greedy'}
                        disableDefaultUI={true}
                    />
                </div>
            </APIProvider>
        </div>
        // <img 
        //     className="rounded-md shadow-lg h-[368px] w-[368px]"
        //     src={`https://maps.googleapis.com/maps/api/staticmap?center=${selectedLocation.lat},${selectedLocation.lon}&zoom=13&size=368x368&key=AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA`} 
        // />
    )
}