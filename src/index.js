import React from "react";
import ReactDOM from "react-dom";

//==========Import the Router component
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

//==========Imports for redux
import store from "./data/store";
import { Provider } from "react-redux";

// pass our articles through to App using props

ReactDOM.render(
	<Provider store={ store }>
	    <Router>
	        <App />
	    </Router>
    </Provider>,
    document.getElementById("root"),
);
