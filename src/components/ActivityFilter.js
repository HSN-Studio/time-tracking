import React from "react";

function ActivityFilter() {
  return (
    <div className="duration-filter">
      <ul>
        <li>Daily</li>
        <li className="active">Weekly</li>
        <li>Monthly</li>
      </ul>
    </div>
  );
}

export default ActivityFilter;
