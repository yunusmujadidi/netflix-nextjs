import Image from "next/image";
import Input from "../components/Input";
import { useState, useCallback } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  const [variant, setVariant] = useState("login");

  const toggleVariant = useCallback(() => {
    setVariant((prev) => (prev === "login" ? "signup" : "login"));
  }, []);

  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover bg-fixed">
      <div className="bg-black md:bg-opacity-50 h-full w-full">
        <nav className="px-12 py-6">
          <Image src="/images/logo.png" alt="logo" width={170} height={0} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black/70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-d rounded-md w-full md:w-3/5">
            <h2 className="text-white text-4xl mb-8 font-semibold">
              {variant === "login" ? "Sign In" : "Register"}
            </h2>
            <div className="flex flex-col gap-4">
              {variant === "signup" && (
                <Input
                  label="Username"
                  onChange={(e) => {
                    setName(e.target.value);
                  }}
                  id="name"
                  value={name}
                />
              )}

              <Input
                label="Email"
                onChange={(e) => {
                  setEmail(e.target.value);
                }}
                id="email"
                value={email}
                type="email"
              />

              <Input
                label="Password"
                onChange={(e) => {
                  setPassword(e.target.value);
                }}
                id="password"
                value={password}
              />
            </div>
            <button className="bg-red-600 py-3 text-white rounded-md w-full mt-10 hover:bg-red-700 transition">
              {variant === "login" ? "Login" : "Sign Up"}
            </button>
            <p className="text-neutral-500 mt-12">
              {variant === "login"
                ? " First time using Netflix?"
                : "Already have an account?"}{" "}
              <span
                onClick={toggleVariant}
                className="text-white hover:underline cursor-pointer"
              >
                {variant === "login" ? "Sign up now" : "Login now"}
              </span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
