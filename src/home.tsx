
import Navbar from './Components/navbar';
import Landing from './section/landing';
import Projects from './section/projects';
import About from './section/about';
import Contact from './section/contact';




const Home = () => {
  return (
      <>
        <Navbar />
        <Landing />
        <Projects />
        <About />
        <Contact />
      </>
  );
};

export default Home