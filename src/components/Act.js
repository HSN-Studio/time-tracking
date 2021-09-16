import React from "react";
import iconEllipsis from "../img/icon-ellipsis.svg";
function Act({ activity }) {
  console.log(activity);
  return (
    <>
      <div className="activity-icon">
        <span></span>
      </div>
      <div className="activity-card">
        <div className="card-title">
          <p className="activity-title">{activity.title}</p>
          <button className="icon-ellipsis" href="#">
            <img src={iconEllipsis}></img>
          </button>
        </div>
        <h3 className="current">{activity.timeframes.weekly.current}hrs</h3>
        <p className="last">
          Last Week - {activity.timeframes.weekly.previous}hrs
        </p>
      </div>
    </>
  );
}

export default Act;
