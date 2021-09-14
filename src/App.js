import "./sass/App.scss";
import UserInfo from "./components/UserInfo";
import ActivityFilter from "./components/ActivityFilter";
import ActivityCard from "./components/ActivityCard";

function App() {
  return (
    <div className="App">
      <h1>Time Tracker</h1>
      <UserInfo />
      <ActivityFilter />
      <ActivityCard />
    </div>
  );
}

export default App;
