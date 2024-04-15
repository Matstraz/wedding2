import { css } from "aphrodite";
import { useState } from "react";
import { Waypoint } from "react-waypoint";
import styles from "../utils/Animations";
import google from "../../assets/pics/photos/google-play.png";
import apple from "../../assets/pics/photos/app-store.png";
import IG from "../../assets/pics/photos/IG.png";
import FB from "../../assets/pics/photos/FB.png";

export default function Photos({ refPhotos }) {
  const [animate, setAnimate] = useState(false);
  const [animate2, setAnimate2] = useState(false);
  return (
    <div
      className="bg-myBlue-bgDark py-20 flex flex-col items-center"
      ref={refPhotos}
    >
      <Waypoint onEnter={() => setAnimate(true)} />
      <div
        className={
          animate ? `${css(styles.fadeIn)} alex text-6xl italic` : "invisible"
        }
      >
        Le Foto
      </div>

      <Waypoint onEnter={() => setAnimate2(true)} />
      <div
        className={
          animate2
            ? `${css(
                styles.fadeIn
              )} pt-12 flex justify-center items-center text-center w-11/12 px-3 lg:w-2/3`
            : "invisible"
        }
      >
        <div className="flex flex-col gap-8 items-center text-justify">
          <p>
            Ogni momento di un matrimonio è unico e irripetibile e noi non
            vogliamo perdere un solo istante di questa giornata. Per questa
            ragione abbiamo pensato ad un modo semplice e veloce per permettervi
            di condividere con noi i video e le foto che scatterete.
            <br />
            <br className="md:hidden" />
            Scaricate l'app "WedShoots" per inviare tutte le foto e i video che
            farete quel giorno. In questo modo ricostruiremo insieme a voi ogni
            momento della giornata.
          </p>
          <div className="flex md:gap-8 gap-6 items-center justify-center py-1">
            <a href="https://play.google.com/store/apps/details?id=net.bodas.android.wedshoots&hl=it&gl=US">
              <img src={google} alt="google" className="w-32 md:w-40" />
            </a>
            <a href="https://apps.apple.com/it/app/wedshoots/id660256196">
              <img src={apple} alt="apple" className="w-32 md:w-40" />
            </a>
          </div>
          <p>
            Aprite l'applicazione dal vostro smartphone, inserite il vostro nome
            ed il codice dell'album o scannerizzate il QR code che troverete sul
            tavolo durante la cena. In questo modo potrete pubblicare foto nel
            nostro album, creando un ricordo unico e indelebile che custodiremo
            per sempre!
            <br /> <br />
            Codice Album: IT8ccd73f3
          </p>
          <p className="w-full">
            Non dimenticate infine di utilizzare l'hashtag&nbsp;
            <span className="font-bold">#alessandraematteo</span>&nbsp; nel
            condividere foto/storie e di taggarci sui nostri profili social.
          </p>
          <div className="flex md:gap-12 gap-6 items-center justify-center pt-2">
            <a href="https://www.instagram.com/alessandra.la.marca?utm_source=qr&igsh=NjJkajB1Mjh6bHp3">
              <img src={IG} alt="google" className="w-14 md:w-16" />
            </a>
            <a href="https://www.facebook.com/alessandra.lamarca.9">
              <img src={FB} alt="apple" className="w-14 md:w-16" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
}
