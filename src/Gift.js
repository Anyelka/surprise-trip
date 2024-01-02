import React, { useEffect, useState } from "react";
import { motion, AnimatePresence, useAnimation } from "framer-motion";
import airplane from "./resources/airplane.png";

const Gift = ({ openGift, backgroundControls }) => {
  const budapestControls = useAnimation();
  const planeControls = useAnimation();
  const denpasarControls = useAnimation();

  const [showWord1, setShowWord1] = useState(true);
  const [showWord2, setShowWord2] = useState(false);
  const [showWord3, setShowWord3] = useState(false);
  const [showWord4, setShowWord4] = useState(false);
  const [showWord5, setShowWord5] = useState(false);
  const [showWord6, setShowWord6] = useState(false);

  // test:
  /* const [showWord1, setShowWord1] = useState(false);
  const [showWord2, setShowWord2] = useState(false);
  const [showWord3, setShowWord3] = useState(false);
  const [showWord4, setShowWord4] = useState(true);
  const [showWord5, setShowWord5] = useState(true);
  const [showWord6, setShowWord6] = useState(true); */

  const onDenpasarClick = () => {
    setShowWord6(false);
    openGift();
  };

  useEffect(() => {
    setTimeout(() => {
      setShowWord1(false);
    }, 500);

    setTimeout(() => {
      setShowWord2(true);
    }, 1000);

    setTimeout(() => {
      setShowWord2(false);
    }, 1500);

    setTimeout(() => {
      setShowWord3(true);
    }, 2000);

    setTimeout(() => {
      setShowWord3(false);
    }, 2500);

    setTimeout(() => {
      setShowWord4(true);
      setShowWord5(true);
      setShowWord6(true);
      setTimeout(() => {
        budapestControls.start({ opacity: 1 });
      }, 100);
      setTimeout(() => {
        budapestControls.start({
          x: -1000,
          transition: { duration: 5 },
        });
        planeControls.start({
          scale: 1,
        });
        setTimeout(() => {
          planeControls.start({
            y: -100,
            transition: { duration: 2 },
          });
        }, 500);

        setTimeout(() => {
          planeControls.start({
            y: 0,
            transition: { duration: 4 },
          });
          denpasarControls.start({
            x: 0,
            transition: { duration: 5 },
          });

          backgroundControls.start({
            backgroundColor: "#919111",
            transition: { duration: 20 },
          });

          setTimeout(() => {
            planeControls.start({
              opacity: 0,
              transition: { duration: 1 },
            });

            setShowWord4(false);
            setTimeout(() => {
              setShowWord5(false);
            }, 1000);
          }, 3750);
        }, 2500);
      }, 500);
    }, 3000);
  }, []);

  return (
    <AnimatePresence>
      <div style={{ display: "flex" }}>
        {showWord1 && (
          <motion.div
            className="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>2024</h1>
          </motion.div>
        )}
        {showWord2 && (
          <motion.div
            className="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>05</h1>
          </motion.div>
        )}
        {showWord3 && (
          <motion.div
            className="middle"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
          >
            <h1>01</h1>
          </motion.div>
        )}
        {showWord4 && (
          <motion.div
            className="middle"
            initial={{ opacity: 0, translateX: "-50%", translateY: "-50%" }}
            animate={budapestControls}
          >
            <h1>Budapest</h1>
          </motion.div>
        )}
        {showWord5 && (
          <motion.div
            className="middle"
            initial={{ scale: 0, translateX: "-50%", translateY: "-50%" }}
            animate={planeControls}
          >
            <img
              src={airplane}
              style={{ width: 100, height: 100 }}
              alt=""
            ></img>
          </motion.div>
        )}
        {showWord6 && (
          <motion.div
            className="middle"
            initial={{ x: 1000, translateX: "-50%", translateY: "-50%" }}
            animate={denpasarControls}
          >
            <h1 className="button fantasy-font" onClick={onDenpasarClick}>
              Denpasar
            </h1>
          </motion.div>
        )}
      </div>
    </AnimatePresence>
  );
};
export default Gift;
