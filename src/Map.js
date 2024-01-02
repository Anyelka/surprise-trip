import MapChart from "./MapChart";
import BaliLocatorMap from "./resources/Bali_Locator_Map";
import baliLocatorMapScreenshot from "./resources/bali_locator_map_screenshot.jpg";
import { motion } from "framer-motion";
import BackButton from "./BackButton";

const Map = ({ onClose }) => {
  /* return (
    <div>
      <BaliLocatorMap className="map"></BaliLocatorMap>
      <MapChart
        className="map-locations"
        style={{ left: 0, width: 1000, height: 1000 }}
      ></MapChart>
      <BackButton onClose={onClose} />
    </div>
  ); */
  return (
    <motion.div style={{}} initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <img
        src={baliLocatorMapScreenshot}
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
export default Map;
