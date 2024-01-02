import backButton from "./resources/back-button.png";

const BackButton = ({ onClose }) => {
  return (
    <div>
      <img src={backButton} className="back-button" alt="" onClick={onClose} />
    </div>
  );
};
export default BackButton;
