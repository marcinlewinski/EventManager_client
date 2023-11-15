import React, { useEffect, useState } from "react";
import Map from "../../components/map/Map"
import EventsButton from "../../components/buttons/EventsButton";
import { useMap } from "../../services/providers/MapProvider";



const MapPage = () => {
	const { map: contextMap } = useMap();

	return (
		Object.keys(contextMap).length > 0 ?
			<div>
				<EventsButton />
				<Map contextMap={contextMap} />
			</div>
			: null



	)
}

export default MapPage
