import React from "react";

//onChange method called when input value changes
const Input = ({ onChange, value }) => (
	<input onChange={ onChange } value={ value }/>
)

export default Input;