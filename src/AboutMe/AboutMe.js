import { Container, Row, Col } from 'react-bootstrap';
import './AboutMe.css';

function AboutMe() {
    return (
        <div id="about">
            <h2>About Me</h2>
            <p>
                Hello, my name is Calvin and I love developing software that I think would be fun 
                to use or useful to have and sharing that software with the world.
                My interest in software development came from my fascination with video games
                and the code that powers them. I started my software development experience by
                picking up <code>Java</code> and writing a server plugin for Minecraft.
                Over time I have worked on many different projects, each using a different set of 
                technologies I had an interest in learning.<br></br><br></br>

                Today, I primarily focus on using <code>JavaScript</code> and learning the many 
                technologies that utilize it.<br></br>
                The following are the technologies I have been working with recently:<br></br>
            </p>
            <Container>
                <Row>
                    <Col><code className="recent">JavaScript (ES6+)</code></Col>
                    <Col><code className="recent">Java</code></Col>
                    <Col><code className="recent">Python</code></Col>
                </Row>
                <Row>
                    <Col><code className="recent">Node.js</code></Col>
                    <Col><code className="recent">React.js</code></Col>
                    <Col><code className="recent">HTML / CSS</code></Col>
                </Row>
            </Container>
        </div>
    );
}

export default AboutMe;