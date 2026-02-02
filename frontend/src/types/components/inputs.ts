import { Dispatch, SetStateAction } from "react"

export interface FormInputProps {
    type: string
    name: string
    required: boolean
    setVal:  Dispatch<SetStateAction<string>>
}