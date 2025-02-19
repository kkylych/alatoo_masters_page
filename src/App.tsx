import { Route, Routes } from "react-router-dom";
import "./App.css";
import Masters from "./pages/Masters";
import ComputerScience from "./pages/ComputerScience";
import Economics from "./pages/Economics";
import InternationalRelations from "./pages/InternationalRelations";
import Management from "./pages/Management";
import Law from "./pages/Law";
import Pedagogy from "./pages/Pedagogy";
import Journalism from "./pages/Journalism";
import Psychology from "./pages/Psychology";
import Linguistics from "./pages/Linguistics";
import Philology from "./pages/Philology";
import Layout from "./pages/Layout";
import MastersLayout from "./pages/MastersLayout";
import ScrollToTop from "./hooks/ScrollToTop";

function App() {
  return (
    <div className="w-full h-full bg-[var(--background-color)]">
      <ScrollToTop />
      <Routes>
        <Route element={<Layout />}>
          <Route path="/" element={<h1>Home Page</h1>} />
          <Route path="/about" element={<h1>About Us Page</h1>} />
          <Route path="/phd" element={<h1>PhD Page</h1>} />
          <Route path="/aspirantura" element={<h1>Aspirantura Page</h1>} />
          <Route path="/publications" element={<h1>Publications Page</h1>} />
          <Route path="/admissions" element={<h1>Admissions Page</h1>} />

          <Route path="/masters" element={<MastersLayout />}>
            <Route index element={<Masters />} />
            <Route path="computer-science" element={<ComputerScience />} />
            <Route path="economics" element={<Economics />} />
            <Route
              path="international-relations"
              element={<InternationalRelations />}
            />
            <Route path="management" element={<Management />} />
            <Route path="law" element={<Law />} />
            <Route path="pedagogy" element={<Pedagogy />} />
            <Route path="journalism" element={<Journalism />} />
            <Route path="psychology" element={<Psychology />} />
            <Route path="linguistics" element={<Linguistics />} />
            <Route path="philology" element={<Philology />} />
          </Route>
        </Route>
      </Routes>
    </div>
  );
}

export default App;
