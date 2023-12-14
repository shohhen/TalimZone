import Modal from "react-modal";
import './modal.scss'

const customStyles = {
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
  },
};

const CustomModal = ({ isOpen, onClose, children }) => {
    if (!isOpen) {
      return null;
    }
  
    return (
      <div className="modal-overlay">
        <div className="modal">
          <p className="close-btn" onClick={onClose}>
            X
          </p>
          <div className="modal-content">{children}</div>
        </div>
      </div>
    );
  };

export default CustomModal
