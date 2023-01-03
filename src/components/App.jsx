import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Login from "./Login/Login";
import Signup from "./Signup/Signup";
import ProfilePage from "./ProfilePage";
import Page401 from "./Page401";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/user" element={<ProfilePage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/401" element={<Page401 />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
