
//==============Import libraries
import React from "react";
import { Route, Switch } from "react-router-dom";

//==============Import styling
import "./App.css";

//==============Import components
import Header from "./components/Header";
import FourOhFour from "./components/FourOhFour";
import CollectAll from "./components/collect/CollectAll";



const App = () => (
	<div>
		{ /* header shows on all pages*/ }
		<Header>TableTennisTournamentGenerator</Header>

		{ /* route  switch - to handle 404s */ }
		<Switch>
			<Route path="/" component={ CollectAll } />
			{ /* 404 page */}
			<Route component={ FourOhFour } />
		</Switch>
	</div>
)

export default App;

