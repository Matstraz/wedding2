import Carousel from "react-multi-carousel";
import "react-multi-carousel/lib/styles.css";
import castel1 from "../../../assets/pics/castle carousel/1.jpg";
import castel2 from "../../../assets/pics/castle carousel/2.jpg";
import castel3 from "../../../assets/pics/castle carousel/3.jpg";
import castel4 from "../../../assets/pics/castle carousel/4.jpg";
import castel5 from "../../../assets/pics/castle carousel/5.jpg";
import castel6 from "../../../assets/pics/castle carousel/6.jpg";

export default function Castle() {
  const churchPics = [castel1, castel2, castel3, castel4, castel5, castel6];
  const responsive = {
    LargeDesktop: {
      breakpoint: { max: 4000, min: 3001 },
      items: 5,
    },
    desktop: {
      breakpoint: { max: 3000, min: 1025 },
      items: 4,
    },
    tablet: {
      breakpoint: { max: 1024, min: 501 },
      items: 2,
    },
    mobile: {
      breakpoint: { max: 500, min: 0 },
      items: 1,
    },
  };

  return (
    <div id="castle" className="bg-castle py-28">
      <div className="bg-myBlue-bgDark flex flex-col justify-center gap-8 bg-opacity-80">
        <div className="text-center chopin text-6xl italic pt-8">
          Il Ricevimento
        </div>
        <Carousel
          responsive={responsive}
          centerMode={true}
          autoPlay={true}
          autoPlaySpeed={3700}
          infinite={true}
          className=""
        >
          {churchPics.map((el, index) => (
            <img
              key={el + index}
              src={el}
              alt={el}
              className="w-max h-40 md:h-64 px-1"
            ></img>
          ))}
        </Carousel>
        <div className="flex justify-center">
          <p className="italic text-center bg-myBlue-bgLight w-3/4 lg:w-1/3 bg-opacity-90 p-3 rounded-md">
            Venerdì 5/07/2024 - Ore 19:30 <br />
            Castello di San Nicola L'Arena <br />
            San Nicola l'Arena, Palermo
          </p>
        </div>
        <div className="flex justify-center items-center gap-5 py-3">
          <a
            className="bg-myBlue-bgLight p-1 px-4 rounded-md border-2 border-myBlue-main bg-opacity-90"
            href="http://www.castellodisannicola.it/"
          >
            Info
          </a>
          <a
            className="bg-myBlue-bgLight p-1 px-4 rounded-md border-2 border-myBlue-main bg-opacity-90"
            href="https://www.google.it/maps/dir//Castello+San+Nicola,+l'Arena,+San+Nicola+l'Arena+PA/@38.0155572,13.6137298,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1317575d277f63b1:0xe4f4db2eebe2264e!2m2!1d13.6158976!2d38.0155676!3e0"
          >
            Indicazioni stradali
          </a>
        </div>
      </div>
    </div>
  );
}
