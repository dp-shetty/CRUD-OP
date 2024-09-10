import axios from "axios";
import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const [userData, setUserData] = useState();

  const getUsersData = async () => {
    try {
      const { data: users } = await axios.get("https://crud-backend-mocha.vercel.app/users");
      setUserData(users);
    } catch (error) {}
  };

  const navToAdd = () => {
    Navigate("/add");
  };

  const handleView = (id) => {
    Navigate(`/view/${id}`);
  };

  const handleUpdate = (id) => {
    Navigate(`/update/${id}`);
  };

  const handleDelete = async (id) => {
    try {
      await axios.delete(`https://crud-backend-mocha.vercel.app/users/${id}`);
      getUsersData();
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getUsersData();
  }, []);

  const tableStyle = {
    border: "1px solid black",
    borderCollapse: "collapse",
    padding: "0.7rem",
    textAlign: "center",
  };

  return (
    <section className="w-full flex flex-col gap-5">
      <header className="flex justify-center h-14 items-center font-sans text-2xl bg-blue-400 text-white w-full">
        WELCOME TO REACT CRUD OPERATIONS
      </header>
      <main className="w-11/12 m-auto flex justify-center">
        <table style={{ ...tableStyle, width: "100%" }} className="">
          <thead>
            <tr>
              <th style={{ ...tableStyle }}>ID</th>
              <th style={{ ...tableStyle }}>NAME</th>
              <th style={{ ...tableStyle }}>EMAIL</th>
              <th style={{ ...tableStyle }}>ROLE</th>
              <th style={{ ...tableStyle }}>ACTIONS</th>
            </tr>
          </thead>
          <tbody>
            {userData &&
              userData.map(({ name, email, role, id }) => {
                return (
                  <tr key={id}>
                    <td style={{ ...tableStyle }}>{id}</td>
                    <td style={{ ...tableStyle }}>{name}</td>
                    <td style={{ ...tableStyle }}>{email}</td>
                    <td style={{ ...tableStyle }}>{role}</td>
                    <td style={{ ...tableStyle }} className="flex gap-5">
                      <button
                        className="w-1/3 bg-blue-400 rounded-2xl h-10 text-white"
                        onClick={() => {
                          handleView(id);
                        }}
                      >
                        VIEW
                      </button>
                      <button
                        className="w-1/3 bg-orange-500 rounded-2xl h-10 text-white"
                        onClick={() => {
                          handleUpdate(id);
                        }}
                      >
                        UPDATE
                      </button>
                      <button
                        className="w-1/3 bg-red-700 rounded-2xl h-10 text-white"
                        onClick={() => {
                          handleDelete(id);
                        }}
                      >
                        DELETE
                      </button>
                    </td>
                  </tr>
                );
              })}
          </tbody>
          <tfoot>
            <tr>
              <td
                style={{ ...tableStyle }}
                colSpan={4}
                className="text-center bg-sky-600 text-white text-2xl"
              >
                ADD NEW USER
              </td>
              <td style={{ ...tableStyle }} className="text-center">
                <button
                  className="bg-green-600 w-2/3 rounded-lg text-white text-xl h-9 hover:bg-cyan-950"
                  onClick={navToAdd}
                >
                  ADD
                </button>
              </td>
            </tr>
          </tfoot>
        </table>
      </main>
      <footer className="h-14 fixed bottom-0 w-full bg-slate-600"></footer>
    </section>
  );
}

export default Home;
