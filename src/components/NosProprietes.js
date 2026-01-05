import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import "../nosproprietes.css";
import { Container, Row, Col, Card, Navbar, Nav, NavDropdown, Form } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";
import logoMadiba from "../logomadiba.jpg";
import image1 from "../image1.jpg";
import image2 from "../image2.jpg";
import image3 from "../image3.jpg";
import image4 from "../image4.jpg";
import React, { useEffect, useRef, useState } from "react";

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

function NosProprietes() {
  // ✅ Données des propriétés
  const properties = [
    {
      id: 1,
      title: "Villa 4 chambres – Bonapriso",
      price: 120000000,
      type: "villa",
      location: "douala",
      image: image2,
      badge: "Promo",
      badgeClass: "badge-promo",
    },
    {
      id: 2,
      title: "Appartement moderne – Akwa",
      price: 65000000,
      type: "appartement",
      location: "douala",
      image: image3,
      badge: "Nouveau",
      badgeClass: "badge-new",
    },
    {
      id: 3,
      title: "Terrain 1000m² – Kribi",
      price: 45000000,
      type: "terrain",
      location: "kribi",
      image: image4,
      badge: "Exclusif",
      badgeClass: "badge-exclusive",
    },
  ];

  // ✅ Filtres
  const [filters, setFilters] = useState({
    type: "",
    location: "",
    budget: "",
  });

  const handleChange = (e) => {
    setFilters({ ...filters, [e.target.name]: e.target.value });
  };

  // ✅ Favoris
  const [favorites, setFavorites] = useState([]);

  const toggleFavorite = (id) => {
    setFavorites((prev) =>
      prev.includes(id) ? prev.filter((fav) => fav !== id) : [...prev, id]
    );
  };

  // ✅ Filtrage dynamique
  const filteredProperties = properties.filter((property) => {
    const matchType = filters.type ? property.type === filters.type : true;
    const matchLocation = filters.location ? property.location === filters.location : true;
    const matchBudget = filters.budget ? property.price <= parseInt(filters.budget) : true;
    return matchType && matchLocation && matchBudget;
  });

  return (
    <div className="nosproprietes-page theme-transition">
      <Helmet>
        <title>Nos Propriétés - MADIBA GROUP SARL</title>
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
              <Nav.Link as={Link} to="/mes-favoris">Favoris</Nav.Link>
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
        className="nosproprietes-hero text-center d-flex flex-column justify-content-center align-items-center"
        style={{
          backgroundImage: `linear-gradient(rgba(0,0,0,0.6), rgba(0,0,0,0.6)), url(${image1})`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          height: "50vh",
          color: "#fff",
        }}
      >
        <h1 className="fw-bold animate__animated animate__fadeInDown text-white">Nos Propriétés</h1>
        <p className="animate__animated animate__fadeInUp text-white">
          Découvrez notre sélection exclusive de biens immobiliers.
        </p>
      </header>

      {/* ✅ Barre de filtres */}
      <Container className="my-4 filter-bar">
        <Row className="align-items-center">
          <Col md={4}>
            <Form.Select name="type" value={filters.type} onChange={handleChange}>
              <option value="">Type de bien</option>
              <option value="villa">Villa</option>
              <option value="appartement">Appartement</option>
              <option value="terrain">Terrain</option>
              <option value="bureau">Bureau</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Select name="location" value={filters.location} onChange={handleChange}>
              <option value="">Localisation</option>
              <option value="douala">Douala</option>
              <option value="yaounde">Yaoundé</option>
              <option value="kribi">Kribi</option>
            </Form.Select>
          </Col>
          <Col md={4}>
            <Form.Control
              type="number"
              name="budget"
              value={filters.budget}
              onChange={handleChange}
              placeholder="Budget max (FCFA)"
            />
          </Col>
        </Row>
      </Container>

      {/* ✅ Grille filtrée avec favoris */}
      <Container className="my-5">
        <h2 className="text-center fw-bold mb-4">🏡 Sélection du moment</h2>
        <Row>
          {filteredProperties.length > 0 ? (
            filteredProperties.map((property) => (
              <Col md={4} key={property.id}>
                <FlashCard>
              <div style={{ position: "relative" }}>
                <span className={`property-badge ${property.badgeClass}`}>{property.badge}</span>
                <Card.Img variant="top" src={property.image} alt={property.title} />
                {/* ✅ Icône cœur reliée à l’état global */}
                <span
                  className={`favorite-icon ${favorites.includes(property.id) ? "active" : ""}`}
                  onClick={() => toggleFavorite(property.id)}
                >
                  <i className="bi bi-heart-fill"></i>
                </span>
              </div>
              <Card.Body>
                <Card.Title>{property.title}</Card.Title>
                <Card.Text>Prix : {property.price.toLocaleString()} FCFA</Card.Text>
                <Link to="/contact" className="btn btn-primary flash-btn">Voir détails</Link>
              </Card.Body>
            </FlashCard>

              </Col>
            ))
          ) : (
            <p className="text-center">Aucune propriété ne correspond à vos critères.</p>
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
              <p className="footer-text">Votre partenaire de confiance en immobilier et logistique <p/>
                            </p>
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
                <a
                  href="https://www.tiktok.com/@madibagroupsarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="tiktok"
                >
                  <i className="bi bi-tiktok"></i>
                </a>
                <a
                  href="https://www.facebook.com/madibagroupsarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="facebook"
                >
                  <i className="bi bi-facebook"></i>
                </a>
                <a
                  href="https://www.instagram.com/madibagroupsarl"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="instagram"
                >
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

export default NosProprietes;