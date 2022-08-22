import { useState } from "react";
import Button from "../../UI/Button";
import ErrorModal from "../../UI/ErrorModal";
import "./UserInput.css";
const UserInput = (props) => {
  const [userData, setUserData] = useState({ name: "", age: "" });
  const [error, setError] = useState();

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
    if (userData.name.trim().length === 0 || userData.age.trim().length === 0) {
      setError({
        title: "Invalid input",
        message: "Please enter a valid name and age (non-empty values).",
      });
      return;
    }
    if (+userData.age < 1) {
      //Unary plus
      setError({
        title: "Invalid age",
        message: "Please enter a valid age (>0).",
      });
      return;
    }
    const data = { name: userData.name, age: userData.age, id: Math.random() };
    props.onSaveData(data);
    setUserData({ name: "", age: "" });
  };
  const errorHandler = () => {
    setError(null);
  };

  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        ></ErrorModal>
      )}
      <div className="card-front" onSubmit={onHandleSubmit}>
        <form className="form-style">
          <label>
            Name:
            <input
              type="text"
              name="name"
              value={userData.name}
              placeholder="Please enter your name."
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
