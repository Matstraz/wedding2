import foto1 from "../../assets/pics/witnesses/foto1.png";
import foto2 from "../../assets/pics/witnesses/foto2.png";

export default function Witnesses() {
  return (
    <div
      className="min-h-screen text-slate-70 pt-20 bg-myBlue-bgDark pb-8"
      id="witnesses"
    >
      <div className="text-center alex text-6xl italic">
        I Testimoni dello Sposo
      </div>
      <div className="pt-8 flex flex-col md:flex-row gap-12 justify-center items-center italic px-2">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto1} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 3</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto1} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 3</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto1} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 3</p>
        </div>
      </div>
      <div className="text-center alex text-6xl italic pt-16">
        I Testimoni della Sposa
      </div>
      <div className="py-8 flex flex-col md:flex-row gap-12 justify-center items-center italic px-2">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto2} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 1</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto2} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 2</p>
        </div>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto2} className="w-48 md:w-64" alt="foto sposo" />
          <p>Testimone 3</p>
        </div>
      </div>
    </div>
  );
}
