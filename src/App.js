import BrideGroom from "./components/pages/brideGroom/BrideGroom";
import Navbar from "./components/pages/brideGroom/Navbar";
import Footer from "./components/pages/Footer";
import Homepage from "./components/pages/Homepage";
import MyTimer from "./components/pages/MyTimer";
import Timeline from "./components/pages/Timeline";
import WhenWhere from "./components/pages/WhenWhere";

import Witnesses from "./components/pages/Witnesses";

function App() {
  return (
    <div className="relative text-slate-500">
      <Homepage />
      <Navbar />
      <BrideGroom />
      <MyTimer />
      <WhenWhere />
      <Witnesses />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
