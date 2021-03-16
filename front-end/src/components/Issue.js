import React, { useState, useEffect } from "react";
import img from "../imgs/lock.png";
import img2 from "../imgs/trash.png";

function Issue(props) {
	// Destructing props
	const { data, onDelete, num, onClose } = props;
	const { _id, name, status, issue, created, updated } = data;

	// useState hook for animation
	const [animate, setAnimate] = useState({
		close: "img-fluid mb-1",
		delete: "img-fluid mb-1",
		style: { borderBottom: "" },
	});

	// useEffect hook for proper styling for each issue
	useEffect(() => {
		if (status === "Open")
			setAnimate({ ...animate, style: { borderBottom: "4px solid red" } });
		else setAnimate({ ...animate, style: { borderBottom: "4px solid green" } });
	}, [status]);

	// Event handlers for hovering and applying the correct styling
	const onMouseOver1 = () => {
		setAnimate({ ...animate, close: "img-fluid mb-1 ld ld-bounce" });
	};
	const onMouseOver2 = () => {
		setAnimate({ ...animate, delete: "img-fluid mb-1 ld ld-tremble" });
	};
	const onMouseOut1 = () => {
		setAnimate({ ...animate, close: "img-fluid mb-1" });
	};
	const onMouseOut2 = () => {
		setAnimate({ ...animate, delete: "img-fluid mb-1" });
	};

	// Component Render
	return (
		<div className="card m-2">
			<div className="card-header" style={animate.style}>
				<h2>{num || "Lorem ipsum"}</h2>
				<h3>{status || "Lorem ipsum"}</h3>
			</div>

			<ul className="list-group list-group-flush">
				<li className="list-group-item">
					<h4>Name:</h4>
					{name || "Lorem ipsum"}
				</li>
				<li className="list-group-item">
					<h4>Description:</h4>
					<p>{issue}</p>
				</li>
				<li className="list-group-item">
					<h4>Opened On:</h4> {created}
				</li>
				<li className="list-group-item">
					<h4>Closed On:</h4> {updated}
				</li>
			</ul>
			<div className="card-footer">
				<h2>
					<button
						className="btn btn-success m-2 p-2"
						onMouseOver={onMouseOver1}
						onMouseOut={onMouseOut1}
						onClick={() => {
							onClose(_id);
							setAnimate({
								...animate,
								style: { borderBottom: "4px solid green" },
							});
						}}
					>
						Close
						<img className={animate.close} alt="lock icon" src={img} />
					</button>
					<button
						className="btn btn-danger m-2 p-2"
						onMouseOver={onMouseOver2}
						onMouseOut={onMouseOut2}
						onClick={() => onDelete(_id)}
					>
						Delete
						<img className={animate.delete} alt="trash icon" src={img2} />
					</button>
				</h2>
			</div>
		</div>
	);
}

export default Issue;
