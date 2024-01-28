import { useState } from "react";

export default function Input({
  text,
  type,
  width,
  placeholder,
  inputValue,
  onInputChange,
}) {
  const handleInputChange = (e) => {
    onInputChange(e.target.value);
  };

  return (
    <div className="mx-2 w-full">
      <p>{text}</p>
      <input
        type={`${type}`}
        className={`bg-gray-200 border-2 border-gray-500 text-gray-900 text-md rounded-sm focus:outline-none focus:ring focus:ring-violet-300 px-2 ${width}`}
        onChange={handleInputChange}
        placeholder={`${placeholder}`}
        value={inputValue}
      />
    </div>
  );
}
