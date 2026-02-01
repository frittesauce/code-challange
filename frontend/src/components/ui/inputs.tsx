import { FormInputProps } from "@/types/components/inputs";

export function FormInput({type, name, required = false}: FormInputProps) {
    return (
        <input type={type} name={name} required={required}></input>
    )
}