import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import toast, { Toaster } from "react-hot-toast";

function Update() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null);
  const navigate = useNavigate();

  const fetchUser = async () => {
    try {
      const { data: user } = await axios.get(
        `https://crud-backend-mocha.vercel.app/users/${userId}`
      );
      setUserData(user);
    } catch (error) {
      console.error(error);
      toast.error("Error fetching user data");
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  const handleChange = ({ target: { name, value } }) => {
    setUserData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(
        `https://crud-backend-mocha.vercel.app/users/${userId}`,
        userData,
        {
          headers: {
            "Content-Type": "application/json",
          },
        }
      );
      toast.success("User updated successfully");
      setTimeout(() => {
        navigate(`/view/${userId}`);
      }, 3000);
    } catch (error) {
      console.error(error);
      toast.error("Error updating user data");
    }
  };

  const navToHome = () => {
    navigate("/");
  };

  return (
    <div className="w-full flex justify-center items-center mob:mt-36">
      {userData ? (
        <form
          className="flex flex-col justify-center items-center w-full gap-5 p-5"
          onSubmit={handleSubmit}
        >
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400 mob:w-full">
            <label htmlFor="name" className="text-white">
              NAME:
            </label>
            <input
              type="text"
              id="name"
              name="name"
              value={userData.name}
              onChange={handleChange}
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
            />
          </div>
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400 mob:w-full">
            <label htmlFor="email" className="text-white">
              EMAIL:
            </label>
            <input
              type="email"
              id="email"
              name="email"
              value={userData.email}
              onChange={handleChange}
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
            />
          </div>
          <div className="flex gap-3 w-1/2 justify-center items-center p-3 rounded-2xl bg-slate-400 mob:w-full">
            <label htmlFor="role" className="text-white">
              ROLE:
            </label>
            <input
              type="text"
              id="role"
              name="role"
              value={userData.role}
              onChange={handleChange}
              className="rounded-2xl outline-none px-3 w-10/12 h-12"
            />
          </div>
          <button
            type="submit"
            className="border w-1/2 p-1 rounded-2xl bg-lime-500 text-white text-xl hover:bg-green-900 mob:text-xs mob:w-full"
          >
            UPDATE
          </button>
          <button
            className="w-1/2 m-auto rounded-2xl bg-green-900 text-white p-1 mob:text-xs hover:bg-green-500 mob:w-full"
            onClick={navToHome}
          >
            BACK
          </button>
        </form>
      ) : (
        <p>Loading...</p>
      )}
      <Toaster />
    </div>
  );
}

export default Update;
