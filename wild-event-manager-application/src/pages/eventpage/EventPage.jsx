import React, { useState, useEffect } from "react";
import Event from "../../components/event/Event";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/EventService";
import BackButton from "../../components/buttons/backButton/BackButton";
import Loading from "../loadingpage/LoadingPage";

const EventPage = () => {
	const { id } = useParams()
	const [event, setEvent] = useState(null)

	useEffect(() => {
		const getEvent = async () => {
			try {
				const data = await getEventById(id)
				setEvent(data)
			} catch (error) {
				console.error("Failed to get event")
			}
		}
		getEvent()
	}, [id])

	return (
		<div className="mx-5">
			{event === null ? (
				<Loading></Loading>
			) : (
				<Event event={event} />
			)}
			<BackButton></BackButton>
		</div>
	)
}

export default EventPage
