import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Acceuil from "./components/Acceuil";
import Page1 from "./components/Page1";
import Page2 from "./components/Page2";
import Page3 from "./components/Page3";
import NosMeubles from "./components/NosMeubles";
import MeubleDetails from "./components/MeubleDetails";
import Contact from "./components/Contact";
import PromotionImmobiliere from "./components/PromotionImmobiliere";
import Annonces from "./components/Annonces";


function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Acceuil />} />
        <Route path="/page1" element={<Page1 />} />
        <Route path="/page2" element={<Page2 />} />
        <Route path="/page3" element={<Page3 />} />
        <Route path="/meuble/:id" element={<MeubleDetails />} />
        <Route path="/nos-meubles" element={<NosMeubles />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/promotion-immobiliere" element={<PromotionImmobiliere/>} />
        <Route path="/annonces" element={<Annonces/>} />

      </Routes>
    </Router>
  );
}

export default App;