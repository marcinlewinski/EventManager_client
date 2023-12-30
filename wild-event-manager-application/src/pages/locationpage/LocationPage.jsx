import React, { useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Location from "../../components/location/Location";
import BackButton from "../../components/buttons/backButton/BackButton";
import { useLocationCache } from "../../services/providers/LocationCacheProvider";
import Loading from "../loadingpage/LoadingPage";

const LocationPage = () => {
	const { id } = useParams();
	const [location, setLocation] = useState(null);
	const getLocationById = useLocationCache();

	useEffect(() => {
		const fetchLocation = async () => {
			try {
				const data = await getLocationById(id);
				setLocation(data);
			} catch (error) {
				console.error("Error fetching location:", error);
			}
		}

		fetchLocation();
	}, [id])


	return (
		<div>
			{location !== null ? (
				<Location location={location} />
			) : (
				<Loading></Loading>
			)}
			<BackButton></BackButton>
		</div>
	)
}
export default LocationPage
