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
    <div className="form">
      <form onSubmit={handleSubmit}>
        <label>
          Username:
          <input type="text" value={userName} onChange={handleChange} />
        </label>
        <input type="submit" value="Submit" />
      </form>
    </div>
  );
};
export default UserInput;
