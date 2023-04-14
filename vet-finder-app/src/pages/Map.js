
import React, { useEffect, useRef } from "react";
import googleMapsLoader from "./google-maps-loader";
import style from "../style/filter.module.css";
import CircleLogo from "../elements/CircleLogo.png"

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

        // Geocode an address or zip code
        const geocoder = new window.google.maps.Geocoder();
        geocoder.geocode({ address: "1600 Amphitheatre Parkway, Mountain View, CA" }, (results, status) => {
            if (status === "OK") {
            // Use the first result to create a marker
            const marker = new window.google.maps.Marker({
                position: results[0].geometry.location,
                map: map,
                title: "Google",
            });
            } else {
            alert("Geocode was not successful for the following reason: " + status);
            }
      });
          // Use the map object to add markers, polygons, etc.
        });
      }, []);

    
      return(
        <div>
            <div className={style.topbar}> 
                <img src={CircleLogo} alt="Circle Logo" />
                <p className={style.title}>  </p>
            </div>
            <div ref={mapRef} style={{ height: "500px" }}></div>
        </div>
    )
}

export default Map;
