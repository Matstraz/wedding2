import drink from "../../../assets/pics/timeline/drink.png";
import cake from "../../../assets/pics/timeline/cake.png";
import music from "../../../assets/pics/timeline/music.png";
import rings from "../../../assets/pics/timeline/rings.png";
import dinner from "../../../assets/pics/timeline/dinner.png";
import camera from "../../../assets/pics/timeline/camera.png";
import line1 from "../../../assets/pics/timeline/lines/line1.png";
import line2 from "../../../assets/pics/timeline/lines/line2.png";
import line3 from "../../../assets/pics/timeline/lines/line3.png";
import line4 from "../../../assets/pics/timeline/lines/line4.png";
import line5 from "../../../assets/pics/timeline/lines/line5.png";
import { Waypoint } from "react-waypoint";
import { css } from "aphrodite";
import styles from "../../utils/Animations";

export default function DesktopVersion({ animate, setAnimate }) {
  return (
    <div
      className={
        animate
          ? `${css(
              styles.fadeIn
            )} hidden lg:flex justify-center items-center w-full pt-12`
          : "invisible"
      }
    >
      <Waypoint onEnter={() => setAnimate(true)} />
      <div className="grid grid-cols-8 my7Rows gap-3 w-8/12 3xl:w-7/12 4xl:w-6/12 5xl:w-5/12 6xl:w-4/12">
        {/* row 1 L'IMPOSTAZIONE DELL'ALTEZZA DI UN DIV INFLUENZA TUTTI GLI ALTRI, MTTRE PICS & ARROWS */}
        <div className="col-span-2 row-span-2 flex justify-end items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={rings} alt="cerimony" className="h-28" id="1-2" />
            <p>15:30</p>
          </div>
        </div>
        <div className="col-span-2 row-span-2 flex justify-start items-center">
          <img src={line1} alt="line1" className="h-28" id="3-4" />
        </div>

        <div className="" id="5"></div>
        <div className="" id="6"></div>

        <div className="row-span-2 flex justify-start items-end">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={music} alt="music" className="h-28" id="7" />
            <p>22:00</p>
          </div>
        </div>
        <div className="" id="8"></div>

        {/* row 2 */}
        <div className="" id="5"></div>
        <div className="" id="6"></div>
        <div className="row-span-3 flex justify-start items-end" id="8">
          <img src={line2} alt="line2" className="h-48" />
        </div>
        {/* row 3 */}
        <div className="" id="1"></div>
        <div className="" id="2"></div>
        <div className="" id="3"></div>
        <div className="col-span-2 row-span-2 flex justify-start items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={drink} alt="drink" className="h-28" id="4-5" />
            <p>16:30</p>
          </div>
        </div>
        <div className="row-span-3 flex justify-center items-center" id="6">
          <img src={line5} alt="line5" className="h-64" />
        </div>
        <div className="" id="7"></div>
        {/* row 4 */}
        <div className="" id="1"></div>
        <div className="col-span-2 flex justify-end items-center" id="2-3">
          <img src={line3} alt="line3" className="h-16" />
        </div>
        <div className="" id="7"></div>
        {/* row 5 */}
        <div className="col-span-2 row-span-2 flex justify-end items-center">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={camera} alt="camera" className="h-24" id="1-2" />
            <p>17:00</p>
          </div>
        </div>
        <div className="" id="3"></div>
        <div className="" id="4"></div>
        <div className="" id="5"></div>
        <div className="col-span-2 row-span-2 flex justify-center items-start">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={cake} alt="cake" className="h-28" id="7-8" />
            <p>24:00</p>
          </div>
        </div>
        {/* row 6 */}

        <div
          className="row-span-2 col-span-2 flex justify-center items-center"
          id="3-4"
        >
          <img src={line4} alt="line4" className="h-24" />
        </div>

        <div className="col-span-2 row-span-2 flex justify-start items-start pl-2">
          <div className="flex flex-col justify-center items-center gap-1">
            <img src={dinner} alt="dinner" className="h-28" id="5-6" />
            <p>19:00</p>
          </div>
        </div>
        {/* row 7 */}
        <div className="" id="1"></div>
        <div className="" id="2"></div>
        <div className="" id="7"></div>
        <div className="" id="8"></div>
      </div>
    </div>
  );
}
