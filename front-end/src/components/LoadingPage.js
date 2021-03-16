import React, { useEffect } from "react";
import img from "../imgs/technician.png";

function LoadingPage() {
	// useEffect hook for proper page navigation
	useEffect(() => {
		setTimeout(() => {
			window.location.pathname = "/tech";
		}, 2500);
	}, []);

	// Component render
	return (
		<div className="container-fluid" id="loadingpage">
			<h1>LOGGING IN</h1>
			<div
				className="ldBar label-center img-fluid"
				data-type="fill"
				data-img={img}
				data-value="100"
				data-duration="2"
				data-fill-background="transparent"
				// data-fill-background-extrude="1"
			></div>
		</div>
	);
}

export default LoadingPage;
