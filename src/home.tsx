
import Navbar from './Components/navbar';
import Landing from './section/landing';
import Projects from './section/projects';
import About from './section/about';


const Home= () => {
  return (
    <>
      <Navbar />

    <Landing />
    <Projects />
    <About />
    </>
  )
}

export default Home