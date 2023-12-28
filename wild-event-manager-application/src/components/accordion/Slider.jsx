import React from 'react';
import { useEventToday } from '../../services/providers/EventTodayProvider';
import { RemainingTime } from './RemainingTime';
import { useGlobalState } from '../../services/providers/GlobalGotoLocationProvider';
import { useNavigate } from 'react-router-dom';


const Slider = () => {
  const eventsToday = useEventToday();
  const navigate = useNavigate();

  return (
    <div className='accordion_body'>
      <div className="track-wrapper">
        <ul className="track">
          {eventsToday.length === 0 ? (
            <li className="track__item">
              <div className='content' >
                <p>
                  There is no upcoming events!
                </p>
              </div>
            </li>

          ) : (
            null
          )}
          {eventsToday.map(event => (
            <li className="track__item" key={event.id}>
              <div className='content' >
                <div>Event: {event.title}</div>
                <div>Start at: {new Date(event.startsAt).toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}</div>
                <RemainingTime eventId={event.id} key={event.id} eventTime={event.startsAt}></RemainingTime>
                <button className='go-to-button' onClick={() => { navigate(`/event/${event.eventId}`) }} >
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
