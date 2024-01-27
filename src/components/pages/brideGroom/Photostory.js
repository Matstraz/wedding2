import { css } from "aphrodite";
import styles from "../../utils/Animations";
import placeHolderPic from "../../../assets/pics/when where/alternative castel bg.jpg";

export default function Photostory({ animate2 }) {
  return (
    <div
      className={
        animate2
          ? `${css(
              styles.fadeIn
            )} flex flex-col md:flex-row justify-center items-center pt-12 md:pt-20 md:pb-16` /* text-center alex text-5xl */
          : "invisible"
      }
    >
      <img
        src={placeHolderPic}
        alt="pic1"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 translate-x-14 translate-y-8 md:translate-y-20 md:translate-x-8 picture1 z-10"
      />
      <img
        src={placeHolderPic}
        alt="pic2"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 -rotate-3 -translate-x-14 md:-translate-y-12 md:-translate-x-0"
      />
      <img
        src={placeHolderPic}
        alt="pic3"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 translate-x-6 md:translate-y-6 picture3 z-10 md:translate-x-0"
      />
      <img
        src={placeHolderPic}
        alt="pic4"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 z-10 -translate-y-5 -translate-x-14 md:-translate-y-20 picture4 md:-translate-x-0"
      />
      <img
        src={placeHolderPic}
        alt="pic5"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 translate-x-14 -translate-y-5 md:translate-y-8 md:-translate-x-5 z-10 picture5"
      />
      <img
        src={placeHolderPic}
        alt="pic6"
        className="h-44 w-40 md:h-36 md:w-32 lg:h-44 lg:w-40 bg-pink-400 translate-x-8 -translate-y-6 md:-translate-y-0 md:-translate-x-8 picture6 z-10 md:z-0"
      />
    </div>
  );
}
