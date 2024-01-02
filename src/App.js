import logo from "./logo.svg";
import "./App.css";
import Timer from "./Timer";
import { useEffect, useState } from "react";
import Words from "./Words";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import Gift from "./Gift";
import OpenGift from "./OpenGift";
import { motion, useAnimation, AnimatePresence } from "framer-motion";
import MapChart from "./MapChart";
import BaliMap from "./resources/Bali_Locator_Map.js";
import BaliLocatorMap from "./resources/Bali_Locator_Map.js";
import Map from "./Map";
import Places from "./Places";
import Ticket from "./Ticket";
import Slideshow from "./Slideshow";
import { pictures2, pictures3 } from "./constants";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAbDdJQmwsvw1WPzOb5mRPz8SWKtPkIUjc",
  authDomain: "project-6442889511377355468.firebaseapp.com",
  projectId: "project-6442889511377355468",
  storageBucket: "project-6442889511377355468.appspot.com",
  messagingSenderId: "470047068183",
  appId: "1:470047068183:web:bb42ab837904f343970c52",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

function App() {
  const [showTimer, setShowTimer] = useState(true);
  const [showWords, setShowWords] = useState(false);
  const [showGift, setShowGift] = useState(false);
  const [showOpenGift, setShowOpenGift] = useState(false);
  const [showMap, setShowMap] = useState(false);
  const [showPlaces, setShowPlaces] = useState(false);
  const [showTicket, setShowTicket] = useState(false);
  const [showSlideShow1, setShowSlideshow1] = useState(false);
  const [showSlideShow2, setShowSlideshow2] = useState(false);

  const backgroundControls = useAnimation();

  //test:
  /* const [showTimer, setShowTimer] = useState(false);
  const [showWords, setShowWords] = useState(false);
  const [showGift, setShowGift] = useState(true); */
  const onTimerClick = () => {
    setShowTimer(false);
    setShowOpenGift(true);
    backgroundControls.start({
      backgroundColor: "#919111",
    });
  };

  const onTimerComplete = () => {
    setShowTimer(false);
    setTimeout(() => setShowWords(true), 1000);
  };

  const onWordsComplete = () => {
    setShowWords(false);
    setTimeout(() => setShowGift(true), 1000);
  };

  const onGiftComplete = () => {
    setShowOpenGift(true);
  };

  const onToggleMap = () => {
    setShowMap(!showMap);
    setShowOpenGift(!showOpenGift);
  };

  const onTogglePlaces = () => {
    setShowPlaces(!showPlaces);
    setShowOpenGift(!showOpenGift);
  };

  const onToggleTicket = () => {
    setShowTicket(!showTicket);
    setShowOpenGift(!showOpenGift);
  };

  const onToggleSlideshow1 = () => {
    setShowSlideshow1(!showSlideShow1);
    setShowOpenGift(!showOpenGift);
  };

  const onToggleSlideshow2 = () => {
    setShowSlideshow2(!showSlideShow2);
    setShowOpenGift(!showOpenGift);
  };

  return (
    <motion.div className="App" animate={backgroundControls}>
      <div className="App-header">
        {showTimer && (
          <Timer
            duration={10}
            onClick={onTimerClick}
            onComplete={onTimerComplete}
          />
        )}
        {showWords && <Words onComplete={onWordsComplete} />}
        {showGift && (
          <Gift
            openGift={onGiftComplete}
            backgroundControls={backgroundControls}
          />
        )}
        {showOpenGift && (
          <OpenGift
            onToggleTicket={onToggleTicket}
            onOpenItinerary={onToggleMap}
            onOpenPlaces={onTogglePlaces}
            onOpenSlideshow1={onToggleSlideshow1}
            onOpenSlideshow2={onToggleSlideshow2}
          />
        )}
        {showTicket && <Ticket onClose={onToggleTicket} />}
        {showMap && <Map onClose={onToggleMap} />}
        {showPlaces && <Places onClose={onTogglePlaces} />}
        {showSlideShow1 && (
          <Slideshow onClose={onToggleSlideshow1} images={pictures2} />
        )}
        {showSlideShow2 && (
          <Slideshow onClose={onToggleSlideshow2} images={pictures3} />
        )}
      </div>
    </motion.div>
  );
}

export default App;
