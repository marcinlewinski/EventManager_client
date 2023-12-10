import React, { useEffect, useState, useRef } from "react";
import { createRoot } from 'react-dom/client';
import mapboxgl from 'mapbox-gl';
import Marker from "./Marker"
import './Map.scss';
import { useNavigate } from 'react-router-dom';

const Map = ({ contextMap }) => {


  const [mapData, setMapData] = useState(contextMap);
  const mapContainerRef = useRef(null);
  mapboxgl.accessToken = `${process.env.REACT_APP_API_KEY}`;
  const navigate = useNavigate();


  useEffect(() => {
    if (Object.keys(mapData).length < 1) {
      setMapData(contextMap);
      console.log("w")
    }
  }, [contextMap]);

  const handleDetails = (feature) => {
    navigate(`/location/${feature.id}`);
  }
  useEffect(() => {

    if (Object.keys(contextMap).length > 0) {
      const map = new mapboxgl.Map({
        container: mapContainerRef.current,
        style: 'mapbox://styles/mapbox/streets-v9',
        center: [mapData.coordinate.longitude, mapData.coordinate.latitude],
        zoom: mapData.zoom,
        bearing: mapData.bearing
      }, []);
      mapData.locations.forEach((location, index) => {

        const markerPopup = new mapboxgl.Popup({ offset: [0, -15] })
        const button = document.createElement('button');
        button.textContent = 'events ';
        button.addEventListener('click', () => handleDetails(location));
    
        const h2 = document.createElement('h2');
        h2.textContent = location.title;

  
        const popupContent = document.createElement('div');
        popupContent.appendChild(h2);
        popupContent.appendChild(button);

        markerPopup.setDOMContent(popupContent);


    

        const ref = React.createRef();
        ref.current = document.createElement('div');
        createRoot(ref.current).render(<Marker index={index + 1} feature={location} ></Marker>);
        new mapboxgl.Marker(ref.current)
          .setLngLat([location.longitude, location.latitude])
          .setPopup(markerPopup)
          .addTo(map);
      });
      map.addControl(new mapboxgl.NavigationControl(), 'top-right');
      return () => map.remove();
    }
  }, [mapData]);

  return (
  <>
  <div className="map-container" ref={mapContainerRef} />;

  </>  
  )
  
};


export default Map;

