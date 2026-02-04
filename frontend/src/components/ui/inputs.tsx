import { FormInputProps } from "@/types/components/inputs";

export function FormInput({
  type,
  name,
  required = false,
  setVal,
}: FormInputProps) {
  return (
    <input
      className="p-2 bg-ctp-crust rounded-md"
      type={type}
      name={name}
      required={required}
      onChange={(e) => setVal(e.target.value)}
    ></input>
  );
}
