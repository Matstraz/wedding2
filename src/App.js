import { useRef } from "react";
import BrideGroom from "./components/pages/brideGroom/BrideGroom";
import Navbar from "./components/pages/brideGroom/Navbar";
import Footer from "./components/pages/Footer";
import Homepage from "./components/pages/Homepage";
import MyTimer from "./components/pages/MyTimer";
import Timeline from "./components/pages/Timeline";
import WhenWhere from "./components/pages/WhenWhere";

import Witnesses from "./components/pages/Witnesses";

function App() {
  /* scroll to pages */
  const refBrideGroom = useRef(null);
  const refWhenWhere = useRef(null);
  const refWitnesses = useRef(null);
  const refTimeline = useRef(null);
  const refHome = useRef(null);
  return (
    <div className="relative text-slate-500">
      <Homepage refHome={refHome} refBrideGroom={refBrideGroom} />
      <Navbar
        refBrideGroom={refBrideGroom}
        refWhenWhere={refWhenWhere}
        refWitnesses={refWitnesses}
        refTimeline={refTimeline}
        refHome={refHome}
      />
      <BrideGroom refBrideGroom={refBrideGroom} />
      <MyTimer />
      <WhenWhere refWhenWhere={refWhenWhere} />
      <Witnesses refWitnesses={refWitnesses} />
      <Timeline refTimeline={refTimeline} />
      <Footer />
    </div>
  );
}

export default App;
