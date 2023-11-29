import drink from "../../assets/pics/timeline/drink.png";
import cake from "../../assets/pics/timeline/cake.png";
import music from "../../assets/pics/timeline/music.png";
import rings from "../../assets/pics/timeline/rings.png";
import dinner from "../../assets/pics/timeline/dinner.png";
import arrow1 from "../../assets/pics/timeline/arrows/arrow1.png";
import arrow2 from "../../assets/pics/timeline/arrows/arrow2.png";
import arrow3 from "../../assets/pics/timeline/arrows/arrow3.png";
import arrow4 from "../../assets/pics/timeline/arrows/arrow4.png";
import arrow5 from "../../assets/pics/timeline/arrows/arrow5.png";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";
import { css } from "aphrodite";

export default function Timeline({ refTimeline }) {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="bg-myBlue-bgLight pt-20 pb-10"
      id="timeline"
      ref={refTimeline}
    >
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic`
            : "invisible"
        }
      >
        Il Programma
      </div>
      <div
        className={
          animate
            ? `${css(styles.fadeIn)} py-24 flex justify-center items-center`
            : "invisible"
        }
      >
        <div className="circle-container">
          <div className="centeredArrows">
            <img className="arrow4" src={arrow4} alt="arrow4"></img>
          </div>
          <div className="centeredDiv">
            <img src={dinner} alt="dinner"></img>
            <p className="text-center">12:00</p>
          </div>
          <div className="centeredArrows">
            <img className="arrow5" src={arrow5} alt="arrow5"></img>
          </div>
          <div className="centeredDiv">
            <img src={music} alt="music"></img>
            <p className="text-center">12:00</p>
          </div>
          <div className="centeredArrows">
            <img className="arrow1" src={arrow1} alt="arrow1"></img>
          </div>
          <div className="centeredDiv">
            <img src={cake} alt="cake"></img>
            <p className="text-center">12:00</p>
          </div>
          <div className="centeredArrows">
            <img className="arrow2" src={arrow2} alt="arrow2"></img>
          </div>
          <div className="centeredDiv">
            <img src={rings} alt="rings"></img>
            <p className="text-center">12:00</p>
          </div>
          <div className="centeredArrows">
            <img className="arrow3" src={arrow3} alt="arrow3"></img>
          </div>
          <div className="centeredDiv">
            <img src={drink} alt="drink"></img>
            <p className="text-center">12:00</p>
          </div>
        </div>
      </div>
    </div>
  );
}
