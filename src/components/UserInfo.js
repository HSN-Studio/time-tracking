import React from "react";
import userAvatar from "../img/user-avatar.png";

function UserInfo() {
  return (
    <div className="user-info">
      <img alt="user-avatar" src={userAvatar}></img>
      <div className="report-title">
        <p>Report for</p>
        <h3>Jeremy Robson</h3>
      </div>
    </div>
  );
}

export default UserInfo;
