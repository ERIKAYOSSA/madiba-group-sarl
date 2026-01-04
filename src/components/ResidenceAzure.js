
import React from "react";
import { Link } from "react-router-dom";

function Page1() {
  return (
    <div style={{ padding: "20px" }}>
      <h1>Résidence Azure</h1>
      <p>Détails complets sur la Résidence Azure.</p>
      <Link to="/" style={{ color: "#25D366", fontWeight: "bold" }}>
        ← Retour à la liste
      </Link>
    </div>
  );
}

export default Page1;