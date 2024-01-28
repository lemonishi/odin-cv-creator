import Input from "./Input";

export default function Form(props) {
  console.log(props.handleChange);
  return (
    <div className="flex justify-evenly border-green-500 border-2 rounded-2xl py-3 sm:md:ml-10 bg-gray-200 w-11/12 flex-wrap">
      <div className="w-10/12 flex justify-between">
        <Input
          text="First Name"
          type="text"
          width="w-full"
          placeholder="eg. John"
          inputValue={props.inputValue.firstName}
          onInputChange={props.onInputChange}
        />
        <Input
          text="Last Name"
          type="text"
          width="w-full"
          placeholder="eg. Doe"
          inputValue={props.inputValue.lastName}
          onInputChange={props.onInputChange}
        />
      </div>
      <div className="w-10/12 flex justify-center">
        <Input
          text="Email"
          type="text"
          width="w-full"
          placeholder="eg. JohnDoe@gmail.com"
        />
      </div>
      <div className="w-10/12 flex justify-center">
        <Input
          text="Phone Number"
          type="text"
          width="w-8/12"
          placeholder="eg. 91234567"
        />
      </div>
    </div>
  );
}
