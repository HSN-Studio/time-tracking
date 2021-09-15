import "./sass/App.scss";
import UserInfo from "./components/UserInfo";
import ActivityFilter from "./components/ActivityFilter";
import ActivityCard from "./components/ActivityCard";
import { useState, useLayoutEffect } from "react";

function App() {
  // States

  // Regular Methods

  // Hooks

  //Handler Functions

  return (
    <div className="App">
      <div className="left-col">
        <UserInfo />
        <ActivityFilter />
      </div>
      <div className="right-col">
        <ActivityCard />
        {/* {state.length > 0 &&
          state.map((activity, i) => {
          })}
        {/* <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard />
        <ActivityCard /> */}
      </div>
    </div>
  );
}

export default App;
