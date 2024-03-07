import React, { useState } from "react";

//include images into your bundle
import rigoImage from "../../img/rigo-baby.jpg";

//create your first component
const Home = () => {
	const [selectColor, setSelectColor ] = useState("red")

	return (
	
		<div className="container d-flex justify-content-center">

		<div className="traffic-light">


			<div 
			onClick = {() => setSelectColor ("red")}
			className={"light red"+(selectColor === "red" ? " selected" : "")}></div>


			<div 
			onClick = {() => setSelectColor ("yellow")}
			className={"light yellow"+(selectColor === "yellow" ? " selected" : "")}></div>


			<div 
			onClick = {() => setSelectColor ("green")}
			className={"light green"+(selectColor === "green" ? " selected" : "")}></div>

			
		</div>
		</div>
	);
};

export default Home;
