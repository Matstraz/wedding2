import church from "../../assets/pics/backgrounds/bg-church.jpg";
import castle from "../../assets/pics/backgrounds/bg-castle.jpg";
import info from "../../assets/pics/wedding icons/info.png";
import map from "../../assets/pics/wedding icons/map.png";
import birds from "../../assets/pics/wedding icons/birds.png";
import party from "../../assets/pics/wedding icons/party.png";
import { useState } from "react";
import { css } from "aphrodite";
import styles from "../utils/Animations";
import { Waypoint } from "react-waypoint";

export default function WhenWhere() {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  return (
    <div className="bg-myBlue-bgLight py-20" id="where/when">
      <Waypoint onEnter={() => setAnimate2(true)} />
      <div
        className={
          animate2
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic`
            : "hidden"
        }
      >
        Dove & Quando
      </div>
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate
            ? `${css(styles.fadeInUp)} flex justify-center pt-12`
            : "hidden"
        }
      >
        <div className="flex gap-7 w-full justify-center flex-col lg:flex-row items-center">
          <div className="2xl:w-4/12 lg:w-5/12 md:w-10/12 w-11/12">
            <img src={church} alt="church" className="w-full" />
            <div className="flex flex-col justify-center text-center items-center gap-6 bg-white p-9 relative">
              <img src={birds} alt="birds" className="absolute -top-5 w-20" />
              <p className="italic text-slate-700">LA CERIMONIA</p>
              <p>
                La chiesa di Santa Maria della Pietà è un luogo di culto
                cattolico barocco di Palermo è opera dell'architetto Giacomo
                Amato. La facciata, è composta da due ordini di colonne
                intramezzate da diverse statue, rappresentanti Santi o Beati
                domenicani secondo uno schema compositivo certamente influenzato
                dagli edifici religiosi di stile barocco a Roma.
              </p>
              <p className="italic text-slate-700">
                Venerdì 5/07/2024 - 15:30 - Chiesa di Santa Maria della Pietà,
                Piazzetta della Pietà SNC, 90133 Palermo
              </p>
              <div className="flex gap-20 md:gap-28">
                <a href="https://it.wikipedia.org/wiki/Chiesa_di_Santa_Maria_della_Piet%C3%A0_(Palermo)">
                  <img src={info} alt="info" className="w-14" />
                </a>
                <a href="https://www.google.it/maps/dir//Chiesa+Santa+Maria+Della+Piet%C3%A0,+Piazzetta+della+Piet%C3%A0,+Palermo,+PA/@38.1174972,13.3716383,202m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x1319e52ede184e8b:0x58413da94c6faeb6!2m2!1d13.3721157!2d38.1169877!3e0">
                  <img src={map} alt="map" className="w-7" />
                </a>
              </div>
            </div>
          </div>
          <div className="2xl:w-4/12 lg:w-5/12 md:w-10/12 w-11/12">
            <img src={castle} alt="castle" className="w-full" />
            <div className="flex flex-col justify-center items-center text-center gap-6 bg-white p-9 relative">
              <img src={party} alt="birds" className="absolute -top-11 w-11" />

              <p className="italic text-slate-700">IL RICEVIMENTO</p>
              <p>
                Il Castello di San Nicola L’Arena fu edificato nel XIV secolo,
                attorno alla preesistente torre d’avvistamento di epoca
                normanna. Anch'esso, come tutti i castelli della costa
                siciliana, ebbe lo scopo di proteggere quel tratto di mare dalle
                aggressioni dei pirati turchi e saraceni che, in quei tempi,
                avevano preso di mira le spiagge siciliane più ricche di pesca.
              </p>
              <p className="italic text-slate-700">
                Venerdì 5/07/2024 - 19:30 - Castello di San Nicola L'Arena, San
                Nicola l'Arena, Palermo
              </p>
              <div className="flex gap-20 md:gap-28">
                <a href="http://www.castellodisannicola.it/">
                  <img src={info} alt="info" className="w-14" />
                </a>
                <a href="https://www.google.it/maps/dir//Castello+San+Nicola,+l'Arena,+San+Nicola+l'Arena+PA/@38.0155572,13.6137298,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1317575d277f63b1:0xe4f4db2eebe2264e!2m2!1d13.6158976!2d38.0155676!3e0">
                  <img src={map} alt="map" className="w-7" />
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
