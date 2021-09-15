import React from "react";
import iconEllipsis from "../img/icon-ellipsis.svg";
function ActivityCard() {
  return (
    <div className="card-container">
      <div className="activity-icon">
        <span></span>
      </div>
      <div className="activity-card">
        <div className="card-title">
          <p>Work</p>
          <div className="icon-ellipsis">
            <i className=""></i>
          </div>
        </div>
        <h3>3hrs</h3>
        <p>Last Week - 3hrs</p>
      </div>
    </div>
  );
}

export default ActivityCard;
