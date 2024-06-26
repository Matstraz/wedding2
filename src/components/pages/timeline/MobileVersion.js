import drink from "../../../assets/pics/timeline/drink.png";
import cake from "../../../assets/pics/timeline/cake.png";
import music from "../../../assets/pics/timeline/music.png";
import rings from "../../../assets/pics/timeline/rings.png";
import dinner from "../../../assets/pics/timeline/dinner.png";
import arrow1 from "../../../assets/pics/timeline/arrows/arrow1.png";
/* loop arrow */
/* import arrow2 from "../../../assets/pics/timeline/arrows/arrow2.png"; */
import arrow3 from "../../../assets/pics/timeline/arrows/arrow3.png";
import arrow4 from "../../../assets/pics/timeline/arrows/arrow4.png";
import arrow5 from "../../../assets/pics/timeline/arrows/arrow5.png";
import { css } from "aphrodite";
import styles from "../../utils/Animations";
import { Waypoint } from "react-waypoint";

export default function DesktopVersion({ animate, setAnimate }) {
  return (
    <div
      className={
        animate
          ? `${css(
              styles.fadeIn
            )} py-24 lg:hidden flex justify-center items-center`
          : "invisible"
      }
    >
      <Waypoint onEnter={() => setAnimate(true)} />

      <div className="circle-container">
        <div className="centeredArrows">
          <img className="arrow4" src={arrow4} alt="arrow4"></img>
        </div>
        <div className="centeredDiv">
          <img src={dinner} alt="dinner"></img>
          <p className="text-center">19:30</p>
        </div>
        <div className="centeredArrows">
          <img className="arrow5" src={arrow5} alt="arrow5"></img>
        </div>
        <div className="centeredDiv">
          <img src={music} alt="music"></img>
          <p className="text-center">22:00</p>
        </div>
        <div className="centeredArrows">
          <img className="arrow1" src={arrow1} alt="arrow1"></img>
        </div>
        <div className="centeredDiv">
          <img src={cake} alt="cake"></img>
          <p className="text-center">24:00</p>
        </div>
        <div className="centeredArrows">
          {/* loop arrow */}
          {/*    <img className="arrow2" src={arrow2} alt="arrow2"></img> */}
        </div>
        <div className="centeredDiv">
          <img src={rings} alt="rings"></img>
          <p className="text-center">15:30</p>
        </div>
        <div className="centeredArrows">
          <img className="arrow3" src={arrow3} alt="arrow3"></img>
        </div>
        <div className="centeredDiv">
          <img src={drink} alt="drink"></img>
          <p className="text-center">16:30</p>
        </div>
      </div>
    </div>
  );
}
