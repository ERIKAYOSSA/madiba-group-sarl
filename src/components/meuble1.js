import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import {  Navbar,  Nav,  Form,  Spinner,  Modal,  Toast,  ToastContainer,  Container,  Row,  Col,  Card,  Button,  NavDropdown,  Carousel} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import { Link } from "react-router-dom"; // ✅ navigation interne
import headerBg from "../header-bg.jpg";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import logoMadiba from "../logomadiba.jpg";
import ScrollToTopButton from "../components/ScrollToTopButton";

function PromotionImmobiliere() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [loadingListings, setLoadingListings] = useState(true);
  const [scrolled, setScrolled] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [showReservation, setShowReservation] = useState(false);
  const [selectedMeuble, setSelectedMeuble] = useState(null);
  const [showToast, setShowToast] = useState(false);

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
    { type: "Maison", title: "Résidence Azure", location: "Abidjan Yapo", size: "140 m²", price: "105,000 FCFA", img: image1 },
    { type: "Appartement", title: "Maison Confort", location: "Marcory", size: "85 m²", price: "85,000 FCFA", img: image2 },
    { type: "Immeuble", title: "Immeuble Horizon", location: "Treichville", size: "220 m²", price: "260,000 FCFA", img: image3 },
    { type: "Terrain", title: "Terrain à vendre", location: "Bonapriso", size: "300 m²", price: "14 450,000 FCFA", img: image4 },
    { type: "Appartement", title: "Maison Confort", location: "Marcory", size: "85 m²", price: "85,000 FCFA", img: image2 },
    { type: "Immeuble", title: "Immeuble Horizon", location: "Treichville", size: "220 m²", price: "260,000 FCFA", img: image3 },
  ];

  const meubles = [
    { id: 0, title: "Appartement meublé", img: "/images/meuble1.jpeg", size: "80 m²", beds: 2, baths: 1, living: 1, balcony: true, kitchen: "Oui", location: "Bonamoussadi", price: "40 000FCFA/ nuit" },
    { id: 1, title: "Studio moderne", img: "/images/meuble2.jpeg", size: "45 m²", beds: 1, baths: 1, living: 0, balcony: false, kitchen: "Oui", location: "Akwa", price: "25 000FCFA/ nuit" },
    { id: 2, title: "Duplex chic", img: "/images/meuble3.jpeg", size: "120 m²", beds: 3, baths: 2, living: 1, balcony: true, kitchen: "Oui", location: "Bonapriso", price: "70 000FCFA / nuit" },
    { id: 3, title: "Appartement meublé", img: "/images/meuble1.jpeg", size: "80 m²", beds: 2, baths: 1, living: 1, balcony: true, kitchen: "Oui", location: "Bonamoussadi", price: "40 000FCFA/ nuit" },
    { id: 4, title: "Studio moderne", img: "/images/meuble2.jpeg", size: "45 m²", beds: 1, baths: 1, living: 0, balcony: false, kitchen: "Oui", location: "Akwa", price: "25 000FCFA/ nuit" },
    { id: 5, title: "Duplex chic", img: "/images/meuble3.jpeg", size: "120 m²", beds: 3, baths: 2, living: 1, balcony: true, kitchen: "Oui", location: "Bonapriso", price: "70 000FCFA / nuit" },
  ];


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
    setTimeout(() => setLoadingListings(false), 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
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
      <Navbar expand="lg" className={`custom-navbar sticky-top ${scrolled ? "navbar-scrolled" : ""}`}>
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logoMadiba} alt="Logo Madiba Group" className="nav-logo me-2" />
            <span className="nav-title">MADIBA GROUP SARL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <NavDropdown title="Location" id="location-dropdown">
                <NavDropdown.Item as={Link} to="/nos-meubles">Meublé</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/nos-proprietes">Propriété</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/annonces">Annonces</Nav.Link>
              <NavDropdown title="Services" id="services-dropdown">
                <NavDropdown.Item as={Link} to="/nos-proprietes">Vente</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/promotion-immobiliere">Promotion immobilière</NavDropdown.Item>
                <NavDropdown.Item as={Link} to="/gestion-locative">Gestion locative</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
            <Button className="ms-3 btn-animated" style={{ backgroundColor: themeColors.accent, border: "none", color: themeColors.background }}>
              Se connecter
            </Button>
            <Form.Check type="switch" id="theme-switch" label={darkMode ? "🌙" : "☀️"} checked={darkMode} onChange={toggleTheme} className="ms-3" style={{ color: themeColors.text }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO */}
      <div id="home" className="text-center d-flex align-items-center justify-content-center"
        style={{ backgroundImage: `url(${headerBg})`, backgroundSize: "cover", backgroundPosition: "center", backgroundColor: "rgba(10,31,68,0.3)", backgroundBlendMode: "multiply", color: "#ffffff", minHeight: "70vh" }}>
        <Container>
          <h1 className="fw-bold mb-4 animate__animated animate__fadeInDown">TROUVER LE BIEN IDEAL</h1>
          <div className="p-4 rounded animate__animated animate__fadeInUp"
            style={{ backgroundColor: "rgba(255,255,255,0.2)", backdropFilter: "blur(6px)", width: "90%", margin: "0 auto" }}>
            <Form>
              <Row className="g-2">
                <Col xs={12} md={4}>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-geo-alt"></i></span>
                    <Form.Control type="text" placeholder="Zone recherchée" />
                  </div>
                </Col>
                <Col xs={12} md={3}>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-house-door"></i></span>
                    <Form.Select>
                      <option>Type de bien</option>
                      <option>Maison</option>
                      <option>Appartement</option>
                      <option>Villa</option>
                                            <option>Terrain</option>
                    </Form.Select>
                  </div>
                </Col>

                <Col xs={12} md={3}>
                  <div className="input-group">
                    <span className="input-group-text"><i className="bi bi-cash-stack"></i></span>
                    <Form.Control type="number" placeholder="Budget max (€)" />
                  </div>
                </Col>

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
      

      

      
      
          
      {/* FOOTER */}
      <footer className="custom-footer">
        <Container>
          <Row className="align-items-center">
            <Col md={3} className="text-center text-md-start mb-3">
              <img src={logoMadiba} alt="Logo Madiba Group" className="footer-logo mb-3" />
              <h4 className="footer-title">MADIBA GROUP SARL</h4>
              <p className="footer-text">Votre partenaire de confiance en immobilier et logistique.</p>
            </Col>
            {/* Liens rapides */}
              <Col md={3} className="text-center mb-3">
                <h5 className="footer-title">Liens rapides</h5>
                <ul className="list-unstyled">
                  <li><Link to="/" className="footer-link">Accueil</Link></li>
                  <li><Link to="/nos-services" className="footer-link">Nos Services</Link></li>
                  {/* ✅ Correction ici */}
                  <li><Link to="/contact" className="footer-link">Contact</Link></li>
                </ul>
              </Col>
            <Col md={3} className="text-center mb-3">
              <h5 className="footer-title">Services</h5>
              <ul className="list-unstyled">
                <li className="footer-text">Vente de propriété</li>
                <li className="footer-text">Promotion immobilière</li>
                <li className="footer-text">Gestion locative</li>
                <li className="footer-text">Accompagnement juridique</li>
              </ul>
            </Col>
            <Col md={3} className="text-center text-md-end mb-3">
              <h5 className="footer-title">Suivez-nous</h5>
              <div className="social-icons">
                <a href="https://www.tiktok.com/@madibagroupsarl" target="_blank" rel="noopener noreferrer" className="tiktok">
                  <i className="bi bi-tiktok"></i>
                </a>
                <a href="https://www.instagram.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="bi bi-instagram"></i>
                </a>
                <a href="https://www.facebook.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
              </div>
            </Col>
          </Row>
          <hr className="footer-barre" />
          <p className="text-center mt-3 footer-text">
            © {new Date().getFullYear()} MADIBA GROUP SARL - Tous droits réservés
          </p>
        </Container>
      </footer>

      {/* Bouton WhatsApp flottant */}
      <a href="https://wa.me/237656543469" className="whatsapp-float" target="_blank" rel="noopener noreferrer">
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Bouton Retour en haut */}
      <ScrollToTopButton />
    </div>
  );
}

export default Acceuil;
           