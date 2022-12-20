import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Map.css'

export default function Home ()
{
    const { isLoaded } = useLoadScript({
        googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAPS_API_KEY,
    });
    
    if(!isLoaded) return <div>Loading...</div>
    return <Map />;
}

/* <FontAwesomeIcon icon = { faLocationDot }/> */

function Map ()
{
    const center = useMemo(() => ({lat: 24.78721807955473, lng: 120.99669979491321}), []);

    return (
        <GoogleMap 
            zoom={18} 
            center={{lat: 24.78721807955473, lng: 120.99669979491321}}
            mapContainerClassName="map-container"
        >
            
            <Marker position={{lat: 24.78721807955473, lng: 120.99669979491321}} />
        
        </GoogleMap>
    );
}