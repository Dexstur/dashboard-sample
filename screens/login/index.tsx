"use client";
import TextField from "@mui/material/TextField";
import { AppButton } from "@/components";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { authActions } from "@/actions";

export function LoginScreen() {
  const router = useRouter();
  const { useLogin } = authActions();
  const [credentials, setCredentials] = useState({
    email: "",
    password: "",
  });

  function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
    setCredentials({
      ...credentials,
      [e.target.name]: e.target.value,
    });
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();

    useLogin(credentials);
    router.push("/dashboard");
  }

  return (
    <main className="flex justify-center items-center h-screen bg-primary-dark">
      <form
        className="w-[280px] lg:w-[540px] p-6 flex flex-col gap-4 bg-primary-shade rounded-lg"
        onSubmit={handleSubmit}
      >
        <h2 className="text-lg font-semibold text-center py-4 text-white">
          LOGIN
        </h2>
        <TextField
          name="email"
          label="Email"
          variant="filled"
          className="bg-primary rounded-md"
          color="app-dark"
          type="email"
          fullWidth
          required
          onChange={handleChange}
        />
        <TextField
          name="password"
          label="Password"
          variant="filled"
          className="bg-primary rounded-md"
          color="app-dark"
          type="password"
          required
          fullWidth
          onChange={handleChange}
        />
        <AppButton size="full" color="alt" type="submit">
          Login
        </AppButton>
        <div className="h-4"></div>
      </form>
    </main>
  );
}
