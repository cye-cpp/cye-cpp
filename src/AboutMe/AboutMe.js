import './AboutMe.css';
import { Container, Row, Col } from 'react-bootstrap';

function AboutMe(props) {
    const { forwardedRef, enterCount } = props;
    return (
        <div id="about" className={"viewport-block view-" + enterCount} ref={forwardedRef}>
            <h2>About Me</h2>
            <p>
                I am an aspiring software engineer looking for new opportunities in tech.
                My interest in software engineering stemmed from my fascination with video games
                and the code that powers them. I started my software development experience by
                teaching myself <code>Java</code> and writing a server plugin for Minecraft.
                Due to the positive responses from that project, I've grown a passion for creating things
                that make others happy. I love creating impactful software that everyone will share or talk about.
                Over time, I have worked on many different projects, each using a different set of 
                technologies I was interested in learning to challenge myself and add to my arsenal of skills.
                <br></br><br></br>
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
            <p>
                I am open to a variety of different projects and challenges and love to learn new things.
                If you want to chat more, please reach out to me using the contact methods listed <a href="#contact">HERE</a>.
            </p>
        </div>
    );
}

export default AboutMe;