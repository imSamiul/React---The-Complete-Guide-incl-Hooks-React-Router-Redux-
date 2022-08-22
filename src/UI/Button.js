import "./Button.css";
const Button = (props) => {
  return (
    <button className="submitBtn" type="submit" onClick={props.onClick}>
      {props.text}
    </button>
  );
};
export default Button;
