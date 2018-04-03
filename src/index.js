import React from "react";
import ReactDOM from "react-dom";

import "./index.css";
import App from "./App";

//==========Import the Router component
import { BrowserRouter as Router } from "react-router-dom";

//==========Imports for redux
import store from "./data/store";
import { Provider } from "react-redux";

ReactDOM.render(
	<Provider store={ store }>
	    <Router>
	        <App />
	    </Router>
    </Provider>,
    document.getElementById("root"),
);
