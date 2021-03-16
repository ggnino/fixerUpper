import React, { useState } from "react";
import img from "../imgs/virus.png";
import img2 from "../imgs/email.png";
import img3 from "../imgs/tech2.png";
import Axios from "axios";

function UserPage() {
	// useState hook for proper component styling
	const [style, setStyle] = useState({
		btn: "img-fluid p-1 mb-1",
		form: "form-group p-2",
		display: { display: "" },
		h1: "Report Issue",
		img: img,
		image: "imgResize img-fluid",
		h: "",
	});

	// useState hook for receiving user input
	const [userInput, setUserInput] = useState({
		name: "",
		email: "",
		issue: "",
		status: "Open",
		created: "",
		updated: "Awaiting update...",
	});

	// Variable to receive user input from form
	let input;

	// Event handler for receiving user input
	const getInput = (e) => {
		input = e.target.value;
		setUserInput({ ...userInput, [e.target.name]: input });
	};

	// Event handler for saving to actual database
	const saveToDB = () => {
		userInput.created = new Date().toLocaleString();
		console.log(userInput.created);
		Axios.post("/techissues", { ...userInput })
			.then((data) => console.log(data))
			.catch((err) => console.log(err));
	};

	// Event handler for submitting component info and applying proper styling
	const submitter = (e) => {
		e.preventDefault();

		saveToDB();
		setStyle({
			...style,
			h: "ld ld-fade-out",
			form: "form-group p-2 ld ld-fade-out",
			image: "imgResize img-fluid ld ld-fade-out",
		});

		setTimeout(() => {
			setStyle({
				...style,
				display: { display: "none" },
				h: "ld ld-fade-in",
				h1: "A tech will contact you asap.Thank you!",
				image: "imgResize img-fluid ld ld-fade-in",
				img: img3,
			});
		}, 1000);
	};

	// Component render
	return (
		<div className="userpage" id="user">
			<h1 className={style.h}>{style.h1}</h1>
			<h1 className="m-0 p-0">
				<img
					className={style.image}
					alt="Computer Virus"
					src={style.img}
					id="userimg"
				/>
			</h1>

			<form className={style.form} onSubmit={submitter}>
				<label style={style.display}>Name:</label>
				<input
					style={style.display}
					onChange={getInput}
					className="form-control"
					type="text"
					name="name"
				/>
				<label style={style.display}>Email:</label>
				<input
					style={style.display}
					onChange={getInput}
					className="form-control"
					type="email"
					name="email"
				/>
				<label style={style.display}>Issue:</label>
				<textarea
					style={style.display}
					onChange={getInput}
					className="form-control"
					type="text"
					name="issue"
				/>
				<h1>
					<button
						className="btn btn-success m-3"
						style={style.display}
						type="submit"
					>
						Submit
						<img className={style.btn} src={img2} alt="submit img" />
					</button>
				</h1>
			</form>
		</div>
	);
}

export default UserPage;
