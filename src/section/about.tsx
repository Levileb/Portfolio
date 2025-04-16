import image from "../assets/profile.svg";
import react from "../assets/react.svg";
import flutter from "../assets/flutter.svg";
import dart from "../assets/dart.svg";
import tailwind from "../assets/tailwind.svg";
import javascript from "../assets/js.svg";
import nodejs from "../assets/nodejs.svg";
import firebase from "../assets/firebase.svg";
import mongodb from "../assets/mongo.svg";


export const About = () => {
  return (
    <>
      <section id="about" className="about  mt-20 h-vh-90 pt-32">
        <div className="title">
          <h1 className="text-4xl font-bold text-center ">About Me</h1>
        </div>
        <div className="body  grid gap-8 m-8 md:grid-cols-2 md:gap-10 lg:gap-32 
                        md:items-center md:text-left pt-10 md:pt-20  mb-10">
            <div className="profile  hidden md:inline">
                <img src={image} alt="" className="w-1/2 mx-auto" />
            </div>
           
            <div className="info grid grid-cols-1 gap-8 md:gap-10 ">
              <div className="name text-2xl">
                  LEVI JOHN LEDESMA
              </div>
                <div className="content">
                lorem ipsum dolor sit amet, consectetur adipiscing elit. 
                Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. 
                </div>
                <div className="languages gap-2 grid grid-cols-4 md:grid-cols-8">
                  <div className="items-center justify-items-center">
                    <img src={flutter} alt="flutter" className="w-14 h-14" />
                    <p>Fluter</p>
                    </div>
                  <div className="items-center justify-items-center">
                    <img src={dart} alt="dart" className="w-14 h-14" />
                    <p>Dart</p>
                    </div>
                  <div className="items-center justify-items-center">
                    <img src={react} alt="react" className="w-14 h-14" />
                    <p>React</p>
                    </div>
                  <div className="items-center justify-items-center">
                    <img src={tailwind} alt="tailwind" className="w-14 h-14" />
                    <p>Tailwind</p>
                  </div>
                  <div className="items-center justify-items-center">
                    <img src={javascript} alt="JavaScript" className="w-14 h-14" />
                    <p>JavaScript</p>
                    </div>
                  <div className="items-center justify-items-center"><img src={nodejs} alt="NodeJS" className="w-14 h-14" />
                  <p>NodeJS</p>
                  </div>
                  <div className="items-center justify-items-center">
                    <img src={firebase} alt="Firebase" className="w-14 h-14" />
                    <p>Firebase</p>
                    </div>
                  <div className="items-center justify-items-center">
                    <img src={mongodb} alt="moongoDB" className="w-14 h-14" />
                    <p>MongoDB</p>
                    </div>
                </div>
            </div>
        </div>
        </section>  
    </>
  )
}

export default About