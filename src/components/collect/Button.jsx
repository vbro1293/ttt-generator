import React from "react";

const Button = ({ isDisabled, children }) => (
	<button disabled={ isDisabled }>{ children }</button>
)

export default Button;