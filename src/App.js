import React from "react";
import "./App.css";
import { BrowserRouter as Router, Route, Link, Routes } from "react-router-dom";
import Login from "./components/Login";
import AddFriend from "./components/AddFriend";
import FriendsList from "./components/FriendsList";
import Logout from "./components/Logout";

import PrivateRoute from "./components/PrivateRoute";


function App() {
  return (
    <div className="App">
      <Router>
        <div className="nav-bar">
          <div>
            <h1>FRIENDS DATABASE</h1>
          </div>
          <div>
            <Link className="nav-link" to={"/login"}>
              LOGIN
            </Link>
            <Link className="nav-link" to={"/friends"}>
              FRIENDLIST
            </Link>
            <Link className="nav-link" to={"/friends/add"}>
              ADDFRIEND
            </Link>
            <Link className="nav-link" to={"/logout"}>
              LOGOUT
            </Link>
          </div>
        </div>
        <hr />
        <Routes>
          <Route path="/login" element={<Login />} />
          <Route path="/" element={<Login />} />
          <Route path="/friends" element={<FriendsList />} />
          <Route path="/friends/add" element={<AddFriend />} />
          <Route path="/logout" element={<Logout />} />
        </Routes>
      </Router>
    </div>
  );
}

export default App;
