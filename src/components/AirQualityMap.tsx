import * as React from 'react';
import { useEffect } from 'react';
// import {APIProvider, Map, MapCameraChangedEvent} from '@vis.gl/react-google-maps';

export const AirQualityMap = ({selectedLocation}: any) => {
    return (
        <>
            {/* {selectedLocation &&
                <APIProvider apiKey="AIzaSyATZXXMOQdzjJxoD85in2g3hFlqI5O79lA">
                    <Map
                        defaultZoom={13}
                        defaultCenter={ { lat: selectedLocation.lat, lng: selectedLocation.lon } }
                        // onCameraChanged={ (ev: MapCameraChangedEvent) =>
                        //     console.log('camera changed:', ev.detail.center, 'zoom:', ev.detail.zoom)
                        // }
                        >
                    </Map>
                </APIProvider>
            } */}
        </>
    )
}