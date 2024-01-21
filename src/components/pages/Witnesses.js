import { css } from "aphrodite";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";

export default function Witnesses({ refWitnesses }) {
  const [animate, setAnimate] = useState(false);

  const witnesses = [
    [
      "Roberto",
      "Amico di lunga data dello sposo, sono cresciuti insieme e non si sono mai persi di vista nonostante la distanza. Con gli anni, da amici sono diventati fratelli.",
    ],
    [
      "Giusy 1",
      "eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
    ],
    [
      "Enrico",
      "Da un'amicizia nata fra i banchi universitari, lui e lo sposo sono diventati l'uno il testimone dell'altro, rafforzando sempre più il legame che continuerà a tenerli uniti.",
    ],
    [
      "Giusy 2",
      "lias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum v",
    ],
    [
      "Antonino",
      "Amico, compare, fratello dello sposo. La loro amicizia, iniziata da una passione in comune, è cresciuta fino a farli diventare vicendevolmente testimoni e compari.",
    ],
    [
      "Giusy 3",
      "As a developer lorem ipsum is a dummy text to write a long textthat you don't want to write",
    ],
  ];
  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 1,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 1,
    },
    tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 1,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };
  return (
    <div
      className="bg-myBlue-bgDark py-20 bg-witnesses"
      id="witnesses"
      ref={refWitnesses}
    >
      <Waypoint onEnter={() => setAnimate(true)} />
      <p
        className={
          animate
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic `
            : "invisible"
        }
      >
        I&nbsp; Testimoni
      </p>
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3600}
          keyBoardControl={true}
          customTransition="all .6s linear"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlay={true}
        >
          {witnesses.map((el, index) => (
            <div
              className="flex flex-col justify-center items-center md:px-40 lg:px-80 2xl:px-96 px-10 py-12 gap-4"
              key={el + index}
            >
              <p className="text-center italic">{el[1]}</p>

              <p className="text-slate-600 text-lg">{el[0]}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
