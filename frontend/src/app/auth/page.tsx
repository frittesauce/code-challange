"use client";
import { FormInput } from "@/components/ui/inputs";
import { SubmitButton } from "../../components/ui/buttons";
import { useState } from "react";
import axios from "axios";
import { toast } from "react-toastify";

export default function Auth() {
  const [email, setEmail] = useState();
  const [username, setUsername] = useState();
  const [password, setPassword] = useState();
  const [confirmPassword, setConfirmPassword] = useState("ss");
  const [loading, setLoading] = useState(false);

  async function handleRegister(e: { preventDefault: () => void; }) {
    e.preventDefault();
    setLoading(true);

    if (password != confirmPassword) return toast.error("passwords do not match!")

    axios
      .post(`${process.env.NEXT_PUBLIC_API_URL}/auth/local/register`, {
        username,
        email,
        password,
      })
      .then((response) => {
        // Handle success.
        console.log("Well done!");
        console.log("User profile", response.data.user);
        console.log("User token", response.data.jwt);
      })
      .catch((error) => {
        // Handle error.
        console.log("An error occurred:", error.response);
      });
  }

  return (
    <form onSubmit={handleRegister}>
      <p>email</p>
      <FormInput type="email" required name="email"></FormInput>
      <p>username</p>
      <FormInput type="name" required name="username"></FormInput>
      <p>password</p>
      <FormInput type="password" required name="password"></FormInput>
      <p>confirm password</p>
      <FormInput type="password" required name="confirmPassword"></FormInput>
      <SubmitButton disabled={loading} text="Sign Up"></SubmitButton>
    </form>
  );
}
