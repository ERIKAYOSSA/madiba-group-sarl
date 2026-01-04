import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import { Navbar, Nav, Form, Spinner, Modal, Toast, ToastContainer, Container, Row, Col, Card, Button } from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import logo from "../logomadiba.jpg";
import headerBg from "../header-bg.jpg";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import { BrowserRouter as Router, Routes, Route, Link } from "react-router-dom";
import Page1 from "../components/Page1";
import Page2 from "../components/Page2";
import Page3 from "../components/Page3";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingListings, setLoadingListings] = useState(true);
  const [navbarOpaque, setNavbarOpaque] = useState(false);
  const [showModal, setShowModal] = useState(false);

  const [showReservation, setShowReservation] = useState(false);
  const [selectedMeuble, setSelectedMeuble] = useState(null);
  const [showToast, setShowToast] = useState(false); // ✅ ajouté

  const [formData, setFormData] = useState({
    date: "",
    heure: "",
    duree: "",
    personnes: "",
    nom: "",
    telephone: "",
    email: "",
  });

  const properties = [
    { type: "Maison", title: "Résidence Azure", location: "Abidjan Yapo", size: "140 m²", price: "105,000 €", img: image1 },
    { type: "Appartement", title: "Maison Confort", location: "Marcory", size: "85 m²", price: "85,000 €", img: image2 },
    { type: "Immeuble", title: "Immeuble Horizon", location: "Treichville", size: "220 m²", price: "260,000 €", img: image3 },
    { type: "Villa", title: "Villa Prestige", location: "Bonapriso", size: "300 m²", price: "450,000 €", img: image1 },
    { type: "Appartement", title: "Appartement Luxe", location: "Douala Akwa", size: "120 m²", price: "150,000 €", img: image2 },
  ];

  const meubles = [
    {
      id: 0,
      title: "Appartement meublé",
      img: "/images/meuble1.jpeg",
      size: "80 m²",
      beds: 2,
      baths: 1,
      living: 1,
      balcony: true,
      kitchen: "Oui",
      location: "Bonamoussadi",
      price: "40 € / nuit",
    },
    {
      id: 1,
      title: "Studio moderne",
      img: "/images/meuble2.jpeg",
      size: "45 m²",
      beds: 1,
      baths: 1,
      living: 0,
      balcony: false,
      kitchen: "Oui",
      location: "Akwa",
      price: "25 € / nuit",
    },
    {
      id: 2,
      title: "Duplex chic",
      img: "/images/meuble3.jpeg",
      size: "120 m²",
      beds: 3,
      baths: 2,
      living: 1,
      balcony: true,
      kitchen: "Oui",
      location: "Bonapriso",
      price: "70 € / nuit",
    },
  ];

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleConfirm = () => {
    const { date, heure, duree, personnes, nom, telephone, email } = formData;
    if (!date || !heure || !duree || !personnes || !nom || !telephone || !email) {
      alert("Veuillez remplir tous les champs avant de confirmer.");
      return;
    }
    setShowReservation(false);
    setShowToast(true); // ✅ affiche le toast
    setFormData({
      date: "",
      heure: "",
      duree: "",
      personnes: "",
      nom: "",
      telephone: "",
      email: "",
    });
  };

  const themeColors = {
    background: darkMode ? "#0A1F44" : "#ffffff",
    text: darkMode ? "#ffffff" : "#0A1F44",
    accent: "#FFB400",
  };

  const toggleTheme = () => {
    setLoading(true);
    setTimeout(() => {
      setDarkMode(!darkMode);
      setLoading(false);
    }, 600);
  };

  useEffect(() => {
    setTimeout(() => {
      setLoadingListings(false);
    }, 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => {
      setNavbarOpaque(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className="theme-transition" style={{ backgroundColor: themeColors.background, color: themeColors.text }}>
      {loading && (
        <div className="loader-overlay">
          <Spinner animation="border" variant="light" />
        </div>
      )}

      {/* HEADER */}
      <Navbar expand="lg" fixed="top" className={`px-4 ${navbarOpaque ? "navbar-opaque" : "navbar-transparent"}`}>
        <Navbar.Brand href="#">
          <img src={logo} alt="MADIBA GROUP" height="50" />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" style={{ backgroundColor: themeColors.accent }} />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="ms-auto align-items-center">
            <Nav.Link href="#home" className="active">Accueil</Nav.Link>
            <Nav.Link href="#listings">Biens</Nav.Link>
            <Button className="ms-3 btn-animated" style={{ backgroundColor: themeColors.accent, border: "none", color: themeColors.background }}>
              Se connecter
            </Button>
            <Form.Check 
              type="switch"
              id="theme-switch"
              label={darkMode ? "🌙" : "☀️"}
              checked={darkMode}
              onChange={toggleTheme}
              className="ms-3"
              style={{ color: themeColors.text }}
            />
          </Nav>
        </Navbar.Collapse>
      </Navbar>

      {/* HERO */}
<div id="home" 
  className="text-center d-flex align-items-center justify-content-center"
  style={{
    backgroundImage: `url(${headerBg})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    backgroundColor: "rgba(10,31,68,0.3)",
    backgroundBlendMode: "multiply",
    color: "#ffffff",
    minHeight: "70vh",
  }}
>
  <Container>
    <h1 className="fw-bold mb-4 animate__animated animate__fadeInDown">
      TROUVER UN BIEN IMMOBILIER
    </h1>

    {/* Barre de recherche avec icônes */}
<div
  className="p-4 rounded animate__animated animate__fadeInUp"
  style={{
    backgroundColor: "rgba(255,255,255,0.2)",
    backdropFilter: "blur(6px)",
    width: "90%",
    margin: "0 auto",
  }}
>
  <Form>
    <Row className="g-2">
      {/* Zone recherchée */}
      <Col xs={12} md={4}>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-geo-alt"></i>
          </span>
          <Form.Control type="text" placeholder="Zone recherchée" />
        </div>
      </Col>

      {/* Type de bien */}
      <Col xs={12} md={3}>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-house-door"></i>
          </span>
          <Form.Select>
            <option>Type de bien</option>
            <option>Maison</option>
            <option>Appartement</option>
            <option>Villa</option>
            <option>Terrain</option>
          </Form.Select>
        </div>
      </Col>

      {/* Budget */}
      <Col xs={12} md={3}>
        <div className="input-group">
          <span className="input-group-text">
            <i className="bi bi-cash-stack"></i>
          </span>
          <Form.Control type="number" placeholder="Budget max (€)" />
        </div>
      </Col>

      {/* Bouton rechercher */}
      <Col xs={12} md={2}>
        <Button
          className="btn-animated"
          style={{
            backgroundColor: themeColors.accent,
            border: "none",
            color: themeColors.background,
            width: "100%",
          }}
        >
          Rechercher
        </Button>
      </Col>
    </Row>
  </Form>
</div>
  </Container>
      </div>
      {/* SECTION VIDEO + DESCRIPTION */}
      <Container className="my-5">
        <Row className="align-items-center">
          {/* Vidéo à gauche */}
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <video
              src={require("../vid.MP4")}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "300px", /* 👉 réduit la hauteur */
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
            />
          </Col>
      
          {/* Description à droite */}
          <Col xs={12} md={6}>
            <h2 style={{ color: themeColors.text }} className="fw-bold mb-3">
              Découvrez nos solutions immobilières
            </h2>
            <p style={{ color: themeColors.text }}>
              MADIBA GROUP SARL vous accompagne dans la recherche, l’achat et la location de biens immobiliers
              modernes et adaptés à vos besoins. Grâce à notre expertise et notre plateforme digitale,
              vous pouvez explorer nos offres en toute transparence et programmer une visite en quelques clics.
            </p>
            <Button
              className="btn-animated mt-3"
              style={{ backgroundColor: themeColors.accent, border: "none", color: themeColors.background }}
              href="#listings"
            >
              Voir nos biens
            </Button>
          </Col>
        </Row>
      </Container>

      {/* LISTINGS */}
      <Container id="listings" className="my-5">
        <h2 className="mb-4" style={{ color: themeColors.text }}>Nos biens disponibles</h2>
        {loadingListings ? (
          <Row>
            {[...Array(3)].map((_, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <div className="skeleton skeleton-card"></div>
              </Col>
            ))}
          </Row>
        ) : (
          <Row>
            {properties.map((p, i) => (
              <Col xs={12} sm={6} md={4} key={i}>
                <Card className="mb-4 animate__animated animate__zoomIn"
                  style={{ border: "none", transition: "transform 0.3s ease, box-shadow 0.3s ease" }}
                  onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)"; }}
                  onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; }}>
                  <a href={`/page${i + 1}`} style={{ textDecoration: "none" }}>
                    <Card.Img variant="top" src={p.img} style={{ cursor: "pointer" }} />
                  </a>

                  <Card.Body>
                    <Card.Title style={{ color: themeColors.text }}>{p.title}</Card.Title>
                    <Card.Text style={{ color: themeColors.text }}>
                      <strong>Type :</strong> {p.type}<br />
                      <strong>Superficie :</strong> {p.size}<br />
                      <strong>Localisation :</strong> {p.location}<br />
                      <strong>Prix :</strong> {p.price}
                    </Card.Text>
                    <Button
                      className="btn-animated"
                      style={{ backgroundColor: themeColors.accent, border: "none", color: themeColors.background }}
                      onClick={() => setShowModal(true)}
                    >
                      Programmer une visite
                    </Button>
                  </Card.Body>
                </Card>
              </Col>
            ))}
          </Row>
        )}
      </Container>

      {/* MODAL FORMULAIRE VISITE */}
      <Modal show={showModal} onHide={() => setShowModal(false)} centered>
        <Modal.Header closeButton>
          <Modal.Title>Programmer une visite</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3">
              <Form.Label>Date</Form.Label>
              <Form.Control type="date" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Heure</Form.Label>
              <Form.Control type="time" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Téléphone</Form.Label>
              <Form.Control type="tel" placeholder="Votre numéro" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Email</Form.Label>
              <Form.Control type="email" placeholder="Votre email" required />
            </Form.Group>
            <Form.Group className="mb-3">
              <Form.Label>Message</Form.Label>
              <Form.Control as="textarea" rows={3} placeholder="Votre message" />
            </Form.Group>
            <Button variant="success" type="submit" onClick={() => setShowModal(false)}>
              Envoyer
            </Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* SECTION NOS MEUBLES */}
      <Container id="meubles" className="my-5">
        <h2 className="mb-4" style={{ color: themeColors.text }}>Nos meublés disponibles</h2>
        <Row>
          {meubles.map((m) => (
            <Col xs={12} sm={6} md={4} key={m.id}>
              <Card
                className="mb-4 animate__animated animate__zoomIn"
                style={{
                  border: "2px solid transparent",
                  transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.transform = "scale(1.05)";
                  e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)";
                  e.currentTarget.style.borderColor = "#001f3f";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "scale(1)";
                  e.currentTarget.style.boxShadow = "none";
                  e.currentTarget.style.borderColor = "transparent";
                }}
              >
                <Card.Img
                  variant="top"
                  src={m.img}
                  as={Link}
                  to={`/meuble/${m.id}`}
                  style={{ cursor: "pointer" }}
                />

                <Card.Body>
                  <Card.Title style={{ color: themeColors.text }}>{m.title}</Card.Title>

                  {/* Description en 3 colonnes avec icônes */}
                  <Row style={{ color: themeColors.text }}>
                    <Col xs={4}><i className="bi bi-aspect-ratio"></i> {m.size}</Col>
                    <Col xs={4}><i className="bi bi-bed"></i> {m.beds}</Col>
                    <Col xs={4}><i className="bi bi-droplet"></i> {m.baths}</Col>
                  </Row>
                  <Row style={{ color: themeColors.text }}>
                    <Col xs={4}><i className="bi bi-couch"></i> {m.living}</Col>
                    <Col xs={4}><i className="bi bi-building"></i> {m.balcony ? "Balcon" : "Sans"}</Col>
                    <Col xs={4}><i className="bi bi-cup-hot"></i> {m.kitchen}</Col>
                  </Row>
                  <Row style={{ color: themeColors.text }}>
                    <Col xs={12}><i className="bi bi-geo-alt"></i> {m.location}</Col>
                  </Row>

                  <hr style={{ borderTop: "2px solid #001f3f", margin: "10px 0" }} />

                  <h5 style={{
                    background: "linear-gradient(90deg, #001f3f, #e2df07ff)",
                    WebkitBackgroundClip: "text",
                    WebkitTextFillColor: "transparent",
                    fontWeight: "bold",
                    textAlign: "center"
                  }}>
                    {m.price}
                  </h5>

                  <Button
                    className="btn-animated"
                    style={{
                      backgroundColor: "#001f3f",
                      border: "none",
                      color: "goldenrod",
                      fontWeight: "bold",
                      width: "100%",
                      marginTop: "10px"
                    }}
                    onClick={() => {
                      setSelectedMeuble(m);
                      setShowReservation(true);
                    }}
                  >
                    Faire une réservation
                  </Button>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>

        <div style={{ textAlign: "center", marginTop: "30px" }}>
          <Link 
            to="/nos-meubles" 
            style={{ color: "#001f3f", textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}
          >
            Voir plus <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {/* Modal réservation */}
        <Modal show={showReservation} onHide={() => setShowReservation(false)}>
          <Modal.Header closeButton style={{ backgroundColor: themeColors.background }}>
            <Modal.Title style={{ color: themeColors.text }}>
              {selectedMeuble?.title} - {selectedMeuble?.location}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Heure</Form.Label>
                <Form.Control type="time" name="heure" value={formData.heure} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Durée (en jours)</Form.Label>
                <Form.Control type="number" name="duree" value={formData.duree} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de personnes</Form.Label>
                <Form.Control type="number" name="personnes" value={formData.personnes} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="nom" value={formData.nom} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="tel" name="telephone" value={formData.telephone} onChange={handleChange} />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} />
              </Form.Group>
            </Form>
          </Modal.Body>
          <Modal.Footer>
            <Button variant="secondary" onClick={() => setShowReservation(false)}>Annuler</Button>
            <Button
              style={{ backgroundColor: "#001f3f", border: "none", color: "goldenrod", fontWeight: "bold" }}
              onClick={handleConfirm}
            >
              Confirmer la réservation
            </Button>
          </Modal.Footer>
        </Modal>
      </Container>

            {/* Toast de confirmation */}
      <ToastContainer position="bottom-end" className="p-3">
        <Toast show={showToast} onClose={() => setShowToast(false)} bg="success" delay={3000} autohide>
          <Toast.Header>
            <strong className="me-auto">Confirmation</strong>
          </Toast.Header>
          <Toast.Body style={{ color: "#fff" }}>
            Votre réservation a été confirmée avec succès !
          </Toast.Body>
        </Toast>
      </ToastContainer>

      {/* FOOTER */}
      <footer className="text-center py-3 mt-5" style={{ backgroundColor: themeColors.background, color: themeColors.text }}>
        <p>© 2025 MADIBA GROUP SARL - Tous droits réservés</p>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a
        href="https://wa.me/237656543469"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>
    </div>
  );
}

export default App;