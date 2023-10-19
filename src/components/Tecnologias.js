import { Card, ListGroup } from "react-bootstrap";
import react from "../assets/react.png"
import node from "../assets/nodejs.png"
import java from "../assets/java.png"
import php from "../assets/php.png"
import js from "../assets/js.png"
import css from "../assets/css.png"
import html from "../assets/html.png"
import bs from "../assets/bootstrap.png"
import git from "../assets/git.png"
import mysql from "../assets/mysql.png"
import { useScrollEffect } from "../hooks/useScrollEfect"

const Tecnologias = () => {

    const [visible] = useScrollEffect("scrollEffectTec")

    return (
        <div 
            className={`container-tecnologies scrollEffectTec ${visible && "visible"}`}
            id="tecnologies"    
        >
            <h1>Technologies</h1>
            <div className="tecnologies">
                <ListGroup className="row" horizontal>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={react} />
                            <Card.Body>
                                <Card.Title>React</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={node} />
                            <Card.Body>
                                <Card.Title>NodeJs</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={java} />
                            <Card.Body>
                                <Card.Title>Java</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={php} />
                            <Card.Body>
                                <Card.Title>PHP</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={mysql} />
                            <Card.Body>
                                <Card.Title>MySQL</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style" >
                        <Card className="card-style">
                            <Card.Img variant="top" src={js} />
                            <Card.Body>
                                <Card.Title>Javascript</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={html} />
                            <Card.Body>
                                <Card.Title>HTML</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={css} />
                            <Card.Body>
                                <Card.Title>CSS</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={bs} />
                            <Card.Body>
                                <Card.Title>Bootstrap</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                    <ListGroup.Item className="col list-group-style">
                        <Card className="card-style">
                            <Card.Img variant="top" src={git} />
                            <Card.Body>
                                <Card.Title>Git</Card.Title>
                            </Card.Body>
                        </Card>
                    </ListGroup.Item>
                </ListGroup>
            </div>
        </div>
    )
}

export default Tecnologias