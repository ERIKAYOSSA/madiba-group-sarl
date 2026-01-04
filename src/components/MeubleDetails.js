import React from "react";
import { useParams, Link } from "react-router-dom";

function MeubleDetails() {
  const { id } = useParams();

  const meubles = [
    { id: 0, title: "Appartement meublé", location: "Bonamoussadi", description: "80 m², 2 lits, 1 douche..." },
    { id: 1, title: "Studio moderne", location: "Akwa", description: "45 m², 1 lit, 1 douche..." },
    // ajoute tes autres meubles ici
  ];

  const meuble = meubles.find((m) => m.id === parseInt(id));

  if (!meuble) return <p>Meuble introuvable</p>;

  return (
    <div style={{ padding: "20px" }}>
      <h1>{meuble.title}</h1>
      <h4>{meuble.location}</h4>
      <p>{meuble.description}</p>

      {/* Bouton retour */}
      <Link to="/nos-meubles" style={{ color: "darkblue", fontWeight: "bold" }}>
        ← Retour à la liste des meublés
      </Link>
    </div>
  );
}

export default MeubleDetails;