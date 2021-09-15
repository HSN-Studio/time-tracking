import React, { useEffect, useState } from "react";
import iconEllipsis from "../img/icon-ellipsis.svg";
function ActivityCard() {
  const [state, setstate] = useState("");
  const getData = () => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        console.log(data);
      });
  };
  getData();

  return (
    <div className="card-container">
      <div className="activity-icon">
        <span></span>
      </div>
      <div className="activity-card">
        <div className="card-title">
          <p className="activity-title">work</p>
          <button className="icon-ellipsis" href="#">
            <img src={iconEllipsis}></img>
          </button>
        </div>
        <h3 className="current">32hrs</h3>
        <p className="last">Last Week - 3hrs</p>
      </div>
    </div>
  );
}

export default ActivityCard;
