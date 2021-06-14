// ! Imports
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
// ? Componts
import Header from "./Components/Header";
import Footer from "./Components/Footer";
// ? Pages
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import About from "./Pages/About";
import Enrol from "./Pages/Enrol";
import StaterPlan from "./Pages/StaterPlan";
import ProPlan from "./Pages/ProPlan";
// ? CSS
import "./css/tailwind.css";
// ? Images
import profile from "./img/profile.png";

function App() {
	return (
		<>
			<Router>
				<Header />
				<main>
					<Switch>
						<Route exact path="/">
							<Home />
						</Route>
						<Route exact path="/contact">
							<Contact />
						</Route>
						<Route exact path="/about">
							<About profile={profile} />
						</Route>
						<Route exact path="/enroll">
							<Enrol />
						</Route>
						<Route exact path="/enroll/starter-plan">
							<StaterPlan />
						</Route>
						<Route exact path="/enroll/pro-plan">
							<ProPlan />
						</Route>
					</Switch>
				</main>
				<Footer />
			</Router>
		</>
	);
}

export default App;
