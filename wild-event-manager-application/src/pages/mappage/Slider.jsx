import React from 'react';
import { useEventToday } from '../../services/providers/EventTodayProvider';
import { RemainingTime } from './RemainingTime';

const commonStyle = {
  backgroundColor: "#6938D3",
  color: 'wheat',
  marginBottom: "10px",
  border: '10px solid black',
};

const Slider = () => {
  const eventsToday = useEventToday();
  // const closestEvent = findTheClosestEvent();

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
      <div className="track-wrapper">
        <ul className="track">
          {eventsToday.map(event => (
            <li className="track__item" key={event.id}>
              <div className='content' style={commonStyle}>
                <div>Location: {event.location}</div>
                <div>Event: {event.title}</div>
                <div>Start at: {new Date(event.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                {/* {closestEvent && closestEvent.id === event.id && ( */}
                  <RemainingTime eventId={event.id} key={event.id} eventTime={event.startsAt}></RemainingTime>
                {/* )} */}
                <button>Go to</button>
              </div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Slider;
