import React, { useState } from "react";
import ActivityCard from "./ActivityCard";

function ActivityFilter() {
  const [state, setstate] = useState(`weekly`);
  const setDaily = () => {
    setstate(`daily`);
  };
  const setWeekly = () => {
    setstate(`weekly`);
  };
  const setMonthly = () => {
    setstate(`monthly`);
  };
  return (
    <>
      <div className="duration-filter">
        <ul>
          <li onClick={setDaily}>Daily</li>
          <li onClick={setWeekly} className="active">
            Weekly
          </li>
          <li onClick={setMonthly}>Monthly</li>
        </ul>
      </div>
      <div className="right-col">
        <ActivityCard time={state} />
      </div>
    </>
  );
}

export default ActivityFilter;
