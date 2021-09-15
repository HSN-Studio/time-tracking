import "./sass/App.scss";
import UserInfo from "./components/UserInfo";
import ActivityFilter from "./components/ActivityFilter";
import ActivityCard from "./components/ActivityCard";

function App() {
  return (
    <div className="App">
      <div className="left-col">
        <UserInfo />
        <ActivityFilter />
      </div>
      <div className="right-col">
        <ActivityCard />
      </div>
    </div>
  );
}

export default App;
