import React, { useEffect, useState } from "react";
import Issue from "./Issue";
import Axios from "axios";

function TechPage() {
	// useState hook for component info
	const [issues, setIssues] = useState([]);

	// useEffect hook for getting component info
	useEffect(() => {
		Axios.get("/techissues")
			.then((res) => {
				setIssues([...res.data]);
			})
			.catch((err) => {
				console.log(err);
			});
	}, []);

	// Event handler for deleting from database and then, updating  to reflect the changes
	const onDelete = (id) => {
		let updated = issues.filter((issue) => issue._id !== id);

		Axios.delete("/techissues" + id)
			.then(() => {
				setIssues([...updated]);
				console.log("Delete Successful");
			})
			.catch((err) => console.log(err));
	};

	// Event handler for closing each issue and updating it in the database
	const onClose = (id, func) => {
		let updated = issues.map((issue) => {
			if (issue._id === id) {
				return {
					...issue,
					status: "Closed",
					updated: new Date().toLocaleString().toString(),
				};
			} else return issue;
		});

		Axios.put("/techissues" + id, {
			status: "Closed",
			updated: new Date().toLocaleString().toString(),
		}).then(() => {
			setIssues([...updated]);
			console.log("Updated Status Successful");
		});
	};

	// Component render
	return (
		<>
			<svg
				id="myDiv2"
				className="img-fluid"
				xmlns="http://www.w3.org/2000/svg"
				viewBox="0 0 1440 320"
			>
				<path
					fill="#faf0ca"
					fillOpacity="1"
					d="M0,320L0,192L480,192L480,224L960,224L960,128L1440,128L1440,320L960,320L960,320L480,320L480,320L0,320L0,320Z"
				></path>
			</svg>
			<div className="container-fluid" id="techpage">
				<h1 className="p-2">Technician Dashboard</h1>
				<div className="d-flex flex-row  flex-wrap container-fluid align-items-start p-1">
					{issues.map((info, index) => (
						<Issue
							key={"Issue #" + index}
							data={info}
							onDelete={onDelete}
							num={"Issue #" + (index + 1)}
							onClose={onClose}
						/>
					))}
				</div>
				<svg
					className="img-fluid"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 1440 320"
				>
					<path
						fill="#0d3b66"
						fillOpacity="1"
						d="M0,32L0,64L205.7,64L205.7,256L411.4,256L411.4,192L617.1,192L617.1,288L822.9,288L822.9,96L1028.6,96L1028.6,192L1234.3,192L1234.3,224L1440,224L1440,320L1234.3,320L1234.3,320L1028.6,320L1028.6,320L822.9,320L822.9,320L617.1,320L617.1,320L411.4,320L411.4,320L205.7,320L205.7,320L0,320L0,320Z"
					></path>
				</svg>
			</div>
		</>
	);
}

export default TechPage;
