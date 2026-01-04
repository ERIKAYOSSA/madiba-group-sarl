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
import videoSrc from "../vid.MP4"; // ✅ import vidéo

function Acceuil() {
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
              <Nav.Link as={Link} to="/nous-contact">Contact</Nav.Link>
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
          <h1 className="fw-bold mb-4 animate__animated animate__fadeInDown">TROUVER UN BIEN IMMOBILIER</h1>
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

      {/* SECTION VIDEO + DESCRIPTION */}
      <Container className="my-5">
        <Row className="align-items-center">
          <Col xs={12} md={6} className="mb-4 mb-md-0">
            <video
              src={videoSrc}
              autoPlay
              loop
              muted
              playsInline
              style={{
                width: "100%",
                height: "300px",
                objectFit: "cover",
                borderRadius: "8px",
                boxShadow: "0 4px 12px rgba(0,0,0,0.2)"
              }}
            />
          </Col>
          <Col xs={12} md={6}>
            <h2 style={{ color: themeColors.text }} className="fw-bold mb-3">
              Découvrez nos solutions immobilières
            </h2>
            <p style={{ color: themeColors.text }}>
              MADIBA GROUP SARL vous accompagne dans la recherche, l’achat et la location de biens immobiliers modernes et adaptés à vos besoins.
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
                  <Link to={`/page${i + 1}`} style={{ textDecoration: "none" }}>
                    <Card.Img variant="top" src={p.img} style={{ cursor: "pointer" }} />
                  </Link>
                  <Card.Body>
                    <Card.Title>{p.title}</Card.Title>
                    <Card.Text>
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
          <Form onSubmit={(e) => { e.preventDefault(); setShowModal(false); }}>
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
            <Button variant="success" type="submit">Envoyer</Button>
          </Form>
        </Modal.Body>
      </Modal>

      {/* SECTION NOS MEUBLES */}
      <Container id="meubles" className="my-5">
        <h2 className="mb-4">Nos meublés disponibles</h2>
        <Row>
          {meubles.map((m, i) => (
            <Col xs={12} sm={6} md={4} key={m.id}>
              <Card className="mb-4 animate__animated animate__zoomIn"
                style={{ border: "2px solid transparent", transition: "transform 0.3s ease, box-shadow 0.3s ease, border-color 0.3s ease" }}
                onMouseEnter={(e) => { e.currentTarget.style.transform = "scale(1.05)"; e.currentTarget.style.boxShadow = "0 10px 20px rgba(0,0,0,0.2)"; e.currentTarget.style.borderColor = "#001f3f"; }}
                onMouseLeave={(e) => { e.currentTarget.style.transform = "scale(1)"; e.currentTarget.style.boxShadow = "none"; e.currentTarget.style.borderColor = "transparent"; }}>
                <Link to={`/meuble${i + 1}`} style={{ textDecoration: "none" }}>
                  <Card.Img variant="top" src={m.img} style={{ cursor: "pointer", width: "100%", height: "200px", objectFit: "cover" }} />
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
                  <h5 style={{ background: "linear-gradient(90deg, #001f3f, #e2df07ff)", WebkitBackgroundClip: "text", WebkitTextFillColor: "transparent", fontWeight: "bold", textAlign: "center" }}>
                    {m.price}
                  </h5>
                  <Button
                    className="btn-animated"
                    style={{ backgroundColor: "#001f3f", border: "none", color: "goldenrod", fontWeight: "bold", width: "100%", marginTop: "10px" }}
                    onClick={() => { setSelectedMeuble(m); setShowReservation(true); }}
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
      </Container>

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

      {/* SECTION NOS VALEURS */}
      <Container id="valeurs" className="my-5">
        <h2 className="mb-4 text-center fw-bold animate__animated animate__fadeInDown" style={{ color: themeColors.text }}>
          Nos valeurs fondamentales
        </h2>
        <Row>
          <Col xs={12} md={4}>
            <Card className="mb-4 text-center animate__animated animate__zoomIn animate__delay-1s valeur-card">
              <Card.Body>
                <div className="valeur-icon"><i className="bi bi-compass"></i></div>
                <Card.Title className="mt-3">Positionnement</Card.Title>
                <Card.Text>Nous affirmons notre rôle de leader en offrant des solutions modernes et adaptées au marché.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-4 text-center animate__animated animate__zoomIn animate__delay-2s valeur-card">
              <Card.Body>
                <div className="valeur-icon"><i className="bi bi-eye"></i></div>
                <Card.Title className="mt-3">Transparence</Card.Title>
                <Card.Text>Nous garantissons une communication claire et des informations accessibles à chaque étape.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={4}>
            <Card className="mb-4 text-center animate__animated animate__zoomIn animate__delay-3s valeur-card">
              <Card.Body>
                <div className="valeur-icon"><i className="bi bi-shield-check"></i></div>
                <Card.Title className="mt-3">Crédibilité</Card.Title>
                <Card.Text>Notre expertise et nos partenariats renforcent la confiance et la fiabilité de nos services.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* SECTION TÉMOIGNAGES */}
      <Container id="temoignages" className="my-5">
        <h2 className="mb-4 text-center fw-bold animate__animated animate__fadeInDown" style={{ color: themeColors.text }}>
          Témoignages de nos clients
        </h2>
        <Carousel interval={5000} className="temoignages-carousel">
          <Carousel.Item>
            <div className="p-4 text-center">
              <p style={{ fontStyle: "italic", color: themeColors.text }}>
                “Grâce à MADIBA GROUP, j’ai trouvé un appartement moderne en quelques jours. Service impeccable !”
              </p>
              <h5 style={{ color: themeColors.accent }}>— Jean, Douala</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-4 text-center">
              <p style={{ fontStyle: "italic", color: themeColors.text }}>
                “Transparence totale et accompagnement professionnel. Je recommande vivement leurs services.”
              </p>
              <h5 style={{ color: themeColors.accent }}>— Amina, Yaoundé</h5>
            </div>
          </Carousel.Item>
          <Carousel.Item>
            <div className="p-4 text-center">
              <p style={{ fontStyle: "italic", color: themeColors.text }}>
                “Un partenaire crédible qui m’a aidé à sécuriser mon titre foncier sans stress.”
              </p>
              <h5 style={{ color: themeColors.accent }}>— Michel, Abidjan</h5>
            </div>
          </Carousel.Item>
        </Carousel>
      </Container>

      {/* SECTION PREUVE DE CRÉDIBILITÉ */}
      <Container id="credibilite" className="my-5">
        <h2 className="mb-4 text-center fw-bold animate__animated animate__fadeInDown">
          Preuves de notre crédibilité
        </h2>
        <Row>
          <Col xs={12} md={3}>
            <Card className="mb-4 text-center animate__animated animate__fadeInUp credibilite-card">
              <Card.Body>
                <i className="bi bi-building-check credibilite-icon"></i>
                <Card.Title className="mt-3">Projets réalisés</Card.Title>
                <Card.Text>Plus de 200 projets immobiliers menés à terme avec succès.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className="mb-4 text-center animate__animated animate__fadeInUp credibilite-card animate__delay-1s">
              <Card.Body>
                <i className="bi bi-file-earmark-text credibilite-icon"></i>
                <Card.Title className="mt-3">Titres fonciers</Card.Title>
                <Card.Text>Des documents légaux et vérifiés pour chaque transaction.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
          <Col xs={12} md={3}>
            <Card className="mb-4 text-center animate__animated animate__fadeInUp credibilite-card animate__delay-2s">
              <Card.Body>
                <i className="bi bi-people credibilite-icon"></i>
                <Card.Title className="mt-3">Partenaires</Card.Title>
                <Card.Text>Collaboration avec des entreprises et institutions reconnues.</Card.Text>
              </Card.Body>
            </Card>
          </Col>
                    <Col xs={12} md={3}>
            <Card className="mb-4 text-center animate__animated animate__fadeInUp credibilite-card animate__delay-3s">
              <Card.Body>
                <i className="bi bi-person-badge credibilite-icon"></i>
                <Card.Title className="mt-3">Notaires</Card.Title>
                <Card.Text>
                  Transactions validées par des notaires agréés et expérimentés.
                </Card.Text>
              </Card.Body>
            </Card>
          </Col>
        </Row>
      </Container>

      {/* SECTION NOS SERVICES */}
      <section className="services-section">
        <Container id="services" className="py-5">
          <h2 className="fw-bold text-center animate__animated animate__fadeInDown">
            Nos Services
          </h2>
          <p className="text-center mb-5">
            Découvrez l’ensemble de nos prestations pour vous accompagner dans vos projets immobiliers avec professionnalisme et transparence.
          </p>
          <Row className="align-items-stretch">
            <Col xs={12} md={6} lg={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front text-center">
                    <i className="bi bi-house-door service-icon"></i>
                    <h5 className="mt-3">Vente de propriété</h5>
                  </div>
                  <div className="flip-card-back">
                    <p>Nous facilitons l’achat et la vente de biens immobiliers en toute sécurité.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front text-center">
                    <i className="bi bi-building service-icon"></i>
                    <h5 className="mt-3">Promotion immobilière</h5>
                  </div>
                  <div className="flip-card-back">
                    <p>Des projets modernes et innovants pour répondre aux besoins du marché.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front text-center">
                    <i className="bi bi-key service-icon"></i>
                    <h5 className="mt-3">Gestion locative</h5>
                  </div>
                  <div className="flip-card-back">
                    <p>Une gestion efficace et transparente de vos biens en location.</p>
                  </div>
                </div>
              </div>
            </Col>
            <Col xs={12} md={6} lg={3}>
              <div className="flip-card">
                <div className="flip-card-inner">
                  <div className="flip-card-front text-center">
                    <i className="bi bi-file-earmark-text service-icon"></i>
                    <h5 className="mt-3">Accompagnement juridique</h5>
                  </div>
                  <div className="flip-card-back">
                    <p>Assistance complète pour vos démarches juridiques et administratives.</p>
                  </div>
                </div>
              </div>
            </Col>
          </Row>
        </Container>
      </section>

      <div className="text-center mt-4">
        <Link to="/nos-services" className="btn-plus-services">
          Plus de services <i className="bi bi-arrow-right-circle ms-2"></i>
        </Link>
      </div>

      {/* SECTION RÉSEAUX SOCIAUX */}
      <Container id="reseaux" className="my-5 text-center">
        <hr className="reseaux-barre" />
        <h2 className="fw-bold animate__animated animate__fadeInDown" style={{ color: themeColors.text }}>
          Suivez-nous sur nos réseaux sociaux
        </h2>
        <p className="mb-4" style={{ color: themeColors.text }}>
          Restez connectés avec MADIBA GROUP SARL pour découvrir nos projets, nos actualités et nos offres exclusives.
        </p>
        <div className="social-links d-flex justify-content-center gap-5">
          <a href="https://www.tiktok.com/@madibagroupsarl" target="_blank" rel="noopener noreferrer" className="social-icon tiktok">
            <i className="bi bi-tiktok"></i>
          </a>
          <a href="https://www.instagram.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="social-icon instagram">
            <i className="bi bi-instagram"></i>
          </a>
          <a href="https://www.facebook.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="social-icon facebook">
            <i className="bi bi-facebook"></i>
          </a>
        </div>
        <hr className="reseaux-barre" />
      </Container>

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
           