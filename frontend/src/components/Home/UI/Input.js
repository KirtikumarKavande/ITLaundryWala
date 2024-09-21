import React from "react";

const Input = (props) => {
  const { label, type,name,handleChange } = props;
  return (
    <div>
      <label className="text-gray-700">{label}</label>
      <input
        className="w-full border border-gray-500 h-9  focus:shadow-lg text-gray-700  px-2"
        type={type}
        name={name}
        onChange={handleChange}
      />
    </div>
  );
};

export default Input;
