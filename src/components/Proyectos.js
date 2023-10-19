import { Col, Row, Button } from "react-bootstrap"
import { useScrollEffect } from "../hooks/useScrollEfect"
import proj1 from "../assets/SharkGames.png";
import proj2 from "../assets/ShoppingCart.png";
import proj3 from "../assets/SportsClothing.png";
import react from "../assets/react.png";
import bootstrap from "../assets/bootstrap.png";
import css from "../assets/css.png";
import html from "../assets/html.png";
import js from "../assets/js.png";
import node from "../assets/nodejs.png";
import php from "../assets/php.png";
import mysql from "../assets/mysql.png";

const Proyectos = () => {

    const [visible] = useScrollEffect("scrollEffectProyects")

    return (
        <div
            className={`scrollEffectProyects ${visible && "visible"}`}
            id="projects"
        >
            <h1>Last Projects</h1>
            <Row className="individual-project d-flex mb-5">
                <Col className="img-project">
                    <img className="rounded" src={proj1} alt="SharkGames"/>
                </Col>
                <Col className="project1-info project-info">
                    <div>
                        <h4>SharkGames</h4>
                        <div className="d-flex icons-proyect">
                            <img src={js} alt="Javascript" />
                            <img src={css} alt="CSS" />
                            <img src={html} alt="HTML" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/SharkGames"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    More Info <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
            <Row className="individual-project d-flex mb-5">
                <Col className="project-info">
                    <div>
                        <h4>ShoppingCart</h4>
                        <div className="d-flex icons-proyect">
                            <img src={react} alt="react" />
                            <img src={node} alt="NodeJS" />
                            <img src={css} alt="CSS" />
                            <img src={bootstrap} alt="bootstrap" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/Shopping-cart"
                                target="_blank"
                                rel="noreferrer"
                                >
                                More Info <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
                <Col className="img-project">
                    <img className="rounded" src={proj2} alt="ShoppingCart" />
                </Col>
            </Row>
            <Row className="individual-project d-flex mb-5">
                <Col className="img-project">
                    <img className="rounded" src={proj3} alt="pc-components"/>
                </Col>
                <Col className="project1-info project-info">
                    <div>
                        <h4>SportsClothing</h4>
                        <div className="d-flex icons-proyect">
                            <img src={php} alt="php" />
                            <img src={mysql} alt="mysql" />
                            <img src={js} alt="javascript" />
                        </div>
                        <div className="links-projects">
                            <Button variant="primary">
                                <a
                                href="https://github.com/Redolff/Tp_Especial"
                                target="_blank"
                                rel="noreferrer"
                                >
                                    More Info <i className="fa fa-github" aria-hidden="true"></i>
                                </a>
                            </Button>
                        </div>
                    </div>
                </Col>
            </Row>
        </div>
    )
}

export default Proyectos