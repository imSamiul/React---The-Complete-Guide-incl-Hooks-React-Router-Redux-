import UserInput from "./Components/UserInfoInput/UserInput";
import "./App.css";
import { useState } from "react";
import ShowUser from "./Components/Users/ShowUser";
function App(props) {
  const [users, setUsers] = useState([]);
  const onSaveDataHandler = (props) => {
    setUsers((prevUsers) => [props, ...prevUsers]);
  };
  return (
    <div className="App">
      <UserInput onSaveData={onSaveDataHandler}></UserInput>
      <ShowUser users={users}></ShowUser>
    </div>
  );
}

export default App;
