import cake from "../../assets/pics/timeline/cake.png";
import camera from "../../assets/pics/timeline/camera.png";
import car from "../../assets/pics/timeline/car.png";
import cheers from "../../assets/pics/timeline/cheers.png";
import church from "../../assets/pics/timeline/church.png";
import dish from "../../assets/pics/timeline/dish.png";
import flowers from "../../assets/pics/timeline/flowers.png";

export default function Timeline() {
  return (
    <div
      className="min-h-screen bg-myBlue-bgLight text-slate-70 italic pt-20"
      id="timeline"
    >
      <div className="text-center chopin text-6xl italic">Programma</div>
      <div className="flex flex-col items-center pt-12 gap-12 text-center">
        <div div className="grid grid-cols-1 md:grid-cols-4 gap-12 ">
          <div className="justify-self-center flex flex-col gap-3">
            <img src={church} alt="church " className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Cerimonia</p>
          </div>
          <div className="justify-self-center flex flex-col gap-3">
            <img src={camera} alt="camera" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Servizio</p>
          </div>
          <div className="justify-self-center flex flex-col gap-3">
            <img src={dish} alt="dish" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Cena</p>
          </div>
          <div className="justify-self-center flex flex-col gap-3">
            <img src={flowers} alt="flowers" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Lancio</p>
          </div>
        </div>
        <div div className="grid grid-cols-1 md:grid-cols-3 gap-12 pb-12">
          <div className="justify-self-center flex flex-col gap-3">
            <img src={cake} alt="cake" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Taglio</p>
          </div>
          <div className="justify-self-center flex flex-col gap-3">
            <img src={cheers} alt="cheers" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Brindisi</p>
          </div>
          <div className="justify-self-center flex flex-col gap-3">
            <img src={car} alt="car" className="h-40" />
            <p>12:00</p>
            <p className="text-2xl">Viaggio</p>
          </div>
        </div>
      </div>
    </div>
  );
}
