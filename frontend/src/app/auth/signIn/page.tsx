"use client";
import { FormInput } from "@/components/ui/inputs";
import { SubmitButton } from "../../../components/ui/buttons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

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
        router.push("/home");
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
    <form onSubmit={handleLogin}>
      <p>username or email</p>
      <FormInput
        setVal={setIdentifier}
        type="name"
        required
        name="username"
      ></FormInput>
      <p>password</p>
      <FormInput
        setVal={setPassword}
        type="password"
        required
        name="password"
      ></FormInput>
      <SubmitButton disabled={loading} text="Sign In"></SubmitButton>
    </form>
  );
}
