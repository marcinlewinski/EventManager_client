import React, { createContext, useContext, useEffect, useState } from "react";
import { getEventById } from "../EventService";

const EventCacheContext = createContext();

export const useEventCache = () => {
    const context = useContext(EventCacheContext);

    if (!context) {
        throw new Error("useEventCache must be used within EventCacheProvider");
    }
    return context;
}

export const EventCacheProvider = ({ children }) => {
    const [eventCache, setEventCache] = useState([]);

    const fetchEventById = async (id) => {
        try {
            const cachedEvent = eventCache.find(event => event.id === id);

            if (cachedEvent) {
                return cachedEvent;
            } else {
                const response = await getEventById(id);
                const isEventInCache = eventCache.some(event => event.id === response.id);

                if (!isEventInCache) {
                    setEventCache(prevCache => [...prevCache, response]);
                }

                return response;
            }
        } catch (error) {
            console.error("Failed to fetch event by ID: ", error);
            throw error;
        }
    };


    return (
        <EventCacheContext.Provider value={{ fetchEventById, eventCache}}>
            {children}
        </EventCacheContext.Provider>
    );
};
