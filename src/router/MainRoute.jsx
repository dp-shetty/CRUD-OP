import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "../routes/Home";
import Nav from "./Nav";
import Add from "../routes/Add";
import View from "../routes/View";
import Update from "../routes/Update";


function MainRoute() {
  return (
    <BrowserRouter>
    <Nav/>
      <Routes>
        <Route path={'/'} element={<Home/>} >HOME</Route>
        <Route path={'/view/:id'} element={<View/>} >VIEW</Route>
        <Route path={'/update/:id'} element={<Update/>} >UPDATE</Route>
        <Route path={'/add'} element={<Add/>} >ADD</Route>
      </Routes>
    </BrowserRouter>
  );
}

export default MainRoute;
