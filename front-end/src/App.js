import "./App.css";
import HomePage from "./components/HomePage";
import Navbar from "./components/Navbar";
import UserPage from "./components/UserPage";
import AboutPage from "./components/AboutPage";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import LoginPage from "./components/LoginPage";
import LoadingPage from "./components/LoadingPage";
import TechPage from "./components/TechPage";

function App() {
	return (
		<>
			<Router>
				<Navbar />
				<Switch>
					<Route exact path="/">
						<HomePage />
						<AboutPage />
						<UserPage />
					</Route>

					<Route path="/login">
						<LoginPage />
					</Route>
					<Route path="/loading">
						<LoadingPage />
					</Route>
					<Route path="/tech">
						<TechPage />
					</Route>
				</Switch>
			</Router>
		</>
	);
}

export default App;
