import image from "../assets/levi.jpg";
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
      <section id="about" className="about my-20 h-vh-90 pt-20 mb-10 ">
        <div className="title desktop:pl-64 flex flex-col items-center desktop:items-start">
          <h1 className="text-3xl font-medium text-center desktop:text-left intersect:motion-preset-slide-up motion-delay-100">About Me</h1>
          <div className="w-20 h-1 bg-blue-500 mt-2"></div>
        </div>
        <div className="body flex flex-col desktop:flex-row m-8 mb-10 items-center desktop:items-start justify-center desktop:justify-start gap-10">
          <div className="profile hidden desktop:inline desktop:max-w-screen-md">
            <img src={image} alt="" className="w-1/2 mx-auto intersect:motion-preset-slide-right motion-delay-100" />
          </div>

          <div className="info w-full grid gap-8 grid-cols-1 text-center items-center justify-items-center desktop:justify-items-start">
            <div className="name text-4xl font-semibold text-blue-500 md:ml-4 intersect:motion-preset-slide-left motion-delay-100">
              LEVI JOHN LEDESMA
            </div>

            <div className="content text-gray-700 text-xl text-justify max-w-3xl px-4 intersect:motion-preset-slide-left motion-delay-200">
              I am taking up Bachelor of Science in <strong>Information Technology</strong> major in <strong>Software Technologies</strong> at West Visayas State University.
              <br />
              <br />
              Interest and curiosity in new Technologies and programming languages are my main motivation to learn and grow as a developer.
              I am passionate about creating web and mobile applications that are not only functional but also visually appealing.
              <br />
              <br />
              These are the technologies that I am knowledgeable with:
            </div>
            <div className="languages gap-x-10 gap-y-4 grid grid-cols-4 md:grid-cols-8 desktop:grid-cols-4 1433:grid-cols-8 desktop:mx-12 1433:ml-0
             text-gray-700 text-sm  intersect:motion-preset-slide-left motion-delay-300">
              <div className="items-center justify-items-center">
                <img src={flutter} alt="flutter" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>Flutter</p>
              </div>
              <div className="items-center justify-items-center ">
                <img src={dart} alt="dart" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>Dart</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={react} alt="react" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>React</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={tailwind} alt="tailwind" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>Tailwind</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={javascript} alt="JavaScript" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>JavaScript</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={nodejs} alt="NodeJS" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>NodeJS</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={firebase} alt="Firebase" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>Firebase</p>
              </div>
              <div className="items-center justify-items-center">
                <img src={mongodb} alt="moongoDB" className="w-14 h-14 transition duration-300 hover:-translate-y-1 hover:scale-150" />
                <p>MongoDB</p>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default About;