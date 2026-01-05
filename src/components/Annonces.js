import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../annonces.css"; 
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logoMadiba from "../logomadiba.jpg";
import image4 from "../image4.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image1 from "../image1.jpg";
import { useState, useEffect } from "react";

// ✅ Composant Timer
function CountdownTimer({ targetDate }) {
  const calculateTimeLeft = () => {
    const difference = +new Date(targetDate) - +new Date();
    let timeLeft = {};
    if (difference > 0) {
      timeLeft = {
        jours: Math.floor(difference / (1000 * 60 * 60 * 24)),
        heures: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        secondes: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setInterval(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <p className="flash-timer">
      ⏱ Temps restant :{" "}
      {timeLeft.jours || 0}j {timeLeft.heures || 0}h {timeLeft.minutes || 0}m {timeLeft.secondes || 0}s
    </p>
  );
}

function Annonces() {
  return (
    <div className="annonces-page theme-transition">
      <Helmet>
        <title>Annonces - MADIBA GROUP SARL</title>
        <link rel="icon" href="/logoMadiba.jpg" />
      </Helmet>

      {/* ✅ Navbar */}
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

      {/* Hero Section */}
      <header
  className="annonces-hero text-center d-flex flex-column justify-content-center align-items-center"
  style={{
    backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image1})`,
    backgroundSize: "cover",
    backgroundPosition: "center",
    height: "50vh",
    color: "#fff",
    textAlign: "center",
  }}
>
  <h1 className="fw-bold animate__animated animate__fadeInDown text-white">
    Nos Annonces
  </h1>
  <p className="animate__animated animate__fadeInUp text-white">
    Découvrez nos ventes flash et nos offres exclusives.
  </p>
</header>

      {/* Ventes Flash */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">🔥 Ventes Flash</h2>
        <Row>
          <Col md={4}>
            <Card className="shadow-lg flash-card">
              <Card.Img variant="top" src={image4} alt="Vente Flash 1" />
              <Card.Body>
                <Card.Title>Appartement 3 pièces</Card.Title>
                <Card.Text>
                  <span className="old-price">10 000 000 FCFA</span> → 
                  <span className="new-price">7 000 000 FCFA</span>
                </Card.Text>
                <CountdownTimer targetDate="2026-01-06T12:00:00" />
                <Link to="/contact" className="btn btn-primary flash-btn">
                  Plus d’info
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg flash-card">
              <Card.Img variant="top" src={image2} alt="Vente Flash 2" />
              <Card.Body>
                <Card.Title>Studio Meublé</Card.Title>
                <Card.Text>
                  <span className="old-price">5 000 000 FCFA</span> → 
                  <span className="new-price">3 500 000 FCFA</span>
                </Card.Text>
                <CountdownTimer targetDate="2026-01-07T18:00:00" />
                <Link to="/contact" className="btn btn-primary flash-btn">
                  Plus d’info
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg flash-card">
              <Card.Img variant="top" src={image3} alt="Vente Flash 3" />
              <Card.Body>
                <Card.Title>Terrain 500m²</Card.Title>
                <Card.Text>
                  <span className="old-price">15 000 000 FCFA</span> → 
                  <span className="new-price">12 000 000 FCFA</span>
                </Card.Text>
                <CountdownTimer targetDate="2026-01-10T09:00:00" />
                <Link to="/contact" className="btn btn-primary flash-btn">
                  Plus d’info
                </Link>
              </Card.Body>
            </Card>
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

export default Annonces;