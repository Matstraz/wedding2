import { useState } from "react";
import { Waypoint } from "react-waypoint";
import styles from "../../utils/Animations";
import { css } from "aphrodite";
import DesktopVersion from "./DesktopVersion";
import MobileVersion from "./MobileVersion";

export default function Timeline({ refTimeline }) {
  const [animate, setAnimate] = useState(false);

  return (
    <div
      className="bg-myBlue-bgLight pt-20 pb-10 lg:pb-20"
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
      <DesktopVersion animate={animate} setAnimate={setAnimate} />
      <MobileVersion animate={animate} setAnimate={setAnimate} />
    </div>
  );
}
