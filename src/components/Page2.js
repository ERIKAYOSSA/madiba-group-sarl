import React from "react";
import { Link } from "react-router-dom";

function Page3() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Immeuble Horizon</h1>
      <p>Détails complets sur l’Immeuble Horizon.</p>
      <Link to="/" style={{ color: "#25D366", fontWeight: "bold" }}>
        ← Retour à la liste
      </Link>
    </div>
  );
}

export default Page3;