import ticketScreenshot from "./resources/flight_ticket.jpg";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const Ticket = ({ onClose }) => {
  return (
    <motion.div style={{}} initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <img
        src={ticketScreenshot}
        style={{
          width: "95%",
          maxHeight: "93vh",
          borderRadius: "50px",
        }}
        alt=""
      ></img>
      <BackButton onClose={onClose} />
    </motion.div>
  );
};

export default Ticket;
