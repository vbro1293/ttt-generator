import React from "react";

const Button = ({ isDisabled, children, onClick, classes}) => (
	<button onClick={ onClick } disabled={ isDisabled } className={ (isDisabled ? "button isDisabled " : "button ") + classes  }>{ children }</button>
)

export default Button;