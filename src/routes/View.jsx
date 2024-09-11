import axios from "axios";
import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function View() {
  const { id: userId } = useParams();
  const [userData, setUserData] = useState(null); 

  const fetchUser = async () => {
    try {
      const { data: user } = await axios.get(
        `https://crud-backend-mocha.vercel.app/users/${userId}`
      );
      setUserData(user);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    fetchUser();
  }, [userId]);

  return (
    <div className="w-full flex justify-center items-center">
      {userData ? (
        <div className="border border-red-700 p-4 rounded-lg flex flex-col gap-5 w-1/2 justify-center items-center m-auto h-32 mt-20 mob:w-11/12 mob:mt-52">
          <p>Username: {userData.name}</p>
          <p>User Email: {userData.email}</p>
          <p>User Role: {userData.role}</p>
        </div>
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default View;
