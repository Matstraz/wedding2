import drink from "../../../assets/pics/timeline/drink.png";
import cake from "../../../assets/pics/timeline/cake.png";
import music from "../../../assets/pics/timeline/music.png";
import rings from "../../../assets/pics/timeline/rings.png";
import dinner from "../../../assets/pics/timeline/dinner.png";
import line1 from "../../../assets/pics/timeline/lines/line1.png";
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
      <div className="grid grid-cols-11 my7Rows gap-3 w-3/4">
        {/* row 1 L'IMPOSTAZIONE DELL'ALTEZZA DI UN DIV INFLUENZA TUTTI GLI ALTRI, MTTRE PICS & ARROWS */}
        <div className="col-span-2 row-span-2 flex justify-end items-center">
          <img src={rings} alt="cerimony" className="h-28" id="1-2" />
        </div>
        <div className="col-span-2 row-span-2 flex justify-start items-center">
          <img src={line1} alt="line1" className="h-28" id="3-4" />
        </div>

        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className="bg-gray-100" id="7"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 2 */}
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className="bg-gray-100" id="7"></div>
        <div className="col-span-2 row-span-2 flex justify-center items-center">
          <img src={music} alt="music" className="h-28" id="8-9" />
        </div>
        <div
          className="bg-gray-100 row-span-2 flex justify-center items-center"
          id="10-11"
        >
          arrow 2
        </div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 3 */}
        <div className="bg-gray-100" id="1"></div>
        <div className="bg-gray-100" id="2"></div>
        <div className="bg-gray-100" id="3"></div>
        <div className="col-span-2 row-span-2 flex justify-start items-center">
          <img src={drink} alt="drink" className="h-28" id="4-5" />
        </div>

        <div className="bg-gray-100" id="6"></div>
        <div
          className="bg-gray-100 row-span-3 flex justify-center items-center"
          id="7"
        >
          arrow 4
        </div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 4 */}
        <div className="bg-gray-100" id="1"></div>
        <div
          className="bg-gray-100 col-span-2 flex justify-center items-center"
          id="2-3"
        >
          arrow 4
        </div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="col-span-2 row-span-2 flex justify-center items-center">
          <img src={cake} alt="cake" className="h-28" id="10-11" />
        </div>
        {/* row 5 */}
        <div className="bg-gray-100" id="1"></div>
        <div className="col-span-2 row-span-2 flex justify-center items-center">
          <img src={drink} alt="drink" className="h-28" id="2-3" />
        </div>
        <div className="bg-gray-100" id="4"></div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="6"></div>
        <div className=" bg-gray-100" id="8"></div>
        <div className=" bg-gray-100" id="9"></div>
        {/* row 6 */}
        <div className="bg-gray-100" id="1"></div>
        <div
          className="bg-gray-100 col-span-2 flex justify-center items-center"
          id="4-5"
        >
          arrow 5
        </div>
        <div className="col-span-2 row-span-2 flex justify-center items-center">
          <img src={dinner} alt="dinner" className="h-28" id="6-7" />
        </div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
        {/* row 7 */}
        <div className="bg-gray-100" id="1"></div>
        <div className="bg-gray-100" id="2"></div>
        <div className="bg-gray-100" id="3"></div>
        <div className="bg-gray-100" id="4"></div>
        <div className="bg-gray-100" id="5"></div>
        <div className="bg-gray-100" id="8"></div>
        <div className="bg-gray-100" id="9"></div>
        <div className="bg-gray-100" id="10"></div>
        <div className="bg-gray-100" id="11"></div>
      </div>
    </div>
  );
}
