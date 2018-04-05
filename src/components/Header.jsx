import React from "react";

//Basic header component on every page, passed in title data with children props.
const Header = ({ children }) => {
	return(
		<h1>{ children }</h1>
	)
}

export default Header;