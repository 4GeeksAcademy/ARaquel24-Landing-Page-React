import React from "react";
import Nav from "./nav";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";
import Jumbotron from "./jumbotron";
import Card from "./card";

//create your first component
const Home = () => {
	return (
		<>
			<Nav/>
			<div className="container row position-absolute top-50 start-50 translate-middle">
				<Jumbotron/>
				<Card/>
				<Card/>
				<Card/>
				<Card/>
			</div>
		</>
		
	);
};

export default Home;
