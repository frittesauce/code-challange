"use client";
import { SubmitButtonProps } from "@/types/components/buttons";

export function SubmitButton({disabled = false, text}: SubmitButtonProps) {

    return (
        <button disabled={disabled} type="submit">
            {text}
        </button>
    )
}