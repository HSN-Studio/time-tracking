import React, { useEffect, useState } from "react";
import iconEllipsis from "../img/icon-ellipsis.svg";
import ActivityFilter from "./ActivityFilter";

function ActivityCard({ time }) {
  // State

  const [state, setstate] = useState([]);
  const timeFrame = time;

  // Methods
  const getData = () => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setstate([...state, ...data]);
      });
  };
  if (state.length === 0) getData();

  const activitiesList = () =>
    state.map((activity) => {
      const { title } = activity;
      let current, previous;
      if (timeFrame === `daily`) {
        current = activity.timeframes.daily.current;
        previous = activity.timeframes.daily.previous;
      }
      if (timeFrame === `weekly`) {
        current = activity.timeframes.weekly.current;
        previous = activity.timeframes.weekly.previous;
      }
      if (timeFrame === `monthly`) {
        current = activity.timeframes.monthly.current;
        previous = activity.timeframes.monthly.previous;
      }
      return (
        <div className="card-container">
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
        </div>
      );
    });

  // JSX AND render
  return <>{state.length > 0 && activitiesList()}</>;
}

export default ActivityCard;
