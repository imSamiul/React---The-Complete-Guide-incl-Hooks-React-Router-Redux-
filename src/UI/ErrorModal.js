import Button from "./Button";
import "./ErrorModal.css";
const ErrorModal = (props) => {
  return (
    <div id="disclaimer" className="modal-container">
      <section className="modal">
        <header className="modal-header">
          <h2 className="modal-title">Destination: Moon Disclaimer</h2>
          <a href="#" className="modal-close">
            Close
          </a>
        </header>
        <div className="modal-content">
          <p>
            <strong>Disclaimer:</strong> Vastness is bearable only through love
            emerged into consciousness not a sunrise but a galaxyrise emerged
            into consciousness courage of our questions across the centuries and
            billions upon billions upon billions upon billions upon billions
            upon billions upon billions.
          </p>
        </div>
      </section>
    </div>
  );
};
export default ErrorModal;
