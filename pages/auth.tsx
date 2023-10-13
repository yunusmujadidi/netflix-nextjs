import Image from "next/image";
import Input from "../components/Input";
import { useState } from "react";

const Auth = () => {
  const [email, setEmail] = useState("");
  const [name, setName] = useState("");
  const [password, setPassword] = useState("");
  return (
    <div className="relative h-full w-full bg-[url('/images/hero.jpg')] bg-no-repeat bg-center bg-cover">
      <div className="bg-black bg-opacity-50 h-full w-full">
        <nav className="px-12 py-6">
          <Image src="/images/logo.png" alt="logo" width={150} height={33} />
        </nav>
        <div className="flex justify-center">
          <div className="bg-black bg-opacity-70 px-16 py-16 self-center mt-2 lg:w-2/5 lg:max-w-d rounded-md w-full">
            <h2 className="text-white text-4xl mb-8 font-semibold">Sign In</h2>
            <div className="flex flex-col gap-4">
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
                label="Username"
                onChange={(e) => {
                  setName(e.target.value);
                }}
                id="name"
                value={name}
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
          </div>
        </div>
      </div>
    </div>
  );
};

export default Auth;
