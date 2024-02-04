import Input from "./Input";
import TextArea from "./TextArea";
import { useState, useEffect } from "react";

export default function Form(props) {
  return (
    <div className="flex flex-col items-center min-h-screen bg-gray-200 w-[min(100%,1000px)] p-6 gap-4">
      <div className="flex items-center font-bold text-xl h-8">
        <p>Personal Details</p>
      </div>
      <Input
        text="First Name"
        type="text"
        placeholder="eg. John"
        name="firstName"
        inputValue={props.firstName}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Last Name"
        type="text"
        placeholder="eg. Doe"
        name="lastName"
        inputValue={props.lastName}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Email"
        type="text"
        placeholder="eg. JohnDoe@gmail.com"
        name="email"
        inputValue={props.email}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Phone Number"
        type="text"
        placeholder="eg. 91234567"
        name="phoneNumber"
        inputValue={props.phoneNumber}
        handleInputChange={props.handleInputChange}
      />
      <div className="flex items-center font-bold text-xl h-8 ">
        <p>Education</p>
      </div>
      <Input
        text="School"
        type="text"
        placeholder="eg. National University of Singapore"
        name="school"
        inputValue={props.school}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Major"
        type="text"
        placeholder="eg. Computer Science"
        name="major"
        inputValue={props.major}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Start Date Of Study"
        type="date"
        name="studyDateStart"
        inputValue={props.studyDateStart}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="End Date Of Study"
        type="date"
        name="studyDateEnd"
        inputValue={props.studyDateEnd}
        handleInputChange={props.handleInputChange}
      />
      <div className="flex items-center font-bold text-xl h-8">
        <p>Practical Experience</p>
      </div>
      <Input
        text="Company"
        type="text"
        placeholder="eg. Shopee"
        name="company"
        inputValue={props.company}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Position Title"
        type="text"
        placeholder="eg. Intern"
        name="positionTitle"
        inputValue={props.positionTitle}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="Start Date Of Work"
        type="date"
        name="workDateStart"
        inputValue={props.workDateStart}
        handleInputChange={props.handleInputChange}
      />
      <Input
        text="End Date Of Work"
        type="date"
        name="workDateEnd"
        inputValue={props.workDateEnd}
        handleInputChange={props.handleInputChange}
      />
      <TextArea
        text="Main Responsibilites Of Job"
        type="text"
        placeholder="eg. I developed the Navigation Bar for the company's main website..."
        name="workDetails"
        inputValue={props.workDetails}
        handleInputChange={props.handleInputChange}
      />
    </div>
  );
}
