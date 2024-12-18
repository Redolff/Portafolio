import { Container, Nav, Navbar } from "react-bootstrap"
import { useEffect, useState } from "react"

const NavBar = () => {
    
    const [activeLink, setActiveLink] = useState('home')
    const [scroll, setScroll] = useState(false)

    useEffect(() => {
        const onScroll = () => {
            if(window.scrollY > 50){
                setScroll(true)
            }else{
                setScroll(false)
            }
        }

        window.addEventListener("scroll", onScroll)

        return () => window.removeEventListener("scroll", onScroll);
    }, [])

    const onUpdateActivateLink = (value) => {
        setActiveLink(value);
    };

    return (
        <Navbar expand='md' className={scroll ? "scrolled" : ""}>
            <Container>
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link
                            href="#home"
                            className={
                                activeLink === 'home' ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActivateLink("home")}
                        >
                            Home
                        </Nav.Link>
                        <Nav.Link
                            href="#aboutMe"
                            className={
                                activeLink === 'aboutMe' ? "active navbar-link" : "navbar-link"
                            }
                            onClick={() => onUpdateActivateLink("aboutMe")}>
                            About me
                        </Nav.Link>
                        <Nav.Link
                            href="#tecnologies"
                            className={
                                activeLink === 'tecnologies' ? 'active navbar-link': 'navbar-link'
                            }
                            onClick={() => onUpdateActivateLink("tecnologies")}>
                            Technologies
                        </Nav.Link>
                        <Nav.Link
                            href="#projects"
                            className={
                                activeLink === 'Projects' ? 'active navbar-link': 'navbar-link'
                            }
                            onClick={() => onUpdateActivateLink("projects")}>
                            Projects
                        </Nav.Link>
                    </Nav>
                    <span className="navbar-text">
                        <div className="social-icon">
                            <a href="https://www.linkedin.com/in/federico-nahuel-redolfo/" target="blank">
                                <i className="fa fa-linkedin" aria-hidden='true'></i>
                            </a>
                            <a href="https://github.com/Redolff" target="blank">
                                <i className="fa fa-github" aria-hidden='true'></i>
                            </a>
                            <a href="#contact">
                                <i className="fa fa-envelope" aria-hidden='true'></i>
                            </a>
                        </div>
                    </span>
                </Navbar.Collapse>
            </Container>
        </Navbar>
    )
}

export default NavBar