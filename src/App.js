import './App.css';
import { CSSTransition } from 'react-transition-group';
import NavigationBar from './NavigationBar';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';

function App() {
  return (
    <div className="App">
      <CSSTransition
        in={true}
        classNames="navigation"
        appear
        timeout={4000}>
          <NavigationBar />
      </CSSTransition>
      <Home />
      <AboutMe />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
