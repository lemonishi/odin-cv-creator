export default function CvDisplay(props) {
  return (
    <div className="border-2 border-green-500 m-10 bg-yellow-100 h-[42rem] w-full p-2 sm:lg:max-w-[435px] sm:lg:min-w-[435px]">
      <div className="flex m-6 justify-evenly text-2xl border-t-2 border-b-2 border-black py-2">
        <span>{props.firstName ? props.firstName : "First"}</span>
        <span>{props.lastName ? props.firstName : "Last"}</span>
      </div>
    </div>
  );
}
