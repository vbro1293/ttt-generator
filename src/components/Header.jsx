//Basic header component on every page, passed in title data with children props.

import React from "react";

const Header = ({ children }) => (
	<h1>{ children }</h1>
);

export default Header;