import React from "react";
import { motion } from "framer-motion";
import Countdown from "react-countdown";
import Completionist from "react-countdown";
import NewPictures from "./NewPictures";

const prefixWith0 = (number) => {
  return number < 10 ? "0" + number : number;
};

const renderer = ({ days, hours, minutes, seconds, completed }) => {
  if (completed) {
    // Render a completed state
    return <Completionist />;
  } else {
    // Render a countdown
    return (
      <div style={{ fontSize: 18, color: "#ffffad", fontFamily: "Monospace" }}>
        <h3>
          {days} days {prefixWith0(hours)} hr {prefixWith0(minutes)} min{" "}
          {prefixWith0(seconds)} sec
        </h3>
      </div>
    );
  }
};

const OpenGift = ({
  onToggleTicket,
  onOpenItinerary,
  onOpenPlaces,
  onOpenSlideshow1,
  onOpenSlideshow2,
}) => {
  const date = new Date("2024-05-01T10:30:00");
  return (
    <motion.div initial={{ scale: 0 }} animate={{ scale: 1 }}>
      <div className="open-gift-container">
        <div>
          <h1 style={{ margin: "0px", fontFamily: "Monsterrat" }}>2024</h1>
          <h3 style={{ margin: "0px", fontFamily: "Monsterrat" }}>
            Május 1-19
          </h3>
          <Countdown date={date} renderer={renderer} />
        </div>
        {/* <h2
          className="button button-bordered fantasy-font"
          onClick={onToggleTicket}
        >
          Repjegy
        </h2> */}
        <h2
          className="button button-bordered fantasy-font"
          onClick={onOpenItinerary}
        >
          Térkép
        </h2>
        <h2
          className="button button-bordered fantasy-font"
          onClick={onOpenPlaces}
        >
          Itt leszünk
        </h2>
        <NewPictures
          onOpenSlideshow1={onOpenSlideshow1}
          onOpenSlideshow2={onOpenSlideshow2}
        />
      </div>
    </motion.div>
  );
};

export default OpenGift;
