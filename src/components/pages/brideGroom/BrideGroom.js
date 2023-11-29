import { useState } from "react";
import foto1 from "../../../assets/pics/bride-groom/foto1.png";
import foto2 from "../../../assets/pics/bride-groom/foto2.png";
import { css } from "aphrodite";
import styles from "../../utils/Animations";
import { Waypoint } from "react-waypoint";

export default function BrideGroom({ refBrideGroom }) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);
  return (
    <div className="bg-myBlue-bgLight py-20" id="newlyweds" ref={refBrideGroom}>
      <Waypoint onEnter={() => setAnimate3(true)} />
      <p
        className={
          animate3
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic`
            : "invisible"
        }
      >
        Gli Sposi
      </p>
      <Waypoint onEnter={() => setAnimate(true)} />

      <div
        className={
          animate
            ? `${css(
                styles.fadeIn
              )} flex flex-col md:flex-row justify-center items-center py-16 md:gap-16 gap-8 px-2`
            : "invisible"
        }
      >
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto1} className="w-56 md:w-72" alt="foto sposo" />
          <p>Matteo</p>
        </div>
        <p className="text-4xl sm:text-6xl lg:text-6xl alex">&</p>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto2} className="w-56 md:w-72" alt="foto sposa" />
          <p>Alessandra</p>
        </div>
      </div>
      <Waypoint onEnter={() => setAnimate2(true)} />
      <div
        className={
          animate2
            ? `${css(styles.fadeIn)} text-center alex text-5xl`
            : "invisible"
        }
      >
        Lorem, ipsum dolor.
      </div>
      <div
        className={
          animate2
            ? `${css(styles.fadeIn)} text-center text-base py-5`
            : "invisible"
        }
      >
        5 Luglio, 2024 - Palermo
      </div>
    </div>
  );
}
