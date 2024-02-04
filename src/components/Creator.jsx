import CvDisplay from "./CvDisplay";
import CvPreview from "./CvPreview";
import Form from "./Form";
import { useState } from "react";

export default function Creator() {
  const [inputValue, setInputValue] = useState({
    firstName: "",
    lastName: "",
    email: "",
    phoneNumber: "",
    school: "",
    major: "",
    studyDateStart: "",
    studyDateEnd: "",
    company: "",
    positionTitle: "",
    workDetails: "",
    workDateStart: "",
    workDateEnd: "",
  });

  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setInputValue({ ...inputValue, [name]: value });
  };

  return (
    <div className="flex flex-col justify-center items-center">
      <Form
        {...inputValue}
        handleInputChange={handleInputChange}
      />
      {/* <CvDisplay {...inputValue} /> */}
      <CvPreview {...inputValue} />
    </div>
  );
}
