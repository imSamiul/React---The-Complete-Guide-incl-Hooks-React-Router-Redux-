import { useState } from "react";
import "./UserInput.css";
const UserInput = (props) => {
  const [userData, setUserData] = useState({ name: "", age: "" });

  const onNameChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, name: event.target.value };
    });
  };
  const onAgeChangeHandler = (event) => {
    setUserData((prevState) => {
      return { ...prevState, age: event.target.value };
    });
  };
  const onHandleSubmit = (event) => {
    event.preventDefault();
    props.onSaveData(userData);
    setUserData({ name: "", age: "" });
  };

  return (
    <div className="card-front" onSubmit={onHandleSubmit}>
      <form className="form-style">
        <label>
          Name:
          <input
            type="text"
            name="name"
            value={userData.name}
            placeholder="Please enter your name."
            required
            onChange={onNameChangeHandler}
          />
        </label>
        <label>
          Age:
          <input
            type="number"
            name="age"
            value={userData.age}
            placeholder="Please enter your age."
            required
            onChange={onAgeChangeHandler}
          />
        </label>
        <button className="submitBtn" type="submit">
          Add User
        </button>
      </form>
    </div>
  );
};
export default UserInput;
