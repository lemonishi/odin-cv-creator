import { useState } from "react";
import Input from "./Input";

export default function PersonalParticulars() {
  const [inputValue, setInputValue] = useState("");

  const handleInputChange = (e) => {
    setInputValue(e.target.value);
    console.log(inputValue);
  };

  return (
    <div className="flex justify-evenly border-green-500 border-2 rounded-2xl py-3 bg-gray-200 w-11/12">
      <Input
        text="First Name"
        type="text"
        width="10/12"
      />
      <Input
        text="Last Name"
        type="text"
        width="10/12"
      />
    </div>
  );
}
