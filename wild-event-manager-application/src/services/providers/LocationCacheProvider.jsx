import React, { createContext, useContext, useState } from "react";
import { fetchLocationById } from "../LocationService";

const LocationCacheContext = createContext();

export const useLocationCache = () => {
    const context = useContext(LocationCacheContext);

    if (!context) {
        throw new Error("useLocationCache must be used within LocationCacheProvider");
    }
    return context;
}

export const LocationCacheProvider = ({ children }) => {
    const [locations, setLocations] = useState([]);

    const getLocationById = async (id) => {
        try {
            const locationFromCache = locations.find(location => location.id === id);

            if (!locationFromCache) {
                const result = await fetchLocationById(id);
                setLocations(prev => [...prev, result]);
                return result;
            }

            return locationFromCache;
        } catch (error) {
            console.error("Failed to fetch location by ID: ", error);
            throw error;
        }
    }
    return(
        <LocationCacheContext.Provider value={getLocationById}>
            {children}
        </LocationCacheContext.Provider>
    )
}
