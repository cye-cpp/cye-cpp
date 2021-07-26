import './Projects.css';
import project1_img from './cye-cpp.png';
import project2_img from './GroceryChimp.png';
import project3_img from './priconne-quest-helper.png';
import { Container, Card, Row } from 'react-bootstrap';
import handleViewport from 'react-in-viewport';

const featured = [
    <Project key="project-1" info={{
        title: "Personal Biography Website",
        name: "cye-cpp",
        description: "The website you are looking at right now! A static webpage that contains information about myself and my work.",
        technology: [
            <code key="tech-1-1">JavaScript</code>, 
            <code key="tech-1-2">React.js</code>,
            <code key="tech-1-3">HTML / CSS</code>,
            <code key="tech-1-4">Bootstrap</code>
        ],
        links: [
            <a key="link-1-1" className="fas fa-external-link-alt" target="_blank" rel="noopener noreferrer"
                href="https://cye-cpp.github.io/cye-cpp/"><span>Link</span></a>,
            <a key="link-1-2" className="fab fa-github" target="_blank" rel="noopener noreferrer"
                href="https://github.com/cye-cpp/cye-cpp"><span>GitHub</span></a>
        ],
        image: project1_img
    }} />,
    <Project key="project-2" info={{
        title: "E-commerce Website",
        name: "GroceryChimp",
        description: "Basic e-commerce site that imitates a home delivery grocery store service. Features a store list, product lists, user accounts with creation and sign in functionality, shopping cart, and checkout functionality.",
        technology: [
            <code key="tech-2-1">Django</code>, 
            <code key="tech-2-2">Python</code>,
            <code key="tech-2-3">JavaScript</code>,
            <code key="tech-2-4">React.js</code>,
            <code key="tech-2-5">HTML / CSS</code>,
            <code key="tech-2-6">MySQL</code>,
            <code key="tech-2-7">Heroku</code>,
            <code key="tech-2-8">Amazon RDS</code>,
            <code key="tech-2-9">jQuery</code>,
            <code key="tech-2-10">PHP</code>
        ],
        links: [
            <a key="link-2-1" className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/SoftwareChimp/GroceryChimp"><span>GitHub</span></a>
        ],
        image: project2_img
    }} />,
    <Project key="project-3" info={{
        title: "Quest Selection Helper",
        name: "priconne-quest-helper",
        description: "A web application that allows users to select several 'items' they were required to collect and generate a list of potential areas they could farm for these 'items' in the most efficient manner. Includes a suite of tools used to help updating the application.",
        technology: [
            <code key="tech-3-1">JavaScript</code>, 
            <code key="tech-3-2">HTML / CSS</code>,
            <code key="tech-3-3">jQuery</code>,
            <code key="tech-3-4">Node.js</code>,
            <code key="tech-3-5">Python</code>,
            <code key="tech-3-6">SQLite3</code>,
            <code key="tech-3-7">PHP</code>,
            <code key="tech-3-8">Heroku</code>,
            <code key="tech-3-9">GitHub API</code>,
        ],
        links: [
            <a key="link-3-1" className="fas fa-external-link-alt" target="_blank" rel="noopener noreferrer"
                href="https://expugn.github.io/priconne-quest-helper/"><span>Link</span></a>,
            <a key="link-3-2" className="fab fa-github" target="_blank" rel="noopener noreferrer" 
                href="https://github.com/Expugn/priconne-quest-helper"><span>GitHub</span></a>
        ],
        image: project3_img
    }} />,
];
const small = [
    <ProjectSmall key="project-4" info={{
        title: "Shiritori Game Helper",
        name: "priconne-shiritori",
        description: "A web application to assist non-Japanese speakers in choosing a valid word in a Shiritori game. Primarily focused on figuring out game logic.",
        technology: [
            <code key="tech-4-1">JavaScript</code>, 
            <code key="tech-4-2">HTML / CSS</code>,
            <code key="tech-4-3">SQLite3</code>,
            <code key="tech-4-4">Treant</code>,
            <code key="tech-4-5">jQuery</code>
        ],
        links: [
            <a key="link-4-1" className="fas fa-external-link-alt" target="_blank" rel="noopener noreferrer" href="https://expugn.github.io/priconne-shiritori/"><span>Link</span></a>,
            <a key="link-4-2" className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Expugn/priconne-shiritori"><span>GitHub</span></a>
        ],
        image: null
    }} />,
    <ProjectSmall key="project-5" info={{
        title: "Discord Chat Bot - Queue Manager",
        name: "priconne-queue",
        description: "A chat bot for Discord that manages a 'queue' for users to let them know when it is their turn.",
        technology: [
            <code key="tech-5-1">JavaScript</code>, 
            <code key="tech-5-2">Node.js</code>,
            <code key="tech-5-3">Discord.js</code>,
            <code key="tech-5-4">Discord API</code>
        ],
        links: [],
        image: null
    }} />,
    <ProjectSmall key="project-6" info={{
        title: "Discord Chat Bot - Gachapon Simulator",
        name: "S-argo",
        description: "A chat bot for Discord that simulates a 'pull' from a gachapon system. Features adjustable percentages and user account saving.",
        technology: [
            <code key="tech-6-1">Java</code>, 
            <code key="tech-6-2">Discord4J</code>,
            <code key="tech-6-3">Discord API</code>
        ],
        links: [
            <a key="link-3-1" className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Expugn/S-argo"><span>GitHub</span></a>
        ],
        image: null
    }} />,
    <ProjectSmall key="project-7" info={{
        title: "Minecraft Bukkit Plugin",
        name: "ExpugnExtras",
        description: "A Minecraft plugin for a server. Features fun commands and features to improve the experience of players.",
        technology: [
            <code key="tech-7-1">Java</code>
        ],
        links: [
            <a key="link-7-1" className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Expugn/ExpugnExtras"><span>GitHub</span></a>
        ],
        image: null
    }} />,
    <ProjectSmall key="project-8" info={{
        title: "Database Fetcher",
        name: "priconne-en_db-fetch",
        description: "A tool to grab the master database file for users to examine and study from a game's CDN (Content Delivery Network).",
        technology: [
            <code key="tech-8-1">JavaScript</code>, 
            <code key="tech-8-2">Node.js</code>,
            <code key="tech-8-3">SQLite3</code>
        ],
        links: [
            <a key="link-8-1" className="fab fa-github" target="_blank" rel="noopener noreferrer" href="https://github.com/Expugn/priconne-en_db-fetch"><span>GitHub</span></a>
        ],
        image: null
    }} />,
    <ProjectSmall key="project-9" info={{
        title: "Park Locator",
        name: "park-finder",
        description: "An Android application that lets users find parks near them and search for specific tags. Users can save their own park information and leave comments.",
        technology: [
            <code key="tech-9-1">Kotlin</code>, 
            <code key="tech-9-2">Java</code>,
            <code key="tech-9-3">SQL</code>,
            <code key="tech-9-4">Google Maps API</code>,
        ],
        links: [],
        image: null
    }} />,
];

const SmallProjects = (props) => {
    const { forwardedRef, enterCount } = props;
    return (
        <div className={"small-projects viewport-block view-" + enterCount} ref={forwardedRef}>
            <h3>Other Notable Projects</h3>
            <Container className="small">
                <Row className="card-list">
                    {small}
                </Row>
            </Container>
        </div>
    );
}
const SmallProjectsViewport = handleViewport(SmallProjects, { threshold: 0.2 });

function Projects(props) {
    const { forwardedRef, enterCount } = props;
    return (
        <div id="projects" className={"viewport-block view-" + enterCount} ref={forwardedRef}>
            <h2>Projects</h2>
            <Container className="featured">
                {featured}
            </Container>
            <SmallProjectsViewport />
        </div>
    );
}

function Project(props) {
    return (
        <div className="project">
            <div className="text">
                <code>Featured Project</code>
                <div className="title">{props.info.title}</div>
                <div className="name">{props.info.name}</div>
                <div className="description">{props.info.description}</div>
                <div className="technology">{props.info.technology}</div>
                <div className="links">{props.info.links}</div>
            </div>
            <div className="image">
                <img src={props.info.image} alt="Project Screenshot" />
            </div>
        </div>
    );
}

function ProjectSmall(props) {
    return (
        <Card className="card" bg="dark" text="light" style={{ width: '18rem' }}>
            <Card.Img variant="top" src={props.info.image} />
            <Card.Header className="header">{props.info.name}</Card.Header>
            <Card.Body>
                <Card.Title className="title">{props.info.title}</Card.Title>
                <Card.Text>{props.info.description}</Card.Text>
                <Card.Text>{props.info.technology}</Card.Text>
            </Card.Body>
            <Card.Footer className="links">
                {props.info.links}
            </Card.Footer>
        </Card>    
    );
}

export default Projects;