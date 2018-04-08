//==============Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//==============Import styling
import "./App.css";

//==============Import components
import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";
import CollectAll from "./components/collect/CollectAll";
import ShowAll from "./components/show/ShowAll";

const App = () => (
	<div>
		{ /* header shows on all pages*/ }
		<Header>
			<span role="img" aria-label="paddle"> 🏓 </span>
			Table Tennis Tournament
			<span role="img" aria-label="paddle"> 🏓 </span>
			<br /> 
			Generator
		</Header>
		{ /* route  switch - to handle 404s */ }
		<Switch>
			{ /* Collect players data */}
			<Route exact path="/" component={ CollectAll } />

			{ /* Show generated tournament */}
			<Route path="/generated-tournament" component={ ShowAll } />

			{ /* 404 page */}
			<Route component={ FourOhFour } />
		</Switch>
	</div>
);

export default App;

