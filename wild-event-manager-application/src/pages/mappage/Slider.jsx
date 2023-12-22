import React from 'react';
import { useEventToday } from '../../services/providers/EventTodayProvider';
import { RemainingTime } from './RemainingTime';
import { Link } from 'react-router-dom';
import { useGlobalState } from '../../services/providers/GlobalGotoLocationProvider';



const Slider = () => {
  const eventsToday = useEventToday();
  // const closestEvent = findTheClosestEvent();
  const { selectedLocation, setGlobalLocation } = useGlobalState();


  if (!eventsToday || eventsToday.length === 0) {
    return null;
  }

  // function findTheClosestEvent() {
  //   if (eventsToday.length === 0) {
  //     return null;
  //   }

  //   let closestEvent = eventsToday[0];

  //   const currentTime = new Date();

  //   eventsToday.forEach((event) => {
  //     const eventTime = new Date(event.startsAt);

  //     if (eventTime > currentTime && eventTime < new Date(closestEvent.startsAt)) {
  //       closestEvent = event;
  //     }
  //   });

  //   return closestEvent;
  // }

  return (
    <div className='accordion_body'>
      <div className="track-wrapper" key={Math.random(Math.floor() / 100)}>
        <ul className="track">
          {eventsToday.map(event => (
            <li className="track__item" key={event.id}>
              <div className='content' >
                <div>Event: {event.title}</div>
                <div>Start at: {new Date(event.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <RemainingTime eventId={event.id} key={event.id} eventTime={event.startsAt}></RemainingTime>
                <button className='go-to-button' onClick={()=>{setGlobalLocation(event.location)}} >
                  Go to
                </button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
