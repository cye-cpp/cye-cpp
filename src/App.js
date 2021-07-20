import './App.css';
import handleViewport from 'react-in-viewport';
import NavigationBar from './NavigationBar/NavigationBar';
import Home from './Home/Home';
import AboutMe from './AboutMe/AboutMe';
import Projects from './Projects/Projects';
import Contact from './Contact/Contact';
import { useState } from 'react';

const options = {
  threshold: 0.5
};
const HomeViewport = handleViewport(Home, options);
const AboutMeViewport = handleViewport(AboutMe, options);
const ProjectsViewport = handleViewport(Projects, { threshold: 0.2 }); // give projects more slack
const ContactViewport = handleViewport(Contact, options);

function App() {
  // location manages active item for NavigationBar
  const [location, setLocation] = useState("1");
  return (
    <div className="App">
      <NavigationBar    location={location} />
      <HomeViewport     onEnterViewport={() => setLocation("1")} />
      <AboutMeViewport  onEnterViewport={() => setLocation("2")} />
      <ProjectsViewport onEnterViewport={() => setLocation("3")} />
      <ContactViewport  onEnterViewport={() => setLocation("4")} />
    </div>
  );
}

export default App;
