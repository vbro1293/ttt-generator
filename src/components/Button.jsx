import React from "react";

const Button = ({ isDisabled, children, onClick}) => (
	<button onClick={ onClick } disabled={ isDisabled } className={ isDisabled ? "button isDisabled" : "button"}>{ children }</button>
)

export default Button;