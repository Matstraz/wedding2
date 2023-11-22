import React from "react";
import { useTimer } from "react-timer-hook";

export default function MyTimer({ expiryTimestamp }) {
  const { seconds, minutes, hours, days } = useTimer({
    expiryTimestamp,
    onExpire: () => console.warn("onExpire called"),
  });

  return (
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
  );
}
