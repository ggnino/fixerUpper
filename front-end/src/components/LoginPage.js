import React from "react";

function LoginPage() {
	// variable for faux password
	const superSecurity = "************";

	// Component render
	return (
		<div className="loginpage">
			<h1>Login Page</h1>
			<form className="form-group p-4">
				<label>Username:</label>
				<input
					className="form-control"
					value="Admin"
					name="username"
					type="text"
				/>
				<label>Password:</label>
				<input
					value={superSecurity}
					className="form-control"
					name="password"
					type="password"
				/>
				<h1>
					<a href="/loading" className="btn btn-success">
						Login
					</a>
				</h1>
			</form>
		</div>
	);
}

export default LoginPage;
