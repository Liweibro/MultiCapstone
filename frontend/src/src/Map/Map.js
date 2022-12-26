import { useMemo } from 'react';
import { GoogleMap, useLoadScript, Marker, Circle } from '@react-google-maps/api';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faLocationDot } from '@fortawesome/free-solid-svg-icons'
import './Map.css'

import React from 'react';
import { Link } from "react-router-dom";
import { BiMap, BiReceipt, BiGroup } from "react-icons/bi";

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
        <>
        <div className='top_navbar_container'>
            <Link to={'/joinorder'}>
                <div className='list'>
                <span className = "top_nav_icon"> <BiReceipt/> </span>
                <br/>
                <span className="top_nav_text">List</span>
                </div>
            </Link>

            <Link to={'/Map'}>
                <div className='map'>
                    <span className = "top_nav_icon"> <BiMap/> </span>
                    <br/>
                    <span className = "top_nav_text">Map</span>
                </div>
            </Link>

            <Link to={'/joinorder'}>
                <div className='friends'>
                <span className = "top_nav_icon"> <BiGroup/> </span>
                <br/>
                <span className="top_nav_text">Friends</span>
                </div>
            </Link>
        </div>

        <GoogleMap 
            zoom={18} 
            center={{lat: 24.78721807955473, lng: 120.99669979491321}}
            mapContainerClassName="map-container"
        >
            
            <Marker position={{lat: 24.78721807955473, lng: 120.99669979491321}} />
        
        </GoogleMap>
        </>
    );
}