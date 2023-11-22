import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer() {
  const expiryTimestamp = new Date("July 05, 2024 15:30:00");
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
    <div className="flex justify-center items-center bg-myBlue-bgDark text-lg md:text-3xl">
      <div className="grid grid-cols-4 justify-center items-center text-center italic gap-x-6 gap-y-2 py-16">
        <p>{days}</p>
        <p>{hours}</p>
        <p>{minutes}</p>
        <p>{seconds}</p>
        <p>Giorni</p>
        <p>Ore</p>
        <p>Minuti</p>
        <p>Secondi</p>
      </div>
    </div>
  );
}
