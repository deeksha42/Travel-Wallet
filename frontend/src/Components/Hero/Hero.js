import Container from "react-bootstrap/esm/Container";
import "./Hero.css";

function Hero(props) {
  return (
    <>
      <Container fluid>
        <div className="card">
          <div className={props.cName}>
            <img alt="HeroImg" src={props.heroImg} />
          </div>

          <div className="hero-text">
            <div className="hero-header">
              <h1>{props.title}</h1>
            </div>
            <div className="hero-link">
              <a href={props.url} className={props.btnClass}>
                {props.buttonText}
              </a>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
}

export default Hero;
