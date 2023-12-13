import React, { useEffect, useState } from "react";

export const RemainingTime = ({ eventTime }) => {
    const isAllDay = new Date(eventTime).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' }) === "00:00"


    const calculateRemainingTime = () => {
        const currentTime = new Date();
        const currentEndTime = new Date(eventTime);
        const timeDifference = currentEndTime - currentTime;

        const hours = Math.floor((timeDifference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((timeDifference % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((timeDifference % (1000 * 60)) / 1000);

        return { hours, minutes, seconds };
    };

    const [remainingTime, setRemainingTime] = useState(calculateRemainingTime);
    useEffect(() => {

        if (eventTime.toString() !== '00:00') {
            const intervalId = setInterval(() => {
                setRemainingTime(calculateRemainingTime());
            }, 1000);

            return () => clearInterval(intervalId);
        }
    }, [eventTime]);

    return (
        isAllDay ? (
          <div>
            All day long
          </div>
        ) : (
          <div key={eventTime.id}>
            Time left: {(
              remainingTime.hours <= 0 &&
              remainingTime.minutes <= 0 &&
              remainingTime.seconds <= 0
            ) ? (
              '00:00:00'
            ) : (
              `${remainingTime.hours < 10 ? `0${remainingTime.hours}` : remainingTime.hours}:${remainingTime.minutes < 10 ? `0${remainingTime.minutes}` : remainingTime.minutes}:${remainingTime.seconds < 10 ? `0${remainingTime.seconds}` : remainingTime.seconds}`
            )}
          </div>
        )
      );
      
};
