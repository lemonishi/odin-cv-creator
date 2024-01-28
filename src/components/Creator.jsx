import CvDisplay from "./CvDisplay";
import Form from "./Form";
import { useState } from "react";

export default function Creator() {
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [email, setEmail] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");

  const handleInputChange = (value) => {
    setFirstName(value);
    setLastName(value);
    setEmail(value);
    setPhoneNumber(value);
  };

  const formStates = {
    firstName: firstName,
    lastName: lastName,
  };

  return (
    <form>
      <div className="flex flex-col items-center justify-between border-red-500 border-2 py-10 sm:md:flex sm:md:flex-row sm:md:justify-evenly">
        <Form
          inputValue={formStates}
          onInputChange={handleInputChange}
        />
        <CvDisplay {...formStates} />
      </div>
    </form>
  );
}
