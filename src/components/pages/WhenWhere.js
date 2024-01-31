import church from "../../assets/pics/when where/bg-church.png";
import castle from "../../assets/pics/when where/bg-castle.png";
import map from "../../assets/pics/when where/map.png";
import churchIcon from "../../assets/pics/when where/church.png";
import party from "../../assets/pics/when where/party.png";
import { useState } from "react";
import { css } from "aphrodite";
import styles from "../utils/Animations";
import { Waypoint } from "react-waypoint";

export default function WhenWhere({ refWhenWhere }) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);

  return (
    <div className="bg-myBlue-bgLight py-20" id="where/when" ref={refWhenWhere}>
      <Waypoint onEnter={() => setAnimate2(true)} />
      <div
        className={
          animate2
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic`
            : "invisible"
        }
      >
        Dove &nbsp;e&nbsp; Quando
      </div>
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate
            ? `${css(styles.fadeInUp)} flex justify-center pt-12`
            : "invisible"
        }
      >
        <div className="flex gap-7 w-full justify-center flex-col lg:flex-row items-center">
          <div className="2xl:w-4/12 lg:w-5/12 md:w-10/12 w-11/12">
            <div className="w-full relative">
              <img src={church} alt="church" className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full bg-myBlue-bgDark bg-opacity-20"></div>
            </div>
            <div className="flex flex-col justify-center text-center items-center gap-6 bg-white p-9 relative">
              <img
                src={churchIcon}
                alt="churchIcon"
                className="absolute -top-12 w-16"
                /*   />
              <p className="italic">LA CERIMONIA</p>
              <p>
                La chiesa di Santa Maria della Pietà è un luogo di culto
                cattolico barocco di Palermo è opera dell'architetto Giacomo
                Amato. La facciata, è composta da due ordini di colonne
                intramezzate da diverse statue, rappresentanti Santi o Beati
                domenicani secondo uno schema compositivo certamente influenzato
                dagli edifici religiosi di stile barocco a Roma.
              </p>
              <p className="italic font-bold">
                Venerdì 5/07/2024 - 15:30 - Chiesa di Santa Maria della Pietà,
                Piazzetta della Pietà SNC, Palermo
              </p>
              <a
                href="https://www.google.it/maps/dir//Chiesa+Santa+Maria+Della+Piet%C3%A0,+Piazzetta+della+Piet%C3%A0,+Palermo,+PA/@38.1174972,13.3716383,202m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x1319e52ede184e8b:0x58413da94c6faeb6!2m2!1d13.3721157!2d38.1169877!3e0"
                className="flex justify-center items-center gap-3 italic bg-myBlue-bgLight px-3 py-1"
              >
                <img src={map} alt="map" className="w-4" />
                <p>Indicazioni stradali</p>
              </a> */
              />
              <p className="italic">LA CERIMONIA</p>
              <p className="text-justify">
                La chiesa di Santa Maria della Pietà è un capolavoro barocco,
                costruita nel 1678 dall&apos;architetto Giacomo Amato per le
                suore domenicane che avevano il loro convento nel Palazzo
                Abatellis. La chiesa conserva importantissime opere pittoriche
                settecentesche che ne fanno una vera galleria di quel gusto
                pieno, dinamico, di grande ricchezza cromatica, che fu tipico
                del XVIII secolo. Le decorazioni a stucchi furono eseguite da
                Giacomo e Procopio Serpotta e gli splendidi affreschi furono
                realizzati da Guglielmo Borremans.
              </p>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="italic font-bold">Ore 15:30</p>
                <div>
                  <p className="italic font-bold text-lg">
                    Chiesa di Santa Maria della Pietà
                  </p>
                  <p className="italic ">Piazzetta della Pietà SNC, Palermo</p>
                </div>
              </div>
              <a
                href="https://www.google.it/maps/dir//Chiesa+Santa+Maria+Della+Piet%C3%A0,+Piazzetta+della+Piet%C3%A0,+Palermo,+PA/@38.1174972,13.3716383,202m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x1319e52ede184e8b:0x58413da94c6faeb6!2m2!1d13.3721157!2d38.1169877!3e0"
                className="flex justify-center items-center gap-3 italic bg-myBlue-bgLight px-3 py-1"
              >
                <img src={map} alt="map" className="w-4" />
                <p>Indicazioni stradali</p>
              </a>
            </div>
          </div>
          <div className="2xl:w-4/12 lg:w-5/12 md:w-10/12 w-11/12">
            <div className="w-full relative">
              <img src={castle} alt="castle" className="w-full" />
              <div className="absolute top-0 left-0 w-full h-full bg-myBlue-bgDark bg-opacity-20"></div>
            </div>
            <div className="flex flex-col justify-center items-center text-center gap-6 bg-white p-9 relative">
              <img src={party} alt="party" className="absolute -top-11 w-28" />
              <p className="italic">IL RICEVIMENTO</p>
              <p className="text-justify">
                Il Castello di San Nicola L&apos;Arena fu edificato nel XIV
                secolo, attorno alla preesistente torre d&apos;avvistamento di
                epoca normanna. Anch&apos;esso, come tutti i castelli della
                costa siciliana, ebbe lo scopo di proteggere quel tratto di mare
                dalle aggressioni dei pirati turchi e saraceni che, in quei
                tempi, avevano preso di mira le spiagge siciliane più ricche di
                pesca. Un luogo dall&apos;atmosfera incantata dove il tempo
                sembra essersi fermato. L&apos;incantevole cornice sul golfo di
                Trabia regala una vista panoramica incastonata nel piccolo borgo
                marinaro.
              </p>
              <div className="flex flex-col justify-center items-center gap-2">
                <p className="italic font-bold">Ore 19:30</p>
                <div>
                  <p className="italic font-bold text-lg">
                    Castello di San Nicola L'Arena
                  </p>
                  <p className="italic ">
                    Via Castello, San Nicola l'Arena &#40;PA&#41;
                  </p>
                </div>
              </div>
              <a
                href="https://www.google.it/maps/dir//Castello+San+Nicola,+l'Arena,+San+Nicola+l'Arena+PA/@38.0155572,13.6137298,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1317575d277f63b1:0xe4f4db2eebe2264e!2m2!1d13.6158976!2d38.0155676!3e0"
                className="flex justify-center items-center gap-3 italic bg-myBlue-bgLight px-3 py-1"
              >
                <img src={map} alt="map" className="w-4" />
                <p>Indicazioni stradali</p>
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
