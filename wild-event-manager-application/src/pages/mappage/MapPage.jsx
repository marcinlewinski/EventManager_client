import React, { useState } from "react";
import Map from "../../components/map/Map";
import EventsButton from "../../components/buttons/EventsButton";
import { useMap } from "../../services/providers/MapProvider";
import './MapStyle.scss';
import AccordionWithSlider from "./AccordionWithSlider"; // Zakładam, że komponent ten znajduje się w tym samym folderze co MapPage.

const MapPage = () => {
  const { map: contextMap } = useMap();
  const [isDivExpanded, setIsDivExpanded] = useState(false);

  const handleToggleDivSize = () => {
    setIsDivExpanded(!isDivExpanded);
  };

  return (
    Object.keys(contextMap).length > 0 ? (
      <div>
        <EventsButton />
        <Map contextMap={contextMap} />
        <AccordionWithSlider isDivExpanded={isDivExpanded} handleToggleDivSize={handleToggleDivSize} />

      </div>
    ) : null
  );
}

export default MapPage;
