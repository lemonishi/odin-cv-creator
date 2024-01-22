import { useState } from "react";

export default function Input({ text, type, width }) {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };
  return (
    <div className>
      <p>{text}</p>
      <input
        type={`${type}`}
        className={`border-black border-2 w-${width}`}
        onChange={handleInputChange}
      />
    </div>
  );
}
