import { css } from "aphrodite";
import styles from "../../utils/Animations";
import pola1 from "../../../assets/pics/bride-groom/photostory/pola-01.png";
import pola2 from "../../../assets/pics/bride-groom/photostory/pola-02.png";
import pola3 from "../../../assets/pics/bride-groom/photostory/pola-03.png";
import pola4 from "../../../assets/pics/bride-groom/photostory/pola-04.png";
import pola5 from "../../../assets/pics/bride-groom/photostory/pola-05.png";
import pola6 from "../../../assets/pics/bride-groom/photostory/pola-06.png";
import enlarged1 from "../../../assets/pics/bride-groom/photostory/1.jpg";
import enlarged2 from "../../../assets/pics/bride-groom/photostory/2.jpg";
import enlarged3 from "../../../assets/pics/bride-groom/photostory/3.jpg";
import enlarged4 from "../../../assets/pics/bride-groom/photostory/4.png";
import enlarged5 from "../../../assets/pics/bride-groom/photostory/5.jpg";
import enlarged6 from "../../../assets/pics/bride-groom/photostory/6.jpg";

export default function Photostory({ animate2, enlarged, setEnlarged }) {
  return (
    <div
      className={
        enlarged
          ? `${css(
              styles.fadeIn
            )} flex flex-col md:flex-row justify-center items-center pb-14 pt-0 md:pt-0 md:pb-0 lg:pt-0 lg:pb-0`
          : animate2
          ? `${css(
              styles.fadeIn
            )} flex flex-col md:flex-row justify-center items-center pb-5 md:pt-16 md:pb-16 lg:pt-20 lg:pb-20`
          : `invisible`
      }
    >
      {/* Enlarger */}
      {enlarged && (
        <div className="relative flex justify-center items-center w-11/12 md:w-5/12 lg:w-3/12">
          <img
            className="w-full border-white border-8 cursor-zoom-out"
            src={enlarged}
            alt="enlarged pic"
            onClick={() => setEnlarged(null)}
          />
          <button
            aria-label="Close Menu"
            title="Close Menu"
            className="absolute text-xs lg:text-base top-3 right-3 text-myBlue-mainText bg-myBlue-main border-myBlue-mainText border-2 rounded-full lg:px-2 px-1"
            onClick={() => setEnlarged(null)}
          >
            X
          </button>
        </div>
      )}

      {/* Normal view */}
      <a href="#topPage">
        <img
          src={pola1}
          alt="pic1"
          className={
            enlarged
              ? `hidden`
              : `h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 translate-x-12 translate-y-16 md:translate-y-20 md:translate-x-510 lg:translate-x-5 picture1 z-10 cursor-zoom-in`
          }
          onClick={() => setEnlarged([enlarged1])}
        />
      </a>
      <a href="#topPage">
        <img
          src={pola2}
          alt="pic2"
          className={
            enlarged
              ? `hidden`
              : "h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 -rotate-3 translate-y-6 -translate-x-14 md:-translate-y-12 md:-translate-x-0 cursor-zoom-in"
          }
          onClick={() => setEnlarged([enlarged2])}
        />
      </a>
      <a href="#topPage">
        <img
          src={pola3}
          alt="pic3"
          className={
            enlarged
              ? `hidden`
              : "h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 translate-x-6 md:translate-y-6 picture3 z-10 md:translate-x-0 cursor-zoom-in"
          }
          onClick={() => setEnlarged([enlarged3])}
        />
      </a>
      <a href="#topPage">
        <img
          src={pola4}
          alt="pic4"
          className={
            enlarged
              ? `hidden`
              : "h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 z-10 -translate-y-12 -translate-x-12 md:-translate-y-20 picture4 md:-translate-x-0 cursor-zoom-in"
          }
          onClick={() => setEnlarged([enlarged4])}
        />
      </a>
      <a href="#topPage">
        <img
          src={pola5}
          alt="pic5"
          className={
            enlarged
              ? `hidden`
              : "h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 translate-x-14 -translate-y-20 tra md:translate-y-8 md:-translate-x-14 lg:-translate-x-8 z-10 picture5 cursor-zoom-in"
          }
          onClick={() => setEnlarged([enlarged5])}
        />
      </a>
      <a href="#topPage">
        <img
          src={pola6}
          alt="pic6"
          className={
            enlarged
              ? `hidden`
              : "h-48 w-44 md:h-36 md:w-32 lg:h-48 lg:w-44 translate-x-6 -translate-y-24 tra md:-translate-y-0 md:-translate-x-20 lg:-translate-x-12 picture6 z-10 md:z-0 cursor-zoom-in"
          }
          onClick={() => setEnlarged([enlarged6])}
        />
      </a>
    </div>
  );
}
