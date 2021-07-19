import './Home.css';
import { disableBodyScroll, enableBodyScroll } from 'body-scroll-lock';
import { CSSTransition } from 'react-transition-group';
import { useState } from 'react';
import Nav from 'react-bootstrap/Nav'
import Navbar from 'react-bootstrap/Navbar'
import Container from 'react-bootstrap/Container'

function Home() {
    const [greeting, setGreeting] = useState(true);
    const [content, setContent] = useState(false);
    const documentBody = document.querySelector('body');
    return (
        <div id="home">
            <div className="contents">
                <CSSTransition
                    in={greeting}
                    classNames="greeting"
                    appear
                    timeout={0}
                    onEnter={() => {
                        disableBodyScroll(documentBody, {
                            reserveScrollBarGap: true
                        });
                    }}
                    onEntered={() => {
                        setTimeout(() => {
                            setGreeting(false);
                            setTimeout(() => {
                                enableBodyScroll(documentBody);
                                setContent(true);
                            }, 1000); // TIMEOUT HERE MUST MATCH ANIMATION IN Home.css (.greeting-exit-done)
                        }, 2000); // TIMEOUT HERE MUST MATCH ANIMATION IN Home.css (.greeting-enter-done)
                    }}>
                    <h1>Hi.</h1>
                </CSSTransition>
                <Container className="center">
                    <CSSTransition
                        in={content}
                        classNames="content"
                        timeout={0}>
                        <div className="content">
                            <h2 className="prefix">
                                My name is
                            </h2>
                            <h2 className="name">
                                Calvin Ye
                            </h2>
                            <h4>
                                I develop stuff for things I am interested in.
                            </h4>
                            <p>
                                I am a software engineer who loves developing software for others.<br></br>
                                Always striving to improve myself and my work, I would love to hear your criticisms!
                            </p>
                        </div>
                    </CSSTransition>   
                </Container>
            </div>
        </div>
    );
}

export default Home;