export default function CvDisplay(props) {
  const formatDateString = (inputDateString) => {
    const dateObject = new Date(inputDateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObject.toLocaleDateString("en-GB", options);
  };

  return (
    <div className="grid grid-cols-7 auto-rows-fr bg-yellow-100 overflow-hidden my-10 mx-auto w-full aspect-[3/4]">
      <div className="col-span-7 row-span-2 border-b m-auto border-black font-bold">
        <span className="text-[6vw] mx-[1vw]">
          {props.firstName ? props.firstName : "First"}
        </span>
        <span className="text-[6vw] mx-[1vw]">
          {props.lastName ? props.lastName : "Last"}
        </span>
      </div>
      <div className="col-span-3 row-span-2 mx-[2vw] border-b border-black">
        <h1 className="font-bold text-[3vw] mb-2">Contact</h1>
        <p className="text-[2.5vw]">{props.email ? props.email : "Email"}</p>
        <p className="text-[2.5vw]">
          {props.phoneNumber ? props.phoneNumber : "Contact Number"}
        </p>
      </div>
      <div className="flex flex-col col-span-5 row-span-2 col-start-4 break-words text-right mx-[2vw] border-b border-black">
        <h1 className="font-bold text-[3vw] mb-2">Education</h1>
        <p className="text-[2.5vw]">{props.school ? props.school : "School"}</p>
        <p className="text-[2.5vw]">{props.major ? props.major : "Major"}</p>
        <div className="flex justify-end">
          <span className="text-[2.5vw]">
            {`From ${
              props.studyDateStart
                ? formatDateString(props.studyDateStart)
                : "Start Date"
            }`}
          </span>
          <span className="text-[2.5vw]">
            &nbsp;
            {`to ${
              props.studyDateEnd
                ? formatDateString(props.studyDateEnd)
                : "End Date"
            }`}
          </span>
        </div>
      </div>
      <div className="col-span-3 row-span-3 mx-[2vw] border-b border-black">
        <h1 className="font-bold text-[3vw] mb-2">Profile</h1>
        <p className="text-[2.5vw]">WIP</p>
      </div>

      <div className="flex flex-col col-span-5 row-span-5 mx-[2vw] mb-[2vw] text-right break-words border-b border-black">
        <h1 className="font-bold text-[3vw] mb-2">Experience</h1>
        <p className="text-[2.5vw]">
          {props.company ? props.company : "Company"}
        </p>
        <p className="text-[2.5vw]">
          {props.company ? props.positionTitle : "Position Title"}
        </p>
        <div className="flex justify-end">
          <span className="text-[2.5vw]">
            {`From ${
              props.workDateStart
                ? formatDateString(props.workDateStart)
                : "Start Date"
            }`}
          </span>
          <span className="text-[2.5vw]">
            &nbsp;
            {`to ${
              props.workDateEnd
                ? formatDateString(props.workDateEnd)
                : "End Date"
            }`}
          </span>
        </div>
        <p className="text-[2.5vw]">
          {props.workDetails ? props.workDetails : "Responsibilities of Job"}
        </p>
      </div>
    </div>
  );
}
