import { css } from "aphrodite";
import React from "react";
import { useState } from "react";
import { useTimer } from "react-timer-hook";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";

export default function MyTimer() {
  const expiryTimestamp = new Date("July 05, 2024 15:30:00");
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  const [animate, setAnimate] = useState(false);

  return (
    <>
      <Waypoint onEnter={() => setAnimate(true)} />
      <div className="flex justify-center items-center bg-myBlue-bgDark text-3xl md:text-4xl lg:text-5xl">
        <div
          className={
            animate
              ? `${css(
                  styles.fadeIn
                )} grid grid-cols-4 justify-center items-center text-center italic gap-x-6 gap-y-2 py-16`
              : "grid grid-cols-4 justify-center items-center text-center italic gap-x-6 gap-y-2 py-16"
          }
        >
          <p>{days}</p>
          <p>{hours}</p>
          <p>{minutes}</p>
          <p>{seconds}</p>
          <p className="text-lg md:text-xl">Giorni</p>
          <p className="text-lg md:text-xl">Ore</p>
          <p className="text-lg md:text-xl">Minuti</p>
          <p className="text-lg md:text-xl">Secondi</p>
        </div>
      </div>
    </>
  );
}
