import { css } from "aphrodite";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";
import { useState } from "react";
import icons from "../utils/Icons";

export default function Iban({ refHome }) {
  const [animate, setAnimate] = useState(false);
  function navToHome() {
    refHome.current?.scrollIntoView({ behavior: "smooth" });
  }
  function copyIban() {
    navigator.clipboard.writeText("ITXXXXXXXXXXXXXXXXXXXXXXXXX");
    alert("IBAN copiato");
  }

  return (
    <div
      className="bg-myBlue-bgDark py-14 flex flex-col items-center"
      id="gift"
    >
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate ? `${css(styles.fadeIn)} alex text-6xl italic` : "invisible"
        }
      >
        Il regalo
      </div>
      <div
        className={
          animate
            ? `${css(
                styles.fadeIn
              )} pt-12 flex justify-center items-center text-center w-11/12 px-3 lg:w-2/3`
            : "invisible"
        }
      >
        <div className="flex flex-col gap-8">
          <p>
            Cari amici e familiari, siamo lieti che vi uniate a noi per il
            nostro grande giorno.
            <span className="italic text-yellow-500">
              -Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime
              mollitia, molestiae quas vel-
            </span>
            e la vostra presenza sarà per noi il dono più bello. Se desideraste
            farci un regalo, apprezzeremmo grandemente il vostro contribuito
            nella realizzazione del nostro viaggio di nozze.
          </p>
          <div>
            <p className="py-1">IBAN - Matteo Strazzera</p>
            <p className="hover:cursor-pointer" onClick={copyIban}>
              ITXXXXXXXXXXXXXXXXXXXXXXXXX
            </p>
          </div>
          <p className="italic text-yellow-500">
            Grazie per Lorem ipsum dolor sit amet..
          </p>
          <div onClick={navToHome}>{icons.goUp}</div>
        </div>
      </div>
    </div>
  );
}
