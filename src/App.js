import { useRef } from "react";
import BrideGroom from "./components/pages/brideGroom/BrideGroom";
import Navbar from "./components/pages/brideGroom/Navbar";
import Footer from "./components/pages/Footer";
import Homepage from "./components/pages/Homepage";
import MyTimer from "./components/pages/MyTimer";
import Timeline from "./components/pages/timeline/Timeline";
import WhenWhere from "./components/pages/WhenWhere";

import Witnesses from "./components/pages/Witnesses";
import Iban from "./components/pages/Iban";
import Photos from "./components/pages/Photos";

function App() {
  /* scroll to pages */
  const refBrideGroom = useRef(null);
  const refWhenWhere = useRef(null);
  const refWitnesses = useRef(null);
  const refTimeline = useRef(null);
  const refHome = useRef(null);
  const refPhotos = useRef(null);

  return (
    <div className="relative text-myBlue-mainText">
      <Homepage refHome={refHome} refBrideGroom={refBrideGroom} />
      <Navbar
        refBrideGroom={refBrideGroom}
        refWhenWhere={refWhenWhere}
        refWitnesses={refWitnesses}
        refTimeline={refTimeline}
        refHome={refHome}
        refPhotos={refPhotos}
      />
      <BrideGroom refBrideGroom={refBrideGroom} />
      <MyTimer />
      <WhenWhere refWhenWhere={refWhenWhere} />
      <Witnesses refWitnesses={refWitnesses} />
      <Timeline refTimeline={refTimeline} />
      <Photos refPhotos={refPhotos} />
      <Iban refHome={refHome} />
      <Footer />
    </div>
  );
}

export default App;
