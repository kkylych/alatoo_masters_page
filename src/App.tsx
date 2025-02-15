import "./App.css";
import Navbar from "./components/Navbar";
import Sidebar from "./components/Sidebar";
import Masters from "./pages/Masters";
import MastersInfo from "./pages/MastersInfo";

function App() {
  return (
    <div className="w-full h-full bg-[#f2f2f2]">
      <Navbar />
      <Masters />
      <MastersInfo />
      
    </div>
  );
}

export default App;
