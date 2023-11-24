import { css } from "aphrodite";
import { useState } from "react";
import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";

export default function Witnesses() {
  const [animate, setAnimate] = useState(false);

  const witnesses = [
    [
      "Mario",
      "Lorem ipsum dolor sit amet consectetur adipisicing elit. Maxime mollitia molestiae quas vel sint commodi repudiandae consequuntur",
    ],
    [
      "Michele",
      "eaque rerum! Provident similique accusantium nemo autem. Veritatis obcaecati tenetur iure eius earum ut molestias architecto voluptate aliquam",
    ],
    [
      "Giovanni",
      " harum nesciunt ipsum debitis quas aliquid. Reprehenderit,quia. Quo neque error repudiandae fuga? Ipsa laudantium molestias eos sapiente officiis modi at sunt ",
    ],
    [
      "Fabio",
      "lias error harum maxime adipisci amet laborum. Perspiciatis minima nesciunt dolorem! Officiis iure rerum v",
    ],
    [
      "Luigi",
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
    <div className="bg-myBlue-bgDark py-14 bg-witnesses" id="witnesses">
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate
            ? `${css(styles.fadeIn)} text-center alex text-6xl italic `
            : "hidden"
        }
      >
        I Testimoni
      </div>
      <div>
        <Carousel
          swipeable={true}
          draggable={true}
          showDots={true}
          responsive={responsive}
          ssr={true} // means to render carousel on server-side.
          infinite={true}
          autoPlaySpeed={3000}
          keyBoardControl={true}
          customTransition="all .6s linear"
          transitionDuration={500}
          removeArrowOnDeviceType={["tablet", "mobile", "desktop"]}
          autoPlay={true}
        >
          {witnesses.map((el, index) => (
            <div className="flex flex-col justify-center items-center md:px-40 lg:px-80 2xl:px-96 px-10 py-12 gap-4">
              <p className="text-center italic" key={index}>
                {el[1]}
              </p>

              <p>{el[0]}</p>
            </div>
          ))}
        </Carousel>
      </div>
    </div>
  );
}
