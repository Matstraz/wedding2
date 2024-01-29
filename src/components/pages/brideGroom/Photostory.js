import { css } from "aphrodite";
import styles from "../../utils/Animations";
import pola1 from "../../../assets/pics/bride-groom/photostory/pola-01.png";
import pola2 from "../../../assets/pics/bride-groom/photostory/pola-02.png";
import pola3 from "../../../assets/pics/bride-groom/photostory/pola-03.png";
import pola4 from "../../../assets/pics/bride-groom/photostory/pola-04.png";
import pola5 from "../../../assets/pics/bride-groom/photostory/pola-05.png";
import pola6 from "../../../assets/pics/bride-groom/photostory/pola-06.png";

export default function Photostory({ animate2 }) {
  return (
    <div
      className={
        animate2
          ? `${css(
              styles.fadeIn
            )} flex flex-col md:flex-row justify-center items-center pb-5 md:pt-16 md:pb-16` /* text-center alex text-5xl */
          : "invisible"
      }
    >
      <img
        src={pola1}
        alt="pic1"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 translate-x-12 translate-y-16 md:translate-y-20 md:translate-x-510 lg:translate-x-5 picture1 z-10"
      />
      <img
        src={pola2}
        alt="pic2"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 -rotate-3 translate-y-6 -translate-x-14 md:-translate-y-12 md:-translate-x-0"
      />
      <img
        src={pola3}
        alt="pic3"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 translate-x-6 md:translate-y-6 picture3 z-10 md:translate-x-0"
      />
      <img
        src={pola4}
        alt="pic4"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 z-10 -translate-y-12 -translate-x-12 md:-translate-y-20 picture4 md:-translate-x-0"
      />
      <img
        src={pola5}
        alt="pic5"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 translate-x-14 -translate-y-20 tra md:translate-y-8 md:-translate-x-14 lg:-translate-x-8 z-10 picture5"
      />
      <img
        src={pola6}
        alt="pic6"
        className="h-48 w-44 md:h-40 md:w-44 lg:h-48 lg:w-44 translate-x-6 -translate-y-24 tra md:-translate-y-0 md:-translate-x-20 lg:-translate-x-12 picture6 z-10 md:z-0"
      />
    </div>
  );
}
