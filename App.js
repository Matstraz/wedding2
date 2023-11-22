import BrideGroom from "./components/pages/brideGroom/BrideGroom";
import Navbar from "./components/pages/brideGroom/Navbar";
import Footer from "./components/pages/Footer";
import Homepage from "./components/pages/Homepage";
import Timeline from "./components/pages/Timeline";
import WhenWhere from "./components/pages/whenWhere/WhenWhere";
import Witnesses from "./components/pages/Witnesses";

function App() {
  return (
    <div className="relative">
      <Homepage />
      <Navbar />
      <BrideGroom />
      <Witnesses />
      <WhenWhere />
      <Timeline />
      <Footer />
    </div>
  );
}

export default App;
