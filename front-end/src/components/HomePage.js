import React from "react";
import img from "../imgs/issue.png";

function HomePage() {
	// Component Render
	return (
		<>
			<div className="bg"></div>
			<div className="bg bg2 "></div>
			<div className="bg bg3"></div>
			<div className="homepage" id="homepage">
				<img className="imgResize img-fluid" alt="logo" src={img} />
				<h1>Welcome to Fixer Upper</h1>
				<h1>The #1 IT solution service!</h1>
				<a href="#user" className="btn btn-success m-2">
					Fix My Issue
				</a>
				<a href="#about" className="btn btn-primary m-2">
					Learn More
				</a>
				<svg
					id="myDiv"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#FAF0CA"
						fillOpacity="1"
						d="M0,192L0,256L360,256L360,128L720,128L720,96L1080,96L1080,160L1440,160L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z"
					></path>
				</svg>
			</div>
		</>
	);
}

export default HomePage;
