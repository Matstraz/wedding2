import { css } from "aphrodite";
import Snowfall from "react-snowfall";
import styles from "../utils/Animations";
import icons from "../utils/Icons";
import petal1 from "../../assets/pics/homepage/foglie/petal.png";
import leaf1 from "../../assets/pics/homepage/foglie/leaf.png";

export default function Homepage({ refHome, refBrideGroom }) {
  const petals1 = document.createElement("img");
  petals1.src = petal1;
  const leaves1 = document.createElement("img");
  leaves1.src = leaf1;

  const images = [leaves1, petals1, petals1];

  /* scroll to bride/groom */
  function navToBrideGroom() {
    refBrideGroom.current?.scrollIntoView({ behavior: "smooth" });
  }

  return (
    <div
      className="backHome h-screen flex justify-center items-center text-center text-white relative"
      id="home"
      ref={refHome}
    >
      <div className="flex flex-col gap-10">
        <Snowfall
          /*    color="grey" */
          snowflakeCount={[40]}
          images={images}
          radius={[16.0, 20.0]}
          speed={[1.0, 2.0]}
          wind={[-0.5, 2.0]}
        />
        {/* Add next rows to switch to a backgroundless landing page */}
        {/*    <p className="alex borded text-6xl p-5 md:p-0">Alessandra & Matteo</p>
        <p className="borded text-3xl italic">15.06.2024</p> */}
      </div>
      <div
        className={`${css(
          styles.infiniteBounce
        )} text-black absolute bottom-16 md:bottom-0 lg:bottom-10 bottom italic borded hover:cursor-pointer`}
        onClick={navToBrideGroom}
      >
        <p>Entra</p>
        <p>{icons.scroll}</p>
      </div>
    </div>
  );
}
