"use client";
import { FormInput } from "@/components/ui/inputs";
import { SubmitButton } from "../../../components/ui/buttons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";
import Link from "next/link";

export default function SignIn() {
  const [identifier, setIdentifier] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleLogin(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/`, {
        identifier,
        password,
      })
      .then(async (response) => {
        // Handle success.
        Cookies.set("DO_NOT_SHARE_TOKEN", response.data.jwt);
        localStorage.setItem("DO_NOT_SHARE_TOKEN", response.data.jwt);
        router.push("/home/events");
      })
      .catch((error) => {
        console.log(error);
        toast.error(
          `something went wrong whilest logging in, ${error?.response?.statusText}`,
        );
        setLoading(false);
      });
  }

  return (
    <div className="w-full h-[70vh] flex justify-center items-center ">
      <form
        onSubmit={handleLogin}
        className="flex flex-col p-8 bg-ctp-mantle rounded-md gap-y-2"
      >
        <p className=" font-semibold text-xl">username or email</p>
        <FormInput
          setVal={setIdentifier}
          type="name"
          required
          name="username"
        ></FormInput>
        <p className=" font-semibold text-xl">password</p>
        <FormInput
          setVal={setPassword}
          type="password"
          required
          name="password"
        ></FormInput>
        <SubmitButton disabled={loading} text="Sign In"></SubmitButton>
        <Link href="/auth/signUp" className=" text-ctp-blue">
          sing up instead?
        </Link>
      </form>
    </div>
  );
}
