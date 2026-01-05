import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../promotion.css"; // ✅ fichier CSS dédié
import { Container, Row, Col, Card } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";
import logoMadiba from "../logomadiba.jpg";
import vid1 from "../vid1.MP4";
import vid2 from "../vid2.MP4";

function PromotionImmobiliere() {
  return (
    <div className="promotion-page theme-transition">
      {/* Helmet pour titre et favicon */}
      <Helmet>
        <title>Promotion Immobilière - MADIBA GROUP SARL</title>
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

      {/* ✅ Hero Section avec vidéos */}
      <header className="promotion-hero">
  {/* Vidéo 1 */}
  <div className="video-slide">
    <video
      src={vid1}
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    />
    <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold text-white animate__animated animate__fadeInDown">
        Résidences modernes
      </h1>
      <p className="text-white animate__animated animate__fadeInUp">
        Découvrez nos projets haut standing en plein cœur de Douala.
      </p>
    </div>
  </div>

  {/* Vidéo 2 */}
  <div className="video-slide">
    <video
      src={vid2}
      autoPlay
      loop
      muted
      playsInline
      className="hero-video"
    />
    <div className="hero-overlay d-flex flex-column justify-content-center align-items-center">
      <h1 className="fw-bold text-white animate__animated animate__fadeInDown">
        Innovation & Qualité
      </h1>
      <p className="text-white animate__animated animate__fadeInUp">
        Nous construisons avec passion et respect des délais.
      </p>
    </div>
  </div>
</header>

      {/* Présentation */}
      <Container className="my-5">
        <Row className="justify-content-center">
          <Col md={10} className="text-center">
            <h2 className="fw-bold mb-4">Notre Expertise</h2>
            <p>
              MADIBA GROUP SARL vous accompagne dans toutes les étapes de la
              promotion immobilière : étude, financement, construction et
              commercialisation. Nous mettons notre savoir-faire au service de
              vos projets pour garantir transparence, qualité et respect des délais.
            </p>
          </Col>
        </Row>

        {/* Projets phares */}
        <Row className="mt-5">
          <Col md={4}>
            <Card className="shadow-lg promotion-card">
              <Card.Img variant="top" src="/image1.jpg" alt="Projet 1" />
              <Card.Body>
                <Card.Title>Résidence Prestige</Card.Title>
                <Card.Text>
                  Un projet moderne au cœur de Douala, livré en 2025.
                </Card.Text>
                <Link to="/contact" className="btn btn-primary promotion-btn">
                  Plus d’info
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg promotion-card">
              <Card.Img variant="top" src="/image2.jpg" alt="Projet 2" />
              <Card.Body>
                <Card.Title>Résidence Horizon</Card.Title>
                <Card.Text>
                  Appartements haut standing avec vue panoramique.
                </Card.Text>
                <Link to="/contact" className="btn btn-primary promotion-btn">
                  Plus d’info
                </Link>
              </Card.Body>
            </Card>
          </Col>

          <Col md={4}>
            <Card className="shadow-lg promotion-card">
              <Card.Img variant="top" src="/image3.jpg" alt="Projet 3" />
              <Card.Body>
                <Card.Title>Résidence Émeraude</Card.Title>
                <Card.Text>
                  Projet en cours, livraison prévue en 2026.
                </Card.Text>
                <Link to="/contact" className="btn btn-primary promotion-btn">
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
    </div>
  );
}

export default PromotionImmobiliere;