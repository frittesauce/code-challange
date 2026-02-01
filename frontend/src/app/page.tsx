"use client";
import Link from "next/link";
import { toast } from "react-toastify";


export default function Home() {
  return (
    <div >
      <p>hello!</p>
      <button onClick={() => {
        toast("this toast is so cool!")
      }}>show toast.</button>

      <Link href="/auth">login</Link>
    </div>
  );
}
