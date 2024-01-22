import React from "react"
import EventCard from "./EventCard"
import "./EventsList.scss"
import { useEventToday } from "../../services/providers/EventTodayProvider"

const EventsList = () => {
	const eventsToday = useEventToday();

	return (
		<div className='d-flex flex-column justify-content-center mx-5'>
			<div
				id='carouselExampleDark'
				className='carousel carousel-dark slide carousel-centered'
				data-bs-ride='carousel'>
				<div className='carousel-indicators'>
					{eventsToday?.map((_, index) => (
						<button
							key={index}
							type='button'
							data-bs-target='#carouselExampleDark'
							data-bs-slide-to={index}
							className={index === 0 ? "active" : ""}
							aria-current={index === 0 ? "true" : undefined}
							aria-label={`Slide ${index + 1}`}></button>
					))}
				</div>
				<div className='carousel-inner'>
					{eventsToday.map((event, index) => (
						<EventCard key={index} event={event} isActive={index === 0} />
					))}
				</div>
				<button
					className='carousel-control-prev'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='prev'>
					<span
						className='carousel-control-prev-icon arrow'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Previous</span>
				</button>
				<button
					className='carousel-control-next arrow'
					type='button'
					data-bs-target='#carouselExampleDark'
					data-bs-slide='next'>
					<span
						className='carousel-control-next-icon arrow'
						aria-hidden='true'></span>
					<span className='visually-hidden'>Next</span>
				</button>
			</div>
		</div>
	)
}

export default EventsList
