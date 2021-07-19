import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function NavigationBar() {
    return (
        <Navbar sticky="top" variant="dark" bg="dark" expand="lg">
            <Container>
                <Navbar.Brand>Calvin Ye</Navbar.Brand>
                <Navbar.Toggle aria-controls="basic-navbar-nav" />
                <Navbar.Collapse id="basic-navbar-nav">
                    <Nav className="me-auto">
                        <Nav.Link href="#home">Home</Nav.Link>
                        <Nav.Link href="#about">About Me</Nav.Link>
                        <Nav.Link href="#projects">Projects</Nav.Link>
                        <Nav.Link href="#contact">Contact</Nav.Link>
                    </Nav>
                    <Nav className="me-auto">
                        <Nav.Link href="https://github.com/Expugn">
                            <i className="fab fa-github"></i>
                        </Nav.Link>
                        <Nav.Link href="https://www.linkedin.com/in/calvin-ye-219013107">
                            <i className="fab fa-linkedin-in"></i>
                        </Nav.Link>
                    </Nav>
                </Navbar.Collapse>
            </Container>
      </Navbar>
    );
}

export default NavigationBar;