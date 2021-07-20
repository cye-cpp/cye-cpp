import './NavigationBar.css';
import { CSSTransition } from 'react-transition-group';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import Container from 'react-bootstrap/Container';

function NavigationBar(props) {
    const { location } = props;
    // navbar = when navbar should appear
    // initial_item = when items should start flowing in
    // delay = delay between items
    const timeout = {
        navbar: 4000,
        initial_item: 750,
        delay: 250
    }
    return (
        <CSSTransition
            in={true}
            classNames="navigation"
            appear
            timeout={timeout["navbar"]}>
            <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
                <Container>
                    <Navbar.Brand>Calvin Ye</Navbar.Brand>
                    <Navbar.Toggle aria-controls="basic-navbar-nav" />
                    <Navbar.Collapse id="basic-navbar-nav">
                        <Nav defaultActiveKey="1" activeKey={location} className="me-auto">
                            <CSSTransition
                                in={true}
                                classNames="nav-item"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"]}>
                                <Nav.Link eventKey="1" href="#home">Home</Nav.Link>
                            </CSSTransition>
                            <CSSTransition
                                in={true}
                                classNames="nav-item"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"] + timeout["delay"]}>
                                <Nav.Link eventKey="2" href="#about">About Me</Nav.Link>
                            </CSSTransition>
                            <CSSTransition
                                in={true}
                                classNames="nav-item"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"] + (timeout["delay"] * 2)}>
                                <Nav.Link eventKey="3" href="#projects">Projects</Nav.Link>
                            </CSSTransition>
                            <CSSTransition
                                in={true}
                                classNames="nav-item"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"] + (timeout["delay"] * 3)}>
                                <Nav.Link eventKey="4" href="#contact">Contact</Nav.Link>
                            </CSSTransition>
                        </Nav>
                        <Nav className="me-auto">
                            <CSSTransition
                                in={true}
                                classNames="nav-icon"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"] + (timeout["delay"] * 4)}>
                                <Nav.Link href="https://github.com/Expugn">
                                    <i className="fab fa-github"></i>
                                </Nav.Link>
                            </CSSTransition>
                            <CSSTransition
                                in={true}
                                classNames="nav-icon"
                                appear
                                timeout={timeout["navbar"] + timeout["initial_item"] + (timeout["delay"] * 5)}>
                                <Nav.Link href="https://www.linkedin.com/in/calvin-ye-219013107">
                                    <i className="fab fa-linkedin-in"></i>
                                </Nav.Link>
                            </CSSTransition>
                        </Nav>
                    </Navbar.Collapse>
                </Container>
            </Navbar>
        </CSSTransition>
        
    );
}

export default NavigationBar;