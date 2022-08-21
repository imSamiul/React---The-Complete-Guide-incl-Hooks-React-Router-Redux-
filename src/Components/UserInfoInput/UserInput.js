import { useState } from "react";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";
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
    const data = { name: userData.name, age: userData.age, id: Math.random() };
    props.onSaveData(data);
    setUserData({ name: "", age: "" });
  };

  return (
    <div>
      <ErrorModal
        title="An error occured"
        message="Somthing went wrong"
      ></ErrorModal>
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
          <Button text="Add User"></Button>
        </form>
      </div>
    </div>
  );
};
export default UserInput;
