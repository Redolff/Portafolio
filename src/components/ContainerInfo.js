import { Button, Col, Row } from "react-bootstrap";
import imgPortafolio from '../assets/img-portafolio.jpg'

const ContainerInfo = () => {

    return (
        <div className="container-info" id="home">
          <Row className="justify-content-md-center section-info">
            <Col xs lg="4" className="upper-info">
              <div className="info">
                <h1>
                  {`Hi! I'm Federico`} {" "} 
                </h1>
                <p>
                  Hello and welcome to my portfolio. I'm Federico Redolfo, a web
                  developer focused on creating innovative solutions for real
                  problems. In this space, you will find examples of my work and
                  skills, and you will be able to see how I can contribute to your
                  project.
                </p>
                <a href="#contact" className="d-flex justify-content-center cont">
                  <Button className="mt-3" variant="primary">
                    Contact
                  </Button>
                </a>
              </div>
            </Col>
            <Col md="2"></Col>
            <Col xs lg="4">
              <img className="img-me" src={imgPortafolio} alt="me"/>
            </Col>
          </Row>
        </div>
      );
}

export default ContainerInfo