import React, { useState, useEffect } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import {Navbar,  Nav,  Form,  Spinner,  Modal,  Toast,  ToastContainer,  Container,  Row,  Col,  Card,  Button,  NavDropdown,  Carousel} from "react-bootstrap";
import "bootstrap-icons/font/bootstrap-icons.css";
import ScrollToTopButton from "../components/ScrollToTopButton";
import logoMadiba from "../logomadiba.jpg";
import { Link } from "react-router-dom";

function NosMeubles() {
  const [darkMode, setDarkMode] = useState(false);
  const [loading, setLoading] = useState(false);
  const [, setLoadingListings] = useState(false);
  const [, setNavbarOpaque] = useState(false);

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

  const headerImages = [
    {
      image: "/images/meuble1.jpeg",
      title: "Appartement Meublé Moderne",
      description: "Spacieux et lumineux, idéal pour un séjour confortable."
    },
    {
      image: "/images/meuble2.jpeg",
      title: "Studio Premium",
      description: "Compact et élégant, parfait pour les jeunes actifs."
    },
    {
      image: "/images/meuble3.jpeg",
      title: "Maison Familiale",
      description: "Grande maison équipée, idéale pour les familles."
    }
  ];

  const meubles = [
    { id: 0, title: "Appartement meublé", img: "/images/meuble1.jpeg", size: "80 m²", beds: 2, baths: 1, living: 1, balcony: true, kitchen: "Oui", location: "Bonamoussadi", price: "40 000FCFA / nuit" },
    { id: 1, title: "Studio moderne", img: "/images/meuble2.jpeg", size: "45 m²", beds: 1, baths: 1, living: 0, balcony: false, kitchen: "Oui", location: "Akwa", price: "25 000FCFA / nuit" },
    { id: 2, title: "Duplex chic", img: "/images/meuble3.jpeg", size: "120 m²", beds: 3, baths: 2, living: 1, balcony: true, kitchen: "Oui", location: "Bonapriso", price: "70 000FCFA / nuit" },
  ];

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleConfirm = () => {
    const { date, heure, duree, personnes, nom, telephone, email } = formData;
    if (!date || !heure || !duree || !personnes || !nom || !telephone || !email) {
      alert("Veuillez remplir tous les champs avant de confirmer.");
      return;
    }
    setShowReservation(false);
    setShowToast(true);
    setFormData({ date: "", heure: "", duree: "", personnes: "", nom: "", telephone: "", email: "" });
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
    setTimeout(() => setLoadingListings(false), 1500);
  }, []);

  useEffect(() => {
    const handleScroll = () => setNavbarOpaque(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const [scrolled, setScrolled] = useState(false);
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
          <Navbar.Brand as={Link} to="/" className="d-flex align-items-center">
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
              <Nav.Link as={Link} to="/nous-contacter">Contact</Nav.Link>
            </Nav>
            <Button className="ms-3 btn-animated" style={{ backgroundColor: themeColors.accent, border: "none", color: themeColors.background }}>
              Se connecter
            </Button>
            <Form.Check type="switch" id="theme-switch" label={darkMode ? "🌙" : "☀️"} checked={darkMode} onChange={toggleTheme} className="ms-3" style={{ color: themeColors.text }} />
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* HERO CAROUSEL */}
      <div id="home" className="hero-carousel">
        <Carousel fade interval={5000}>
          {headerImages.map((item, index) => (
            <Carousel.Item key={index}>
              <div className="hero-slide d-flex align-items-center justify-content-center text-center"
                style={{ backgroundImage: `url(${item.image})`, backgroundSize: "cover", backgroundPosition: "center", minHeight: "70vh", filter: "brightness(0.7)" }}>
                <div className="hero-overlay">
                  <Container>
                    <h1 className="fw-bold mb-4 animate__animated animate__fadeInDown">{item.title}</h1>
                    <p className="mb-4 animate__animated animate__fadeInUp">{item.description}</p>
                    {/* Barre de recherche */}
                    <div className="p-4 rounded animate__animated animate__fadeInUp hero-search">
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
                                                            <Form.Control type="number" placeholder="Budget max (FCFA)" />
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
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>
      <div className="text-center my-4">
        <Link 
            to="/" 
            className="btn btn-primary btn-animated"
            style={{ backgroundColor: "#001f3f", border: "none", color: "goldenrod", fontWeight: "bold" }}
        >
            <i className="bi bi-arrow-left-circle me-2"></i> Retour à l’accueil
        </Link>
        </div>
      {/* SECTION NOS MEUBLES */}
      <Container id="meubles" className="my-5">
        <h2 className="mb-4">Nos meublés disponibles</h2>
        <Row>
          {meubles.map((m, i) => (
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
                <Link to={`/meuble${i + 1}`} style={{ textDecoration: "none" }}>
                  <Card.Img
                    variant="top"
                    src={m.img}
                    style={{
                      cursor: "pointer",
                      width: "100%",
                      height: "200px",
                      objectFit: "cover",
                    }}
                  />
                </Link>
                <Card.Body>
                  <Card.Title>{m.title}</Card.Title>
                  <Row>
                    <Col xs={4}><i className="bi bi-aspect-ratio"></i> {m.size}</Col>
                    <Col xs={4}><i className="bi bi-bed"></i> {m.beds}</Col>
                    <Col xs={4}><i className="bi bi-droplet"></i> {m.baths}</Col>
                  </Row>
                  <Row>
                    <Col xs={4}><i className="bi bi-couch"></i> {m.living}</Col>
                    <Col xs={4}><i className="bi bi-building"></i> {m.balcony ? "Balcon" : "Sans"}</Col>
                    <Col xs={4}><i className="bi bi-cup-hot"></i> {m.kitchen}</Col>
                  </Row>
                  <Row>
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
            style={{ color: themeColors.text, textDecoration: "none", fontWeight: "bold", fontSize: "18px" }}
          >
            Voir plus <i className="bi bi-arrow-right"></i>
          </Link>
        </div>

        {/* Modal réservation */}
        <Modal show={showReservation} onHide={() => setShowReservation(false)} centered>
          <Modal.Header closeButton style={{ backgroundColor: themeColors.background }}>
            <Modal.Title style={{ color: themeColors.text }}>
              {selectedMeuble?.title} - {selectedMeuble?.location}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body>
            <Form onSubmit={(e) => { e.preventDefault(); handleConfirm(); }}>
              <Form.Group className="mb-3">
                <Form.Label>Date</Form.Label>
                <Form.Control type="date" name="date" value={formData.date} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Heure</Form.Label>
                <Form.Control type="time" name="heure" value={formData.heure} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Durée (en jours)</Form.Label>
                <Form.Control type="number" name="duree" value={formData.duree} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nombre de personnes</Form.Label>
                <Form.Control type="number" name="personnes" value={formData.personnes} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Nom</Form.Label>
                <Form.Control type="text" name="nom" value={formData.nom} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Téléphone</Form.Label>
                <Form.Control type="tel" name="telephone" value={formData.telephone} onChange={handleChange} required />
              </Form.Group>
              <Form.Group className="mb-3">
                <Form.Label>Email</Form.Label>
                <Form.Control type="email" name="email" value={formData.email} onChange={handleChange} required />
              </Form.Group>
              <Modal.Footer>
                <Button variant="secondary" onClick={() => setShowReservation(false)}>Annuler</Button>
                <Button
                  style={{ backgroundColor: "#001f3f", border: "none", color: "goldenrod", fontWeight: "bold" }}
                  type="submit"
                >
                  Confirmer la réservation
                </Button>
              </Modal.Footer>
            </Form>
          </Modal.Body>
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
      <footer className="custom-footer">
        <Container>
          <Row className="align-items-center">
            <Col md={3} className="text-center text-md-start mb-3">
              <img src={logoMadiba} alt="Logo Madiba Group" className="footer-logo mb-3" />
              <h4 className="footer-title">MADIBA GROUP SARL</h4>
              <p className="footer-text">Votre partenaire de confiance en immobilier et logistique.</p>
            </Col>
            <Col md={3} className="text-center mb-3">
              <h5 className="footer-title">Liens rapides</h5>
              <ul className="list-unstyled">
                <li><Link to="/" className="footer-link">Accueil</Link></li>
                <li><Link to="/nos-services" className="footer-link">Nos Services</Link></li>
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

            {/* Réseaux sociaux */}
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
      <a
        href="https://wa.me/237656543469"
        className="whatsapp-float"
        target="_blank"
        rel="noopener noreferrer"
      >
        <i className="bi bi-whatsapp"></i>
      </a>

      {/* Bouton Retour en haut */}
      <ScrollToTopButton />
    </div>
  );
}

export default NosMeubles;