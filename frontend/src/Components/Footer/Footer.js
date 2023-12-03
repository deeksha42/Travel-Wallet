import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "./Footer.css";

const Footer = () => {
  return (
    <footer>
      <Container>
        <Row>
          <Col className="text-footer">Copyright &copy;Travel Wallet</Col>
        </Row>
      </Container>
    </footer>
  );
};

export default Footer;
