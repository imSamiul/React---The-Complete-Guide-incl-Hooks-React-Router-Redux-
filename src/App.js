import UserInput from "./Components/UserInfoInput/UserInput";
import "./App.css";
import { useState } from "react";
import ShowUser from "./Components/Users/ShowUser";
function App(props) {
  const [users, setUsers] = useState([
    { name: "Samiul", age: 24, id: 0 },
    { name: "Anamul", age: 23, id: 1 },
  ]);
  const onSaveDataHandler = (props) => {
    setUsers((prevUsers) => [props, ...prevUsers]);
  };
  const onDeleteHandler = (props) => {
    setUsers(users.filter((user) => user.id !== props));
  };
  return (
    <div className="App">
      <UserInput onSaveData={onSaveDataHandler}></UserInput>
      <ShowUser users={users} onDelete={onDeleteHandler}></ShowUser>
    </div>
  );
}

export default App;
