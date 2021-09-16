import React, { useEffect, useState } from "react";
import Act from "./Act";
function ActivityCard() {
  // State
  const [state, setstate] = useState([]);

  // Methods
  const getData = () => {
    fetch("./data.json")
      .then((res) => res.json())
      .then((data) => {
        setstate([...state, ...data]);
      });
  };

  const activitiesList=()=>state.map((activity) => {
    return <Act activity={activity} />;
  })
  if (state.length === 0) getData();

  // JSX AND render
  return (
    <div className="card-container">
      {state.length > 0 && activitiesList()
        }
    </div>
  );
}

export default ActivityCard;
