import React from "react";
import Container from "react-bootstrap/esm/Container";
import Row from "react-bootstrap/Row";
import "./MainScreen.css";

const MainScreen = ({ title, children }) => {
  return (
    <>
      <div className="mainback">
        <Container>
          <Row>
            <div className="page">
              {title && (
                <>
                  <h1 className="heading">{title}</h1>
                </>
              )}
              {children}
            </div>
          </Row>
        </Container>
      </div>
    </>
  );
};

export default MainScreen;
