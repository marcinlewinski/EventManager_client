import React, { createContext, useContext, useState, useEffect } from 'react';
import { getMap } from "../MapService"

const MapContext = createContext();

export const useMap = () => {
    const context = useContext(MapContext);
    if (!context) {
        throw new Error('useMap must be used within a RolesProvider');
    }
    return context;
};

export const MapProvider = ({ children }) => {
    const [map, setMap] = useState({});

    useEffect(() => {
        if (true) {
            const fetchMap = async () => {
                try {
                    const response = await getMap();
                    setMap(response);
console.log(response)
                } catch (error) {
                    console.error('Failed to fetch map:', error);
                }
            };

            fetchMap();
        } else {
            setMap({});
        }


    }, []);



    return (
        <MapContext.Provider value={{ map: map, }}>
            {children}
        </MapContext.Provider>
    );
};

