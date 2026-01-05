import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../contact.css"; // ✅ CSS isolé pour Contact
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import "bootstrap-icons/font/bootstrap-icons.css";
import logoMadiba from "../logomadiba.jpg";
import videoBg from "../vid.MP4";
import { Navbar, Nav, NavDropdown } from "react-bootstrap";

function Contact() {
  return (
    <div className="contact-page theme-transition">
      {/* Helmet pour titre et favicon */}
      <Helmet>
        <title>Contact - MADIBA GROUP SARL</title>
        <link rel="icon" href="/logoMadiba.jpg" />
      </Helmet>

      {/* ✅ Navbar */}
      <Navbar expand="lg" className="contact-navbar sticky-top">
        <Container>
          <Navbar.Brand href="/" className="d-flex align-items-center">
            <img src={logoMadiba} alt="Logo Madiba Group" className="contact-nav-logo me-2" />
            <span className="contact-nav-title">MADIBA GROUP SARL</span>
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
      <header className="contact-hero-section position-relative text-center">
        <video
          src={videoBg}
          autoPlay
          loop
          muted
          playsInline
          className="contact-video-bg"
        />
        <div className="contact-hero-overlay d-flex flex-column justify-content-center align-items-center">
          <h1 className="fw-bold animate__animated animate__fadeInDown text-white">
            Contactez-nous
          </h1>
          <p className="animate__animated animate__fadeInUp text-white">
            Nous sommes disponibles pour répondre à vos questions et vous accompagner dans vos projets.
          </p>
        </div>
      </header>

      <Container className="my-5">
        {/* Formulaire de contact */}
        <Row className="justify-content-center">
          <Col md={8}>
            <Card className="p-4 shadow-lg animate__animated animate__fadeInUp">
              <Form>
                <Form.Group className="mb-3">
                  <Form.Label>Nom complet</Form.Label>
                  <Form.Control type="text" placeholder="Votre nom" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Email</Form.Label>
                  <Form.Control type="email" placeholder="Votre email" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Téléphone</Form.Label>
                  <Form.Control type="tel" placeholder="Votre numéro" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Sujet</Form.Label>
                  <Form.Control type="text" placeholder="Sujet du message" />
                </Form.Group>
                <Form.Group className="mb-3">
                  <Form.Label>Message</Form.Label>
                  <Form.Control as="textarea" rows={4} placeholder="Votre message" />
                </Form.Group>
                <Button className="contact-btn">
                  Envoyer
                </Button>
              </Form>
            </Card>
          </Col>
        </Row>

        {/* Informations de contact */}
        <Row className="mt-5 text-center">
          <Col md={4}>
            <i className="bi bi-geo-alt fs-2 text-primary"></i>
            <p>Douala, Cameroun</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-telephone fs-2 text-primary"></i>
            <p>+237 656 543 469</p>
          </Col>
          <Col md={4}>
            <i className="bi bi-envelope fs-2 text-primary"></i>
            <p>contact@madibagroup.com</p>
          </Col>
        </Row>

        {/* Carte Google Maps */}
        <div className="mt-4">
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m16!1m12!1m3!1d15919.450985751077!2d9.700594584973892!3d4.048410734804529!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!2m1!1smadiba%20group%20sarl!5e0!3m2!1sfr!2scm!4v1767528320861!5m2!1sfr!2scm"
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            title="Localisation MADIBA GROUP SARL"
          ></iframe>
        </div>

        {/* Bouton retour */}
        <div className="text-center mt-5">
          <Link to="/" className="btn btn-primary contact-btn">
            <i className="bi bi-arrow-left-circle me-2"></i> Retour à l’accueil
          </Link>
        </div>
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
    </div>
  );
}

export default Contact;