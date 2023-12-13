import React from "react"
import { Row, Col } from "react-bootstrap"
import EventCard from "./EventCard"
import "./EventsListDesktop.scss";
import { useEventToday } from "../../services/providers/EventTodayProvider";

const EventsDesktop = () => {
	const eventsToday = useEventToday();

	return (
		<Row className='mx-5 mt-5 events-position'>
			{eventsToday?.map((event, index) => (
				<Col key={index} md={12} lg={6} xxl={4} className='p-3'>
					<EventCard event={event} isActive={true} />
				</Col>
			))}
		</Row>
	)
}

export default EventsDesktop
