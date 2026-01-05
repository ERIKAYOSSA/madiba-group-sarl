import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../nosproprietes.css";
import { Container, Row, Col, Card, Navbar, Nav } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logoMadiba from "../logomadiba.jpg";
import React, { useEffect, useRef } from "react";

/* ✅ Composant FlashCard animé */
function FlashCard({ children }) {
  const ref = useRef(null);

  useEffect(() => {
    const element = ref.current;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          element.classList.add("visible");
        }
      },
      { threshold: 0.2 }
    );
    if (element) observer.observe(element);
    return () => {
      if (element) observer.unobserve(element);
    };
  }, []);

  return (
    <Card ref={ref} className="shadow-lg flash-card">
      {children}
    </Card>
  );
}

function MesFavoris({ favorites, properties }) {
  const favoris = properties.filter((p) => favorites.includes(p.id));

  return (
    <div className="nosproprietes-page theme-transition">
      <Helmet>
        <title>Mes Favoris - MADIBA GROUP SARL</title>
        <link rel="icon" href="/logoMadiba.jpg" />
      </Helmet>

      {/* ✅ Header (Navbar) */}
      <Navbar expand="lg" className="custom-navbar sticky-top">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logoMadiba} alt="Logo Madiba Group" className="nav-logo me-2" />
            <span className="nav-title">MADIBA GROUP SARL</span>
          </Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ms-auto">
              <Nav.Link as={Link} to="/">Accueil</Nav.Link>
              <Nav.Link as={Link} to="/nos-proprietes">Nos Propriétés</Nav.Link>
              <Nav.Link as={Link} to="/mes-favoris">Mes Favoris</Nav.Link>
              <Nav.Link as={Link} to="/contact">Contact</Nav.Link>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Hero Section */}
      <header
        className="nosproprietes-hero text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          background: "linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6))",
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "40vh",
          color: "#fff",
        }}
      >
        <h1 className="fw-bold animate__animated animate__fadeInDown text-white">Mes Favoris</h1>
        <p className="animate__animated animate__fadeInUp text-white">
          Retrouvez ici vos biens immobiliers préférés.
        </p>
      </header>

      {/* ✅ Grille des favoris */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">❤️ Vos propriétés favorites</h2>
        <Row>
          {favoris.length > 0 ? (
            favoris.map((property) => (
              <Col md={4} key={property.id}>
                <FlashCard>
                  <Card.Img variant="top" src={property.image} alt={property.title} />
                  <Card.Body>
                    <Card.Title>{property.title}</Card.Title>
                    <Card.Text>Prix : {property.price.toLocaleString()} FCFA</Card.Text>
                    <Link to="/contact" className="btn btn-primary flash-btn">Voir détails</Link>
                  </Card.Body>
                </FlashCard>
              </Col>
            ))
          ) : (
            <p className="text-center">Vous n’avez pas encore ajouté de favoris.</p>
          )}
        </Row>
      </Container>

      {/* ✅ Footer */}
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
                <li><Link to="/nos-proprietes" className="footer-link">Nos Propriétés</Link></li>
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
                <a href="https://www.facebook.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="facebook">
                  <i className="bi bi-facebook"></i>
                </a>
                <a href="https://www.instagram.com/madibagroupsarl" target="_blank" rel="noopener noreferrer" className="instagram">
                  <i className="bi bi-instagram"></i>
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
    </div>
  );
}

export default MesFavoris;