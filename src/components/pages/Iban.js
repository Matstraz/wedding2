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
    navigator.clipboard.writeText("IT45P0306904606100000006074");
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
        <div className="flex flex-col gap-8 items-center">
          <p>
            Cari amici e familiari, siamo lieti che vi uniate a noi per il
            nostro matrimonio e la vostra presenza sarà il dono più bello. Se
            desideraste farci un regalo, apprezzeremmo il vostro contributo per
            raggiungere la destinazione del nostro viaggio di nozze.
          </p>
          <div
            className="hover:cursor-pointer w-fit text-lg"
            onClick={copyIban}
          >
            <p className="py-1">IBAN - Matteo Strazzera</p>
            <p>IT45P0306904606100000006074</p>
          </div>
          <p>Grazie per condividere con noi il nostro grande giorno!</p>
          <p className="italic font-bold">Alessandra e Matteo</p>
          <div onClick={navToHome}>{icons.goUp}</div>
        </div>
      </div>
    </div>
  );
}
