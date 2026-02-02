"use client";
import { FormInput } from "@/components/ui/inputs";
import { SubmitButton } from "../../../components/ui/buttons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";
import Cookies from "js-cookie";
import { useRouter } from "next/navigation";

export default function SignUp() {
  const [email, setEmail] = useState<string>("");
  const [username, setUsername] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [confirmPassword, setConfirmPassword] = useState<string>("");
  const [loading, setLoading] = useState(false);
  const router = useRouter();

  async function handleRegister(e: { preventDefault: () => void }) {
    e.preventDefault();
    setLoading(true);

    if (password != confirmPassword)
      return toast.error("passwords do not match!");

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
        username,
        email,
        password,
      })
      .then(async (response) => {
        // Handle success.
        Cookies.set("DO_NOT_SHARE_TOKEN", response.data.jwt);
        router.push("/home");
      })
      .catch(() => {
        toast.error(`something went wrong whilest making your account!`);
        setLoading(false);
      });
  }

  return (
    <form onSubmit={handleRegister}>
      <p>email</p>
      <FormInput
        setVal={setEmail}
        type="email"
        required
        name="email"
      ></FormInput>
      <p>username</p>
      <FormInput
        setVal={setUsername}
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
      <p>confirm password</p>
      <FormInput
        setVal={setConfirmPassword}
        type="password"
        required
        name="confirmPassword"
      ></FormInput>
      <SubmitButton disabled={loading} text="Sign Up"></SubmitButton>
    </form>
  );
}
