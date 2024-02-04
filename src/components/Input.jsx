export default function Input({
  text,
  name,
  type,
  placeholder,
  inputValue,
  handleInputChange,
}) {
  return (
    <section className="flex flex-col gap-1 w-full">
      <label>{text}</label>
      <input
        name={name}
        type={type}
        className="bg-gray-200 border-2 border-gray-500 text-gray-900 rounded-sm focus:outline-none focus:ring focus:ring-violet-300 px-2"
        onChange={handleInputChange}
        placeholder={`${placeholder}`}
        value={inputValue}
        autoComplete="off"
      />
    </section>
  );
}
