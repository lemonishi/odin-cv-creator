import { useState } from "react";
import Input from "./Input";

export default function PersonalParticulars() {
  return (
    <div className="flex justify-evenly border-green-500 border-2 rounded-2xl py-3 bg-gray-200 w-11/12 flex-wrap">
      <div className="w-10/12 border-purple-500 border-2 flex justify-between">
        <Input
          text="First Name"
          type="text"
          width="w-full"
        />
        <Input
          text="Last Name"
          type="text"
          width="w-full"
        />
      </div>
      <div className="w-10/12 border-purple-500 border-2 flex justify-center">
        <Input
          text="Email"
          type="text"
          width="w-full"
        />
      </div>
      <div className="w-10/12 border-purple-500 border-2 flex justify-center">
        <Input
          text="Phone Number"
          type="text"
          width="w-8/12"
        />
      </div>
    </div>
  );
}
