import React from "react";
import img1 from "../imgs/security.png";
import img2 from "../imgs/cost.png";
import img3 from "../imgs/support.png";

function AboutPage() {
	//Component Render
	return (
		<div className="about" id="about">
			<h1>About Us</h1>
			<div className="container-fluid">
				<div className="row">
					<div className="col-md">
						<h3>
							<img src={img3} alt="support" />
						</h3>
						<h3>Professionalism</h3>
						<p>
							24/7 live agents and on call technicians armed with state of the
							art tools. With best-in-class customer service.
						</p>
					</div>
					<div className="col-md">
						<h3>
							<img src={img2} alt="low cost" />
						</h3>
						<h3>Low-cost Solutions</h3>
						<p>
							We work with our clients to make sure we have the best solution,
							for the situation. If the issue was on our end, there will be
							no-extra cost to you!{" "}
						</p>
					</div>
					<div className="col-md">
						<h3>
							<img src={img1} alt="security" />
						</h3>
						<h3>Security</h3>
						<p>
							We think outside the box when it comes to security. We won't just
							fix any penetration leaks, we will make sure the issue won't
							happen now or ever again. Best security architecture in the
							industry!
						</p>
					</div>
				</div>
			</div>
			<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1440 320">
				<path
					fill="#0D3B66"
					fillOpacity="1"
					d="M0,192L0,256L360,256L360,128L720,128L720,96L1080,96L1080,160L1440,160L1440,320L1080,320L1080,320L720,320L720,320L360,320L360,320L0,320L0,320Z"
				></path>
			</svg>
		</div>
	);
}

export default AboutPage;
