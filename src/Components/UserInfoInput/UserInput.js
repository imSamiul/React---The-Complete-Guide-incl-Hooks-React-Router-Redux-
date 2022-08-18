import { useState } from "react";
import "./UserInput.css";
const UserInput = () => {
  const [userName, setUserName] = useState("");
  const handleSubmit = (event) => {
    event.preventDefault();
    setUserName(event.target.value);
  };
  const handleChange = (event) => {
    setUserName(event.target.value);
  };
  return (
    <div className="card-front">
      <form className="form-style">
        <label>
          Name:
          <input type="text" name="name" />
        </label>
        <label>
          Age:
          <input type="text" name="age" />
        </label>
        <button className="submitBtn">Add User</button>
      </form>
    </div>
  );
};
export default UserInput;
