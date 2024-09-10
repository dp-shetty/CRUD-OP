import axios from "axios";
import React, { useState } from "react";
import toast, { Toaster } from "react-hot-toast";
import { useNavigate } from "react-router-dom";

function Add() {
  const [state, setState] = useState({
    name: "",
    email: "",
    role: "",
  });

  const Navigate = useNavigate();

  const handleChange = ({ target: { name, value } }) => {
    setState((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    postData();
    setTimeout(() => {
      Navigate("/");
    }, 3000);
  };

  const postData = async () => {
    try {
      const { data: users } = await axios.get("https://crud-backend-mocha.vercel.app/users");
      const userEmails = users.map(({ email }, i) => {
        return email;
      });

      if (userEmails.includes(state.email)) {
        toast.error("Email already exists.");
        return;
      }

      const newId = users.length + 1;
      const newUser = { id: newId.toString(), ...state };

      await axios.post("https://crud-backend-mocha.vercel.app/users", newUser, {
        headers: {
          "Content-Type": "application/json",
        },
      });
      toast.success("form submitted successfully");
    } catch (error) {
      console.error(error);
      toast.error("error submitting the form");
    }
  };

  return (
    <section className="w-full flex flex-col gap-5">
      <header className="flex justify-center h-14 items-center font-sans text-2xl bg-blue-400 text-white w-full">
        WELCOME
      </header>
      <main className="w-11/12 m-auto">
        <form
          className="flex flex-col justify-center items-center w-full gap-5 p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400">
            <label htmlFor="name" className="text-white">
              NAME :
            </label>
            <input
              type="text"
              id="name"
              name="name"
              onChange={handleChange}
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
            />
          </div>
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400">
            <label htmlFor="email" className="text-white">
              EMAIL :
            </label>
            <input
              type="email"
              id="email"
              name="email"
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
              onChange={handleChange}
            />
          </div>
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400">
            <label htmlFor="role" className="text-white">
              ROLE :
            </label>
            <input
              type="text"
              id="role"
              name="role"
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
              onChange={handleChange}
            />
          </div>
          <button
            type="submit"
            className="border w-1/2 h-11 rounded-2xl bg-lime-500 text-white text-xl hover:bg-green-900"
          >
            SUBMIT
          </button>
        </form>
      </main>
      <footer className="h-14 fixed bottom-0 w-full bg-slate-600"></footer>
      <Toaster />
    </section>
  );
}

export default Add;
