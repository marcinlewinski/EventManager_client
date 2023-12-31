import React, { createContext, useContext, useEffect, useState } from "react";
import { getTodayEvents } from "../EventService";

const EventTodayContext = createContext();

export const useEventToday = () => {

    const context = useContext(EventTodayContext);

    if (!context) {
        throw new Error("useEventToday must be used within EventTodayProvider")
    }
    return context;
}
export const EventTodayProvider = ({ children }) => {
    const [eventsToday, setEventsToday] = useState({});

    useEffect(() => {
 
            const fetchEventsToday = async () => {
                try {
                    const response = await getTodayEvents();
                    setEventsToday(response);
                } catch (error) {
                    console.error("Failed to fetch EventsToday: ", error);
                }
            }
            fetchEventsToday();
 
    }, [])
      
    return (
        <EventTodayContext.Provider value={eventsToday}>
            {children}
        </EventTodayContext.Provider>
    )
}