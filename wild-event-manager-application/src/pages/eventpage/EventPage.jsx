import React, { useState, useEffect } from "react";
import Event from "../../components/event/Event";
import { useParams } from "react-router-dom";
import { getEventById } from "../../services/EventService";
import BackButton from "../../components/buttons/backButton/BackButton";
import Loading from "../loadingpage/LoadingPage";
import { useEventCache } from "../../services/providers/EventCacheProvider";

const EventPage = () => {
	const { id } = useParams()
	const [event, setEvent] = useState(null)
	const { fetchEventById } = useEventCache();

	useEffect(() => {
		const fetchData = async () => {
			try {
				const event = await fetchEventById(id);
				setEvent(event);
			} catch (error) {
				console.error("Error fetching event:", error);
			}
		};

		fetchData();
	}, [id]);

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
