import React, { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const Words = ({ onComplete }) => {
  const [showWord1, setShowWord1] = useState(true);
  const [showWord2, setShowWord2] = useState(false);
  const [showWord3, setShowWord3] = useState(false);
  const [showWord4, setShowWord4] = useState(false);
  const [showWord5, setShowWord5] = useState(false);
  const [showWord6, setShowWord6] = useState(false);
  const [showWord7, setShowWord7] = useState(false);

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
    }, 3000);

    setTimeout(() => {
      setShowWord4(false);
    }, 3500);

    setTimeout(() => {
      setShowWord5(true);
    }, 4000);

    setTimeout(() => {
      setShowWord5(false);
    }, 4500);

    setTimeout(() => {
      setShowWord6(true);
    }, 5000);

    setTimeout(() => {
      setShowWord6(false);
    }, 5500);

    setTimeout(() => {
      setShowWord7(true);
    }, 6000);

    setTimeout(() => {
      setShowWord7(false);
      onComplete();
    }, 6500);
  }, [onComplete]);

  return (
    <AnimatePresence>
      {showWord1 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Mindennél</h1>
        </motion.div>
      )}
      {showWord2 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Egyel</h1>
        </motion.div>
      )}
      {showWord3 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Többször</h1>
        </motion.div>
      )}
      {showWord4 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Sokkal</h1>
        </motion.div>
      )}
      {showWord5 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Jobban</h1>
        </motion.div>
      )}
      {showWord6 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Örökké</h1>
        </motion.div>
      )}
      {showWord7 && (
        <motion.div
          className="middle"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <h1>Nagyon</h1>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default Words;
