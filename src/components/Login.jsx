import React from "react";
import { useContext } from "react";
import { UserContext } from "../context/UserContext";

export default function Login() {
  const { login } = useContext(UserContext);
  function handleLogin(e) {
    e.preventDefault();
    const { username, password } = e.target.elements;
    login(username.value, password.value);
  }
  return (
    <div>
      <h1 className="text-3xl text-slate-50 text-center mt-20 mb-16">
        Login to your account
      </h1> 
      <div className="flex justify-center items-center">
        <form onSubmit={handleLogin} className="flex flex-col gap-4 justify-center items-center">
          <div className="flex flex-col gap-1">
            <label htmlFor="username" className="text-lg text-slate-50">Username</label>
            <input type="text" name="username" id="username" className="text-slate-700 text-lg rounded p-2 w-96 "  />
          </div>
          <div className="flex flex-col gap-1">
            <label htmlFor="password" className="text-lg text-slate-50">Password</label>
            <input type="password" name="password" id="password" className="text-slate-700 text-lg rounded p-2 w-96 " />
          </div>
          <input type="submit" value="Login" className="text-slate-50 text-lg bg-rose-900 p-2 rounded w-24 mb-28 cursor-pointer" />
        </form>
      </div>
    </div>
  );
}
