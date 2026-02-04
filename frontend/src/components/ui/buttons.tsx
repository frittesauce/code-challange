"use client";
import { SubmitButtonProps } from "@/types/components/buttons";

export function SubmitButton({ disabled = false, text }: SubmitButtonProps) {
  return (
    <button
      className=" w-full py-2 text-xl font-bold bg-ctp-mantle border-ctp-crust border-2 rounded-md cursor-pointer"
      disabled={disabled}
      type="submit"
    >
      {text}
    </button>
  );
}
