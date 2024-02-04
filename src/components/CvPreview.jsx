import html2canvas from "html2canvas";
import html2pdf from "html2pdf.js";

export default function CvPreview(props) {
  const formatDateString = (inputDateString) => {
    const dateObject = new Date(inputDateString);
    const options = { day: "2-digit", month: "short", year: "numeric" };
    return dateObject.toLocaleDateString("en-GB", options);
  };

  const handleDownload = () => {
    const element = document.getElementById("pdf-content");

    const options = {
      margin: 0,
      filename: "cv.pdf",
      image: { type: "jpeg", quality: 0.98 },
      html2canvas: { scale: 3 },
      jsPDF: {
        orientation: "l",
        unit: "pt",
        format: "letter",
      },
    };

    html2pdf(element, options);
  };

  return (
    <>
      <button
        className="bg-blue-400 border border-black h-16 w-48 my-5 rounded-md font-bold text-xl"
        onClick={handleDownload}
      >
        <p>Download as PDF</p>
      </button>
      <div
        className="flex flex-col justify-center items-center h-a4 w-a4 scale-[0.4] sm:md:scale-[0.7] md:lg:scale-[0.8] lg:xl:scale-[0.9] overflow-hidden origin-top shadow-md shadow-slate-400 mt-2 min-height-screen"
        id="pdf-content"
      >
        <section className="grid grid-rows-[50mm_minmax(250mm, auto)] grid-cols-[60mm_1fr] bg-yellow-100 h-[inherit] w-[inherit] origin-top break-words">
          <header className="flex gap-4 justify-center items-center box-border px-4 col-start-1 col-end-3">
            <span className="text-5xl">
              {props.firstName ? props.firstName : "First"}
            </span>
            <span className="text-5xl">
              {props.lastName ? props.lastName : "Last"}
            </span>
          </header>
          <section className="col-start-1 col-end-2 flex flex-col gap-2 p-2 border-r border-black">
            <h1 className="font-bold text-[30px] mb-8">Contact</h1>
            <p className="">{props.email ? props.email : "Email"}</p>
            <p className="">
              {props.phoneNumber ? props.phoneNumber : "Contact Number"}
            </p>
          </section>
          <section className="col-start-2 col-end-3 row-span-2 flex flex-col gap-2 p-2">
            <h1 className="font-bold text-[30px] mb-8">Practical Experience</h1>
            <p className="">{props.company ? props.company : "Company"}</p>
            <p className="">
              {props.company ? props.positionTitle : "Position Title"}
            </p>
            <div className="flex flex-col my-8">
              <p className="">
                {`From: ${
                  props.workDateStart
                    ? formatDateString(props.workDateStart)
                    : "Start Date"
                }`}
              </p>
              <p className="">
                {`to: ${
                  props.workDateEnd
                    ? formatDateString(props.workDateEnd)
                    : "End Date"
                }`}
              </p>
            </div>
            <p className="">
              {props.workDetails
                ? props.workDetails
                : "Details and Description Of Your Experience"}
            </p>
          </section>
          <section className="col-start-1 col-end-2 flex flex-col gap-2 p-2 border-r border-black">
            <h1 className="font-bold text-[30px] mb-8">Education</h1>
            <p className="">{props.school ? props.school : "School"}</p>
            <p className="">{props.major ? props.major : "Major"}</p>
            <div className="flex flex-col mt-8">
              <p className="">
                {`From: ${
                  props.studyDateStart
                    ? formatDateString(props.studyDateStart)
                    : "Start Date"
                }`}
              </p>
              <p className="">
                {`to: ${
                  props.studyDateEnd
                    ? formatDateString(props.studyDateEnd)
                    : "End Date"
                }`}
              </p>
            </div>
          </section>
        </section>
      </div>
    </>
  );
}
