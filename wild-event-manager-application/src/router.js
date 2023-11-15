import Layout from "./pages/layout/Layout.jsx"
import ErrorPage from "./pages/layout/Layout.jsx"
import MapPage from "./pages/mappage/MapPage.jsx"
import EventsPage from "./pages/eventspage/EventsPage.jsx"
import EventPage from "./pages/eventpage/EventPage.jsx"
import LocationPage from "./pages/locationpage/LocationPage.jsx"
import { createBrowserRouter } from "react-router-dom"
import { MapProvider } from "./services/providers/MapProvider.jsx"

const router = createBrowserRouter([
	{
		path: "/",
		element: (
			<Layout />
		),
		errorElement: <ErrorPage />,
		children: [
			{
				path: "/",
				element: (
					<MapProvider value={{ map: {} }}>
						<MapPage />
					</MapProvider>
				),
				errorElement: <ErrorPage />,
			},
			{
				path: "/events",
				element: <EventsPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/event/:id",
				element: <EventPage />,
				errorElement: <ErrorPage />,
			},
			{
				path: "/location/:id",
				element: <LocationPage />,
				errorElement: <ErrorPage />,
			},
		],
	},
])

export default router
