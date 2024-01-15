import React from "react";
import "./FriendsList.css";
import axios from "axios";
import { useState, useEffect } from "react";

const FriendsList = () => {
  const [friends, setFriends] = useState([])
  console.log(friends);

  useEffect(() => {
    const token = localStorage.getItem('token')
    axios
      .get("http://localhost:9000/api/friends", {
        headers: {
          authorization: token
        }
      })
      .then(res => {
        console.log(res);
        setFriends(res.data)
      })
      .catch(err => {
        console.log(err);
      })
  }, [])

  return (
    <div className="app">
      <div className="list">
        <h1 className="header">FRIENDS LIST</h1>
        <ul>
          {
            friends.map(friend => {
              return <li key={friend.id}>{friend.name} - {friend.age} - {friend.email}</li>
            })
          }
        </ul>
      </div>
    </div>
  );
};

export default FriendsList;
