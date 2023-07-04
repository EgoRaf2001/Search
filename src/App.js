import React from "react";
import "./App.css";
import Dashboard from "./pages/Dashboard";
import Main from "./layouts/Main";
import { Route, Routes } from "react-router-dom";
import UsersList from "./pages/UsersList";
import UserProfile from "./pages/UserProfile";

function App() {
  return (
    <Routes>
      <Route element={<Main />}>
        <Route path="/" element={<Dashboard />} />
        <Route path="/users" element={<UsersList />} />
        <Route path="/user/:id" element={<UserProfile />} />
      </Route>
    </Routes>
  );
}

export default App;
