import foto1 from "../../../assets/pics/bride-groom/foto1.png";
import foto2 from "../../../assets/pics/bride-groom/foto2.png";

export default function BrideGroom() {
  return (
    <div
      className="min-h-screen bg-myBlue-bgLight text-slate-70 italic"
      id="main"
    >
      <p className="text-center pt-20 chopin text-6xl" id="newlyweds">
        Gli Sposi
      </p>
      <div className="flex flex-col md:flex-row justify-center items-center py-16 md:gap-16 gap-8 px-2">
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto1} className="w-56 md:w-72" alt="foto sposo" />
          <p>Matteo</p>
        </div>
        <p className="text-4xl sm:text-6xl lg:text-6xl chopin">&</p>
        <div className="flex flex-col justify-center items-center gap-5">
          <img src={foto2} className="w-56 md:w-72" alt="foto sposa" />
          <p>Alessandra</p>
        </div>
      </div>
      <div className="text-center chopin text-5xl">Lorem, ipsum dolor. </div>
      <div className="text-center text-base py-5 pb-20">
        5 Luglio, 2024 - Palermo
      </div>
    </div>
  );
}
