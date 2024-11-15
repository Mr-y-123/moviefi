"use client";
import Button from "@/components/Button";
import InputField from "@/components/InputField";
import React, { useState } from "react";

const SignIn: React.FC = () => {
  const [email, setEmail] = useState<string>("");
  const [password, setPassword] = useState<string>("");
  const [rememberMe, setRememberMe] = useState<boolean>(false);

  const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Handle form submission (e.g., authenticate user)
    console.log({ email, password, rememberMe });
  };

  return (
    <div className="min-h-screen  flex items-center justify-center">
      <div className="w-full sm:max-w-[300px] sm:h-[360px] max-w-[380px] h-[336px]  space-y-6 ">
        <h1 className="text-white text-[64px] font-[600] leading-[80px] text-center underline-from-font decoration-skip-ink-none">
          Sign in
        </h1>

        <form className="space-y-[24px]" onSubmit={handleSubmit}>
          <InputField
            id="email"
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            width="sm:w-[300px] w-[380px]"
            height="h-[45px]"
            bgColor="bg-inputColor" // Custom background color
            className="focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <InputField
            id="password"
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            width="sm:w-[300px] w-[380px]"
            height="h-[45px]"
            bgColor="bg-inputColor" // Custom background color
            className="focus:outline-none focus:ring-2 focus:ring-primary"
          />

          <div className="flex items-center justify-center">
            <input
              type="checkbox"
              id="rememberMe"
              checked={rememberMe}
              onChange={(e) => setRememberMe(e.target.checked)}
              className="w-4 h-4 text-primary bg-inputColor border-gray-300 rounded focus:ring-primary"
            />
            <label htmlFor="rememberMe" className="ml-2 text-sm text-gray-200">
              Remember me
            </label>
          </div>

          <Button
            type="submit"
            width="sm:w-[300px] w-[380px]"
            height="h-[54px]"
            bgColor="bg-primary" // Custom background color
            hoverColor="hover:bg-green-600"
            className="focus:outline-none focus:ring-2 focus:ring-primary text-base font-bold leading-6 text-center"
          >
            Login
          </Button>
        </form>
      </div>
    </div>
  );
};

export default SignIn;
