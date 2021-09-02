import React from "react";
import Image from "next/image";
import Logo from "../public/logo.png";
import { signIn } from "next-auth/client";
const Login = () => {
  return (
    <div className="grid place-items-center">
      <Image src={Logo} height={100} width={100} />

      <h1
        onClick={signIn}
        className="p-5 bg-blue-500 rounded-full text-white text-center cursor-pointer"
      >
        Login with Facebook
      </h1>
    </div>
  );
};

export default Login;
