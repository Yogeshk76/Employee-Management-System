import React from "react";
import { useState } from "react";

const Login = () => {

  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  


  const sumbitHandler = (e) => {
    e.preventDefault();
    console.log('email is ', email);
    console.log('password is ', password);


    setEmail('');
    setPassword('');
  };

  return (
    <div className="flex h-screen w-screen items-center justify-center ">
      <div className="border-2 border-emerald-600 p-20 rounded-xl">
        <form action="" className="flex flex-col items-center justify-center" onSubmit={(e) => sumbitHandler(e)}>
          <input
            onChange={(e) => setEmail(e.target.value)}
            value={email}
            required
            className="border-2 text-xl bg-transparent text-black outline-none border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="email"
            placeholder="Enter your email"
          />
          <input
            onChange={(e) => setPassword(e.target.value)}
            value={password}
            required
            className=" mt-3 border-2 bg-transparent text-xl text-black outline-none border-emerald-600 py-3 px-5 rounded-full placeholder:text-gray-400"
            type="password"
            placeholder="Enter password"
          />
          <button className=' text-xl text-white outline-none bg-emerald-600 py-3 px-30 rounded-full placeholder:text-white mt-5'>Log in</button>
        </form>
      </div>
    </div>
  );
};

export default Login;
