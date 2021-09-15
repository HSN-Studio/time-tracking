import React from "react";
import userAvatar from "../img/user-avatar.png";

function UserInfo() {
  return (
    <>
      <div className="user-info">
        <img alt="user-avatar" src={userAvatar}></img>
        <p>Report for</p>
        <h3>Jeremy Robson</h3>
      </div>

      <div className="duration-filter">
        <ul>
          <li>Daily</li>
          <li className="active">Weekly</li>
          <li>Monthly</li>
        </ul>
      </div>
    </>
  );
}

export default UserInfo;
