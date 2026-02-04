"use client";
import Link from "next/link";
import { redirect } from "next/navigation";
import { toast } from "react-toastify";

export default function Hero() {
  return (
    <div className="w-full flex-col h-[80vh] flex justify-center items-center ">
      <img src="/eendje.jpg" alt="eendje" className="w-64 h-64 mb-3"></img>
      <h1 className=" text-4xl font-semibold">
        Eventbird the #1 event finder!
      </h1>
      <button
        className=" w-32 h-16 text-xl font-bold bg-ctp-mantle border-ctp-crust border-2 rounded-md cursor-pointer"
        onClick={() => {
          redirect("/auth/signUp");
        }}
      >
        Join now!
      </button>
    </div>
  );
}
