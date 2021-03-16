import React, { useState, useEffect } from "react";
import img from "../imgs/bug.png";
import techImg from "../imgs/tech.png";

function Navbar() {
	// Variable
	const path = window.location.pathname;

	// useState hook for styling
	const [style, setStyle] = useState({
		href: "#homepage",
		nav: {},
		log: { btn: "Login", href: "/login" },
		bg: {},
	});

	// useEffect hook for proper page styling
	useEffect(() => {
		if (path === "/") {
			window.onscroll = scroller;
		} else if (path === "/login") {
			setStyle({
				href: "/",
				nav: { display: "none" },
				log: style.log,
				bg: {
					backgroundColor: "#0d3b66",
					borderBottom: "2px solid gold",
					transitionProperty: "none",
				},
			});
		} else if (path === "/loading") {
			setStyle({
				href: "#",
				nav: { display: "none" },
				log: style.log,
				bg: {
					backgroundColor: "#0d3b66",
					borderBottom: "2px solid gold",
					transitionProperty: "none",
				},
			});
		} else if (path === "/tech") {
			setStyle({
				href: "#",
				nav: { display: "initial" },
				log: { btn: "Log out", href: "/" },
				bg: {
					backgroundColor: "#0d3b66",
					borderBottom: "2px solid gold",
					transitionProperty: "none",
				},
			});
		}
	}, [path]);

	// Event handler for scrolling and applying the proper styling
	const scroller = () => {
		if (window.pageYOffset >= 400) {
			setStyle({
				href: style.href,
				nav: style.nav,
				log: style.log,
				bg: { backgroundColor: "#0d3b66", borderBottom: "2px solid gold" },
			});
		} else {
			setStyle({
				href: style.href,
				nav: style.nav,
				log: style.log,
				bg: { backgroundColor: "initial", border: "none" },
			});
		}
	};

	// Component render
	return (
		<nav
			style={style.bg}
			className="navbar navbar-expand-lg navbar-light fixed-top"
		>
			<div className="container-fluid">
				<a className="navbar-brand" href={style.href}>
					<img className="img-fluid" src={img} alt="nav logo" />
				</a>
				<button
					className="navbar-toggler"
					type="button"
					data-bs-toggle="collapse"
					data-bs-target="#navbarNavAltMarkup"
					aria-controls="navbarNavAltMarkup"
					aria-expanded="false"
					aria-label="Toggle navigation"
				>
					<span className="navbar-toggler-icon"></span>
				</button>
				<div className="collapse navbar-collapse" id="navbarNavAltMarkup">
					<div className="navbar-nav">
						<a style={style.nav} className="nav-link" href={style.log.href}>
							<img className="img-fluid" src={techImg} alt="tech login" />
							{style.log.btn}
						</a>
					</div>
				</div>
			</div>
		</nav>
	);
}

export default Navbar;
