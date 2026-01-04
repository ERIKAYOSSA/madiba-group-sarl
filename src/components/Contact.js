import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "animate.css";
import "../App.css";
import { Container, Row, Col, Card, Form, Button } from "react-bootstrap";
import { Helmet } from "react-helmet";
import { Link } from "react-router-dom";

function Contact() {
  return (
    <div className="contact-page theme-transition">
      

      {/* Hero Section */}
      <div className="contact-hero text-center py-5" style={{ background: "#001f3f", color: "#fff" }}>
        <h1 className="fw-bold animate__animated animate__fadeInDown">Contactez-nous</h1>
        <p className="animate__animated animate__fadeInUp">
          Nous sommes disponibles pour répondre à vos questions et vous accompagner dans vos projets.
        </p>
      </div>

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
                <Button
                  className="btn-animated"
                  style={{ backgroundColor: "#FFB400", border: "none", color: "#fff", width: "100%" }}
                >
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
            src="https://www.google.com/maps/embed?pb=!1m18!..." 
            width="100%"
            height="300"
            style={{ border: 0, borderRadius: "8px" }}
            allowFullScreen=""
            loading="lazy"
            title="Localisation MADIBA GROUP SARL"
          ></iframe>
        </div>
      </Container>
    </div>
  );
}

export default Contact;