import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../gestionlocative.css";
import { Container, Row, Col, Card, Navbar, Nav, NavDropdown } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logoMadiba from "../logomadiba.jpg";
import image1 from "../image1.jpg";
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

function GestionLocative() {
  return (
    <div className="gestionlocative-page theme-transition">
      <Helmet>
        <title>Gestion Locative - MADIBA GROUP SARL</title>
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
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* ✅ Hero Section */}
      <header
        className="gestionlocative-hero text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "#fff",
        }}
      >
        <h1 className="fw-bold animate__animated animate__fadeInDown text-white">Gestion Locative</h1>
        <p className="animate__animated animate__fadeInUp text-white">
          Confiez-nous la gestion de vos biens pour une tranquillité totale.
        </p>
      </header>

      {/* ✅ Section Services avec icônes */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">📋 Nos prestations</h2>
        <Row>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-person-check service-icon"></i>
                <Card.Title>Recherche de locataires</Card.Title>
                <Card.Text>
                  Nous sélectionnons des profils fiables et solvables pour occuper vos biens.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-cash-stack service-icon"></i>
                <Card.Title>Gestion des loyers</Card.Title>
                <Card.Text>
                  Encaissement, suivi et relance des paiements pour une rentabilité assurée.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-tools service-icon"></i>
                <Card.Title>Entretien et maintenance</Card.Title>
                <Card.Text>
                  Suivi des réparations et entretien régulier pour préserver la valeur de vos biens.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
        </Row>
      </Container>
            {/* ✅ Section Pourquoi nous choisir */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">🌟 Pourquoi nous choisir ?</h2>
        <Row>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-shield-lock service-icon"></i>
                <Card.Title>Sécurité</Card.Title>
                <Card.Text>
                  Vos biens sont protégés grâce à une gestion rigoureuse et transparente.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-graph-up-arrow service-icon"></i>
                <Card.Title>Rentabilité</Card.Title>
                <Card.Text>
                  Maximisez vos revenus locatifs grâce à un suivi efficace et des locataires fiables.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
          <Col md={4}>
            <FlashCard>
              <Card.Body className="text-center">
                <i className="bi bi-people service-icon"></i>
                <Card.Title>Accompagnement</Card.Title>
                <Card.Text>
                  Une équipe dédiée vous conseille et vous accompagne à chaque étape.
                </Card.Text>
              </Card.Body>
            </FlashCard>
          </Col>
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

export default GestionLocative;