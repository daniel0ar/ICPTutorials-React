import React from "react";

const FormInput = ({name, type="text", value, setValue, placeholder, isListing=false}) => {
  return <input 
    type={type} 
    value={value}
    placeholder={placeholder} 
    onChange={e => {isListing ? setValue(name, e.target.value) : setValue(e.target.value)}}
    className="border border-gray-300 hover:border-gray-400 focus:outline-none focus:outline-indigo-300 p-3 rounded-md w-full">
    </input>;
};

export default FormInput;