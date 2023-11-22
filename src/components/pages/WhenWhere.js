import church from "../../assets/pics/backgrounds/bg-church.jpg";
import castle from "../../assets/pics/backgrounds/bg-castle.jpg";

export default function WhenWhere() {
  return (
    <div className="bg-myBlue-bgLight text-slate-70 py-20" id="where/when">
      <div className="text-center alex text-6xl italic">Dove & Quando</div>
      <div className="flex justify-center pt-12">
        <div className="flex gap-7 w-full justify-center flex-col lg:flex-row items-center">
          <div className="lg:w-5/12 md:w-10/12 w-11/12">
            <img src={church} alt="church" className="w-full"></img>
            <div className="flex flex-col justify-center text-center items-center gap-6 bg-white p-9">
              <p className="italic text-slate-700">LA CERIMONIA</p>
              <p>
                La chiesa di Santa Maria della Pietà è un luogo di culto
                cattolico barocco di Palermo è opera dell'architetto Giacomo
                Amato. La facciata, è composta da due ordini di colonne
                intramezzate da diverse statue, rappresentanti Santi o Beati
                domenicani secondo uno schema compositivo certamente influenzato
                dagli edifici religiosi di stile barocco a Roma.
              </p>
              <p className="italic text-slate-700">
                Venerdì 5/07/2024 - 15.30 PM - Chiesa di Santa Maria della
                Pietà, Piazzetta della Pietà SNC, 90133 Palermo
              </p>
              <div className="flex gap-5">
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://it.wikipedia.org/wiki/Chiesa_di_Santa_Maria_della_Piet%C3%A0_(Palermo)"
                >
                  Info
                </a>
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://www.google.it/maps/dir//Chiesa+Santa+Maria+Della+Piet%C3%A0,+Piazzetta+della+Piet%C3%A0,+Palermo,+PA/@38.1174972,13.3716383,202m/data=!3m1!1e3!4m9!4m8!1m0!1m5!1m1!1s0x1319e52ede184e8b:0x58413da94c6faeb6!2m2!1d13.3721157!2d38.1169877!3e0"
                >
                  Indicazioni stradali
                </a>
              </div>
            </div>
          </div>
          <div className="lg:w-5/12 md:w-10/12 w-11/12">
            <img src={castle} alt="castle" className="w-full"></img>

            <div className="flex flex-col justify-center items-center text-center gap-6 bg-white p-9">
              <p className="italic text-slate-700">IL RICEVIMENTO</p>
              <p>
                Il Castello di San Nicola L’Arena fu edificato nel XIV secolo,
                attorno alla preesistente torre d’avvistamento di epoca
                normanna. Anch'esso, come tutti i castelli della costa
                siciliana, ebbe lo scopo di proteggere quel tratto di mare dalle
                aggressioni dei pirati turchi e saraceni che, in quei tempi,
                avevano preso di mira le spiagge siciliane più ricche di pesca.
              </p>
              <p className="italic text-slate-700">
                Venerdì 5/07/2024 - 15.30 PM - Chiesa di Santa Maria della
                Pietà, Piazzetta della Pietà SNC, 90133 Palermo
              </p>
              <div className="flex gap-5">
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="http://www.castellodisannicola.it/"
                >
                  Info
                </a>
                <a
                  className="bg-myBlue-bgDark p-1 px-4"
                  href="https://www.google.it/maps/dir//Castello+San+Nicola,+l'Arena,+San+Nicola+l'Arena+PA/@38.0155572,13.6137298,17z/data=!4m9!4m8!1m0!1m5!1m1!1s0x1317575d277f63b1:0xe4f4db2eebe2264e!2m2!1d13.6158976!2d38.0155676!3e0"
                >
                  Indicazioni stradali
                </a>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
