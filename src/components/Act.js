import React from "react";
import iconEllipsis from "../img/icon-ellipsis.svg";
function Act({ activity }) {
  const { title } = activity;
  const { current, previous } = activity.timeframes.weekly;
  console.log(title);

  return (
    <>
      <div className={`activity-icon ${title.replace(/\s+/g, "")}`}>
        <span></span>
      </div>
      <div className="activity-card">
        <div className="card-title">
          <p className="activity-title">{title}</p>
          <button className="icon-ellipsis" href="#">
            <img src={iconEllipsis}></img>
          </button>
        </div>
        <h3 className="current">{current}hrs</h3>
        <p className="last">Last Week - {previous}hrs</p>
      </div>
    </>
  );
}

export default Act;
