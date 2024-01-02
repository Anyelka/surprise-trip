import React, { useRef, useState } from "react";
import { CountdownCircleTimer } from "react-countdown-circle-timer";

const useRenderTime = ({ remainingTime }) => {
  const currentTime = useRef(remainingTime);
  const prevTime = useRef(null);
  const isNewTimeFirstTick = useRef(false);
  const [, setOneLastRerender] = useState(0);

  if (currentTime.current !== remainingTime) {
    isNewTimeFirstTick.current = true;
    prevTime.current = currentTime.current;
    currentTime.current = remainingTime;
  } else {
    isNewTimeFirstTick.current = false;
  }

  // force one last re-render when the time is over to tirgger the last animation
  if (remainingTime === 0) {
    setTimeout(() => {
      setOneLastRerender((val) => val + 1);
    }, 20);
  }

  const isTimeUp = isNewTimeFirstTick.current;

  return (
    <div className="time-wrapper">
      <div key={remainingTime} className={`time ${isTimeUp ? "up" : ""}`}>
        {remainingTime}
      </div>
      {prevTime.current !== null && (
        <div
          key={prevTime.current}
          className={`time ${!isTimeUp ? "down" : ""}`}
        >
          {prevTime.current}
        </div>
      )}
    </div>
  );
};

const Timer = ({ duration, onClick, onComplete }) => (
  <div className="timer-wrapper" onClick={onClick}>
    <CountdownCircleTimer
      className="middle"
      isPlaying
      duration={duration}
      colors={[
        "#98eb34",
        "#34eb8f",
        "#0af2ee",
        "#0af2ee",
        "#0851c7",
        "#5112e6",
        "#da05ed",
        "#ed053b",
      ]}
      colorsTime={[8.75, 7.5, 6.25, 5, 3.75, 2.5, 1.25, 0]}
      size={300}
      trailColor={"#111111"}
      onComplete={onComplete}
    >
      {useRenderTime}
    </CountdownCircleTimer>
  </div>
);

export default Timer;
