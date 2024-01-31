import { useState } from "react";
import foto1 from "../../../assets/pics/bride-groom/groom.png";
import foto2 from "../../../assets/pics/bride-groom/bride.png";
import { css } from "aphrodite";
import styles from "../../utils/Animations";
import { Waypoint } from "react-waypoint";
import Photostory from "./Photostory";

export default function BrideGroom({ refBrideGroom }) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  const [animate3, setAnimate3] = useState(false);

  return (
    <div>
      <div
        className="bg-myBlue-bgLight pt-20 md:py-20"
        id="newlyweds"
        ref={refBrideGroom}
      >
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
        {/* desktop version */}
        <div className="md:flex justify-center items-center hidden w-full">
          <div
            className={
              animate
                ? `${css(
                    styles.fadeIn
                  )} grid gridSystemBrideGroom grid-rows-3 md:py-16 w-3/4`
                : "invisible"
            }
          >
            {/* row 1 */}
            <div></div>
            <div></div>
            <div className="row-span-2 flex justify-start">
              <div className="flex flex-col justify-center items-center gap-5 text-xl italic">
                <img src={foto1} className="w-72" alt="foto sposo" />
                <p>Matteo Strazzera</p>
              </div>
            </div>

            {/* row 2 */}
            <div className="row-span-2 flex justify-end">
              <div className="flex flex-col justify-center items-center gap-5 text-xl italic">
                <img src={foto2} className="w-72" alt="foto sposa" />
                <p>Alessandra La Marca</p>
              </div>
            </div>

            <p className="text-4xl sm:text-5xl alex text-center px-10">&</p>
            {/* row 3 */}
            <div></div>
            <div></div>
          </div>
        </div>
        {/* mobile version */}
        <div
          className={
            animate
              ? `${css(
                  styles.fadeIn
                )} flex flex-col justify-center items-center pt-16 pb-2 gap-9 px-2 md:hidden`
              : "invisible"
          }
        >
          <div className="flex flex-col justify-center items-center gap-3 text-lg italic">
            <img src={foto1} className="w-64" alt="foto sposo" />
            <p>Matteo Strazzera</p>
          </div>
          <p className="text-4xl sm:text-6xl lg:text-6xl alex">&</p>
          <div className="flex flex-col justify-center items-center gap-3 text-lg italic">
            <img src={foto2} className="w-64" alt="foto sposa" />
            <p>Alessandra La Marca</p>
          </div>
        </div>

        <Waypoint onEnter={() => setAnimate2(true)} />
        <div className="pt-14 pb-6 md:pt-0 md:pb-16 bg-myBlue-bgLight flex justify-center items-center">
          <p className="py-3 px-4 md:py-4 md:px-6 lg:py-8 lg:px-0 bg-myBlue-bgDark text-center w-full italic">
            Galeotto fu il corso di tennis che ci ha fatto incontrare e dopo 12
            anni eccoci qui pronti a fare il grande passo!
            <br />
            <br className="" />
            Cari amici e familiari, siamo lieti di invitarvi alla celebrazione
            del nostro matrimonio che si terrà giorno &nbsp;
            <span className="font-bold">05 luglio 2024</span>.
          </p>
        </div>
        <Photostory animate2={animate2} />
      </div>
    </div>
  );
}
