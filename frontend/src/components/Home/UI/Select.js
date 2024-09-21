import React from "react";

const Select = (props) => {
  const { data, label, handleChange, name } = props;
  return (
    <div>
      <label for="countries" className="text-gray-700">
        {label}
      </label>
      <select
        name={name}
        onChange={handleChange}
        id="countries"
        className="w-full border bg-white border-gray-500 h-9  focus:border-black text-sm text-gray-700 focus:shadow-lg   px-2"
      >
        {data.map((item) => (
          <option>{item}</option>
        ))}
      </select>
    </div>
  );
};

export default Select;
