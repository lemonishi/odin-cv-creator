export default function TextArea(props) {
  return (
    <section className="flex flex-col gap-1 w-full">
      <label>{props.text}</label>
      <textarea
        name="workDetails"
        placeholder={props.placeholder}
        cols="30"
        rows="10"
        className="min-h-36 resize-y bg-gray-200 border-2 border-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring focus:ring-violet-300 p-2"
        value={props.inputValue}
        onChange={props.handleInputChange}
      ></textarea>
    </section>
  );
}
