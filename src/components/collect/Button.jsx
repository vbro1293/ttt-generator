import React from "react";

const Button = ({ onClick, isDisabled, children }) => (
	<button onClick={ onClick } disabled={ isDisabled }>{ children }</button>
)

export default Button;