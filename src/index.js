import React from "react";
import ReactDOM from "react-dom";

// import the Router component
import { BrowserRouter as Router } from "react-router-dom";

import "./index.css";
import App from "./App";

// pass our articles through to App using props

ReactDOM.render(
    <Router>
        <App />
    </Router>,
    document.getElementById("root"),
);
