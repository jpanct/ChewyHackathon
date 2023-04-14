
import React, { useEffect, useRef } from "react";
import googleMapsLoader from "./google-maps-loader";

const Map = ()=>{
    const mapRef = useRef(null);
    useEffect(() => {
        const loadMap = googleMapsLoader({
          key: "AIzaSyAafmD91TUw9dQsULmGeNI2VzDiQni7uwc",
          // Add other bootstrap parameters as needed, using camel case.
          // Use the 'v' parameter to indicate the version to load (alpha, beta, weekly, etc.)
        });
      
        loadMap("maps", "geometry").then(() => {
          const map = new window.google.maps.Map(mapRef.current, {
            center: { lat: -34.397, lng: 150.644 },
            zoom: 8,
          });
          // Use the map object to add markers, polygons, etc.
        });
      }, []);

    
    return(
        <div>
            <h1>Google Maps Page</h1>
            <div ref={mapRef} style={{ height: "500px" }}></div>
        </div>
    )
}

export default Map;
