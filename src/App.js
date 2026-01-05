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
import NosProprietes from "./components/NosProprietes";
import MesFavoris from "./components/MesFavoris"; // ✅ nouvelle page
import GestionLocative from "./components/GestionLocative";

import React, { useState } from "react";
import image2 from "./image2.jpg";
import image3 from "./image3.jpg";
import image4 from "./image4.jpg";

function App() {
  // ✅ Données centralisées
  const properties = [
    {
      id: 1,
      title: "Villa 4 chambres – Bonapriso",
      price: 120000000,
      type: "villa",
      location: "douala",
      image: image2,
      badge: "Promo",
      badgeClass: "badge-promo",
    },
    {
      id: 2,
      title: "Appartement moderne – Akwa",
      price: 65000000,
      type: "appartement",
      location: "douala",
      image: image3,
      badge: "Nouveau",
      badgeClass: "badge-new",
    },
    {
      id: 3,
      title: "Terrain 1000m² – Kribi",
      price: 45000000,
      type: "terrain",
      location: "kribi",
      image: image4,
      badge: "Exclusif",
      badgeClass: "badge-exclusive",
    },
  ];

  // ✅ État des favoris
  const [favorites, setFavorites] = useState([]);

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
        <Route path="/promotion-immobiliere" element={<PromotionImmobiliere />} />
        <Route path="/annonces" element={<Annonces />} />
        <Route path="/gestion-locative" element={<GestionLocative />} />

        {/* ✅ Nos Propriétés avec favoris */}
        <Route
          path="/nos-proprietes"
          element={
            <NosProprietes
              properties={properties}
              favorites={favorites}
              setFavorites={setFavorites}
            />
          }
        />

        {/* ✅ Nouvelle page Mes Favoris */}
        <Route
          path="/mes-favoris"
          element={<MesFavoris favorites={favorites} properties={properties} />}
        />
      </Routes>
    </Router>
  );
}

export default App;