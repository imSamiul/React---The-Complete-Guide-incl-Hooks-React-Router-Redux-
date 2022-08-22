import Button from "./Button";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <div id="disclaimer" className="modal-container" onClick={props.onConfirm}>
      <section
        className="modal"
        onClick={(e) => {
          // do not close modal if anything inside modal content is clicked
          e.stopPropagation();
        }}
      >
        <header className="modal-header">
          <h2 className="modal-title">{props.title}</h2>
          <Button text="Close" onClick={props.onConfirm}></Button>
        </header>
        <div className="modal-content">
          <p>{props.message}</p>
        </div>
      </section>
    </div>
  );
};
export default ErrorModal;
