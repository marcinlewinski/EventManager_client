import React, { useState } from "react";
import Map from "../../components/map/Map";
import EventsButton from "../../components/buttons/EventsButton";
import { useMap } from "../../services/providers/MapProvider";
import './MapStyle.scss';

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

				<div className='box' onClick={handleToggleDivSize}>
					<div className="center">
						<section id="item1">
							<div>
									<div>
										<a href="#item1">=</a>
									</div>
									{/* <div className={isDivExpanded ? "accordion__icon" : "accordion__icon_expanded"}>
										⯆
									</div> */}
							
								<div>
									<p className={isDivExpanded ? 'expanded-content' : 'collapsed-content'}>
										Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel beatae consequatur suscipit vero magnam nulla molestias alias praesentium atque, commodi error quis, unde aliquam distinctio blanditiis! Beatae, temporibus reprehenderit!Lorem ipsum dolor sit amet consectetur adipisicing elit. Sunt vel beatae consequatur suscipit vero magnam nulla molestias alias praesentium atque, commodi error quis, unde aliquam distinctio blanditiis! Beatae, temporibus reprehenderit!
									</p>
								</div>

							</div>
						</section>
					</div>
				</div>
			</div>
		) : null
	);
}

export default MapPage;
